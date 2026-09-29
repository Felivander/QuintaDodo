"""Optimiza las fotos del sitio: origen -> img/<nombre>-<ancho>.webp en varios anchos.

Cada foto tiene un nombre logico en PHOTOS. Para AGREGAR una foto nueva:
  1. copiala a la carpeta  fotos-origen/  (la carpeta se crea sola si no existe),
  2. sumá una linea:  "nombre": "f:mi-foto.jpg"  en PHOTOS,
  3. usala en tools/content.py o tools/build.py y corre  python tools/build.py

Las fotos ya optimizadas quedan en img/ y no se vuelven a procesar mientras no cambie el origen.
"""
import glob
import json
import os
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OLD = os.path.join(ROOT, "assets", "framerusercontent.com", "images")
QD = os.path.join(ROOT, "assets", "quintadodo")
OUT = os.path.join(ROOT, "img")
WIDTHS = [480, 960, 1600]
QUALITY = 80

# nombre logico -> ID de Framer (prefijo) o ruta relativa a assets/quintadodo/
PHOTOS = {
    # portada y galeria arrastrable del home
    "portada": "q:portada_quinta.jpg",
    "g-01": "99BDFysUyM0K66sHuK1SUal39U",
    "g-02": "h9MaG5FEkxHmmnSJlOdfA0j6CcU",
    "g-03": "to4m8a7kbzln4In00CRbjuZRQFI",
    "g-04": "kwP41D5KHqHCxkwtEcEkLlaf4Xk",
    "g-05": "E5Eq5rbGo3etGr6SnbIMPlPKec",
    "g-06": "gjXMWnEL0NJu6tSHjURbcQFJE",
    "g-07": "pwftHnssLove9zCJUF8oAr2oT4",
    "g-bano": "q:galeria/bano-1200.jpg",
    "g-dog": "q:galeria/dog-1200.jpg",
    "g-dormitorio": "q:galeria/dormitoriomain-1200.jpg",
    "g-granja": "q:galeria/farm-1200.jpg",
    "g-caballo": "q:galeria/caballo-1200.jpg",
    "g-juegos": "q:galeria/juegos-1200.jpg",
    "g-mate": "q:galeria/mate-1200.jpg",
    "g-salamandra": "q:galeria/salamandra-1200.jpg",
    "g-futbol": "q:galeria/futbol-1200.jpg",
    # home: servicios, proceso, faq
    "serv-1": "jQdABLcVgRSVhuPJFM6Kwsq688",
    "serv-2": "UkYKMgxEEeLqekeyy7dlhXCpl4",
    "serv-3": "w4JMpgPOjdZDTdwhryIsYpKMc",
    "serv-4": "9JOOi0mHXkGkqH1vJE81jbJ6rrc",
    "proceso-1": "jy4ycMShtDVMLy5COajlsNqX50",
    "proceso-2": "ZYDgiVFxO0uDPg1gnHNkoD19PPA",
    "proceso-3": "99BDFysUyM0K66sHuK1SUal39U",
    "faq": "ZDXmYXxJB8FnUP0B7axLaM9w244",
    # pie
    "pie-1": "6iyf6wxTiIm5vh1UGTqOnQPcCwg",
    "pie-2": "h9MaG5FEkxHmmnSJlOdfA0j6CcU",
    # espacios: portada de cada uno + dos pares
    "piscina-hero": "i90vgD5uxXZPQaoX97i0bzS008",
    "piscina-a2": "9JRZqZ2cptOXZZzbsN7cXE64I",
    "quincho-hero": "to4m8a7kbzln4In00CRbjuZRQFI",
    "quincho-a2": "Wqb0YO9AZO3xsrXPmqyHkg1Rvn8",
    "quincho-b1": "dMII1rAnnzpKvsLszH61a8nhus",
    "quincho-b2": "3KsXQSG3mLDgYfkv7vBxqgv7NRQ",
    "galeria-hero": "A0SPsvkLS7buhhBBbYa28296YK8",
    "galeria-a1": "lfoOamMusxfUaBGCA46eSTnakc",
    "galeria-b2": "DtNS3ttw2kk47sj9gu0CbtE",
    "parque-hero": "uZBbkL9W3l8Ird1637Fj94etpM0",
    "dormitorios-hero": "NsZxnsaS2I4N1AIIIzQ8PEhArc",
    "dormitorios-a1": "ap4BY85105nSG5132twMmDtV7hc",
    "dormitorios-b1": "sLL6NKZHdy2YMYpVbQ7DfqRslGk",
    "cocina-hero": "Aa5PPEyq37Itd5e9XNCDIiRwh8",
    "cocina-a1": "sZRYOls8xOppJHIdoxD7k3pfXc",
    "cocina-a2": "8n8F2yEtUt9NrQUl7RwmgPmvco",
    "cocina-b1": "ZjDo5ZWiZytPrjs49u7eaAr4C34",
    # guia
    "guia-dia-de-campo": "fhw5iWcCGm5yDJkr3B7AXsK848",
    "guia-fin-de-semana": "YpxXBPDnVcvWLtPtWfazhYPOTQ",
    "guia-como-reservar": "F64iE3F8M6j1tBO6JoPjQ6r6RI",
    "guia-preguntas-frecuentes": "39xPkJLRsHQ0sUDL9HRaGMswlOE",
}


