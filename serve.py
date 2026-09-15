#!/usr/bin/env python3
"""
Local server for the aveon.framer.website mirror.

Framer's CMS data files are fetched with a `?range=<start>-<end>` query that the
real CDN answers with just those bytes. A plain static server returns the whole
file, which corrupts client-side CMS reads, so this server implements it.

Usage:  python serve.py [port]     (default 8899)  ->  http://127.0.0.1:8899/
"""
import os
import sys
import urllib.parse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))


class MirrorHandler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def _range_from_query(self):
        q = urllib.parse.urlsplit(self.path).query
        if not q:
            return None
        val = urllib.parse.parse_qs(q).get("range", [None])[0]
        if not val or "-" not in val:
            return None
        start, _, end = val.partition("-")
        try:
            return int(start), int(end)
        except ValueError:
            return None

    def do_GET(self):
        # --- URLs sin barra final, como el hosting de Framer ---
        # Al hidratar, el router genera links relativos ("../reservas")
        # asumiendo /legal/privacidad SIN barra. Servido con barra, "../"
        # sube a /legal/ en vez de a / y rompe la navegacion.
        path, sep, query = self.path.partition("?")
        if path != "/" and path.endswith("/"):
            self.send_response(301)
            self.send_header("Location", path.rstrip("/") + (sep + query if sep else ""))
            self.end_headers()
            return
        fs = self.translate_path(path)
        if os.path.isdir(fs) and os.path.exists(os.path.join(fs, "index.html")):
            # servir el index directamente, sin el redirect a /dir/ del handler base
            self.path = path.rstrip("/") + "/index.html" + (sep + query if sep else "")

        rng = self._range_from_query()
        if rng is None:
            return super().do_GET()

        path = self.translate_path(self.path)
        if os.path.isdir(path) or not os.path.exists(path):
            return super().do_GET()

        start, end = rng
        size = os.path.getsize(path)
        start = max(0, start)
        end = min(end, size - 1)
        if start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            return
        with open(path, "rb") as f:
            f.seek(start)
            body = f.read(end - start + 1)

        self.send_response(200)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def end_headers(self):
        names = self._headers_buffer_names()
        if "Access-Control-Allow-Origin" not in names:
            self.send_header("Access-Control-Allow-Origin", "*")
        # Sin cache: al editar fotos o textos, el navegador servia la version
        # vieja y parecia que el cambio no se habia aplicado.
        if "Cache-Control" not in names:
            self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
        super().end_headers()

    def send_header(self, keyword, value):
        # Anular el Last-Modified que habilita respuestas 304 con contenido viejo
        if keyword == "Last-Modified":
            return
        super().send_header(keyword, value)

    def _headers_buffer_names(self):
        out = []
        for raw in getattr(self, "_headers_buffer", []) or []:
            try:
                line = raw.decode("latin-1")
            except Exception:
                continue
            if ":" in line:
                out.append(line.split(":", 1)[0])
        return out

    def guess_type(self, path):
        if path.endswith(".framercms"):
            return "application/javascript"
        if path.endswith(".mjs"):
            return "text/javascript"
        return super().guess_type(path)

    def log_message(self, fmt, *args):
        pass  # quiet


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8899
    srv = ThreadingHTTPServer(("127.0.0.1", port), MirrorHandler)
    print("Serving mirror of aveon.framer.website")
    print("  root: %s" % ROOT)
    print("  url : http://127.0.0.1:%d/" % port)
    print("Ctrl+C to stop.")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")


if __name__ == "__main__":
    main()
