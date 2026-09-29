#!/usr/bin/env python3
"""Servidor local para ver el sitio mientras se edita.

Uso:  python serve.py [puerto]     (por defecto 8900)  ->  http://127.0.0.1:8900/

Imita lo que hace el .htaccess en DonWeb: /ruta (sin barra) sirve /ruta/index.html,
/ruta/ redirige a /ruta, y los archivos de texto salen en UTF-8. No guarda cache.
"""
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def do_GET(self):
        path, sep, query = self.path.partition("?")
        if path != "/" and path.endswith("/"):
            self.send_response(301)
            self.send_header("Location", path.rstrip("/") + (sep + query if sep else ""))
            self.end_headers()
            return
        fs = self.translate_path(path)
        if os.path.isdir(fs) and os.path.exists(os.path.join(fs, "index.html")):
            self.path = path.rstrip("/") + "/index.html" + (sep + query if sep else "")
        return super().do_GET()

    def send_error(self, code, message=None, explain=None):
        page = os.path.join(ROOT, "404", "index.html")
        if code == 404 and os.path.exists(page):
            with open(page, "rb") as f:
                body = f.read()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().send_error(code, message, explain)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def guess_type(self, path):
        ctype = super().guess_type(path)
        if ctype.startswith("text/") or ctype == "application/javascript":
            ctype += "; charset=utf-8"
        return ctype

    def log_message(self, fmt, *args):
        pass


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8900
    srv = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Sirviendo http://127.0.0.1:{port}/  (Ctrl+C para cortar)")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