def find_source(spec):
    if spec.startswith("f:"):
        p = os.path.join(ROOT, "fotos-origen", spec[2:])
        return p if os.path.exists(p) else None
    if spec.startswith("q:"):
        p = os.path.join(QD, spec[2:])
        return p if os.path.exists(p) else None
    cands = []
    for ext in ("jpeg", "jpg", "png"):
        cands += glob.glob(os.path.join(OLD, spec + "*." + ext))
        cands += glob.glob(os.path.join(OLD, spec + "*__*." + ext))
    if not cands:
        return None
    return max(cands, key=lambda p: (Image.open(p).size[0], os.path.getsize(p)))


def build(names=None, verbose=True, force=False):
    os.makedirs(OUT, exist_ok=True)
    meta_path = os.path.join(ROOT, "tools", "images.json")
    old_meta = {}
    if os.path.exists(meta_path) and not force:
        with open(meta_path, encoding="utf-8") as f:
            old_meta = json.load(f)
    meta = {}
    for name, spec in PHOTOS.items():
        if names and name not in names:
            continue
        src = find_source(spec)
        if not src:
            # las fotos ya optimizadas alcanzan si el origen viejo ya no esta
            if name in old_meta:
                meta[name] = old_meta[name]
                continue
            print("FALTA", name, spec, file=sys.stderr)
            continue
        if name in old_meta and all(
            os.path.exists(os.path.join(OUT, f"{name}-{w}.webp"))
            and os.path.getmtime(os.path.join(OUT, f"{name}-{w}.webp")) >= os.path.getmtime(src)
            for w in old_meta[name]["widths"]
        ):
            meta[name] = old_meta[name]
            continue
        im = Image.open(src)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGB")
        if im.mode == "RGBA":
            bg = Image.new("RGB", im.size, (26, 21, 18))
            bg.paste(im, mask=im.split()[3])
            im = bg
        w0, h0 = im.size
        ws = sorted({min(w, w0) for w in WIDTHS})
        made = []
        for w in ws:
            h = round(h0 * w / w0)
            out = os.path.join(OUT, f"{name}-{w}.webp")
            im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=QUALITY, method=6)
            made.append(w)
        meta[name] = {"w": w0, "h": h0, "widths": made}
        if verbose:
            print(f"{name:26} {w0}x{h0}  <- {os.path.relpath(src, ROOT)}")
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=1)
    return meta


if __name__ == "__main__":
    build(verbose=True)
