"""Genera todas las paginas del sitio.

Uso:  python tools/build.py          (regenera HTML; optimiza fotos si hace falta)
      python tools/build.py --fotos  (fuerza volver a optimizar todas las fotos)

Los textos estan en tools/content.py, las fotos en tools/images.py.
"""
import datetime
import hashlib
import html
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import images  # noqa: E402
from content import *  # noqa: E402,F401,F403

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YEAR = datetime.date.today().year
_hash = {}


def esc(s):
    return html.escape(s, quote=True)


def v(path):
    """URL absoluta con hash del contenido, para que el navegador nunca use una version vieja."""
    if path not in _hash:
        with open(os.path.join(ROOT, path), "rb") as f:
            _hash[path] = hashlib.md5(f.read()).hexdigest()[:8]
    return f"/{path}?v={_hash[path]}"


META = {}


def load_meta(force=False):
    global META
    META = images.build(force=force, verbose=False)


# ------------------------------------------------------------------ piezas
ARROW = ('<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17'
         'L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"/></svg>')
MENU_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>'
X_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
CHAT_SVG = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
            '<path d="M4 12a8 8 0 1 1 3.6 6.7L4 20l1.3-3.6A8 8 0 0 1 4 12z"/>'
            '<path d="M9 10.5c.4 2 2 3.6 4 4l1.4-1.1 1.6.6-.2 1.6c-3.6.4-6.9-2.9-6.5-6.5l1.6-.2.6 1.6L9 10.5z"/></svg>')
BED_SVG = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
           '<path d="M3 18V8"/><path d="M3 12h18v6"/><path d="M3 16h18"/><path d="M7 12V9.5A1.5 1.5 0 0 1 8.5 8h2A1.5 1.5 0 0 1 12 9.5V12"/>'
           '<path d="M21 12v-1a2 2 0 0 0-2-2h-7"/></svg>')


def roll(text, cls=""):
    spans = "".join(
        f'<span class="ch" style="--i:{i}">{"&nbsp;" if c == " " else esc(c)}</span>' for i, c in enumerate(text)
    )
    return f'<span class="roll{(" " + cls) if cls else ""}" aria-hidden="true">{spans}</span><span class="sr">{esc(text)}</span>'


def tag(text, cls=""):
    return f'<span class="tag{(" " + cls) if cls else ""}"><i>[</i>{esc(text)}<i>]</i></span>'


def btn(text, href, ext=False, cls=""):
    extra = ' target="_blank" rel="noopener noreferrer"' if ext else ""
    return f'<a class="btn{(" " + cls) if cls else ""}" href="{esc(href)}"{extra}>{roll(text)}{ARROW}</a>'


def img(name, alt, sizes="100vw", eager=False, cls=""):
    m = META[name]
    ws = m["widths"]
    srcset = ", ".join(f"{v(f'img/{name}-{w}.webp')} {w}w" for w in ws)
    load = 'loading="eager" fetchpriority="high"' if eager else 'loading="lazy"'
    c = f' class="{cls}"' if cls else ""
    return (f'<img{c} src="{v(f"img/{name}-{mid(name)}.webp")}" srcset="{srcset}" sizes="{sizes}" '
            f'width="{m["w"]}" height="{m["h"]}" alt="{esc(alt)}" {load} decoding="async">')


def mid(name, target=960):
    return min(META[name]["widths"], key=lambda w: abs(w - target))


def rv(delay=0):
    return f' style="--d:{delay}s"' if delay else ""


# ------------------------------------------------------------------ armazon
DRAWER_LINKS = [
    ("Piscina & Relax", "/espacios/piscina", "piscina", False),
    ("Quincho & Estufa Lepen", "/espacios/quincho", "quincho", False),
    ("Galería & Asador", "/espacios/galeria-asador", "galeria", False),
    ("Parque & Animales", "/espacios/parque-cancha-granja", "parque", False),
    ("Dormitorios", "/espacios/dormitorios", "dormitorios", False),
    ("Galería de Fotos", "/espacios", "fotos", False),
    ("Ubicación & Mapa", "/reservas#mapa", "ubicacion", False),
    ("Consultar WhatsApp", WA, "whatsapp", True),
]


def header():
    return f"""<header class="topbar">
<button class="menu-btn" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="drawer">{MENU_SVG}</button>
<nav class="topbar-links" aria-label="Reservas">
<a class="tl" href="/reservas"><span class="tl-tag">[ Reservar ]</span><span class="tl-txt">Consultar fecha</span></a>
<a class="tl tl-b" href="{BOOKING}" target="_blank" rel="noopener noreferrer"><span class="tl-tag">[ Booking ]</span><span class="tl-txt">Reservar online ↗</span></a>
</nav>
</header>"""


def drawer():
    links = []
    for t, href, pv, accent in DRAWER_LINKS:
        cls = "drawer-link" + (" drawer-link--accent" if accent else "")
        ext = ' target="_blank" rel="noopener noreferrer"' if accent else ""
        links.append(f'<a class="{cls}" href="{esc(href)}" data-pv="{pv}"{ext}>{roll(t)}</a>')
    return f"""<div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menú principal" aria-hidden="true">
<div class="drawer-panel">
<div>
<div class="drawer-head">
<a class="drawer-logo" href="/"><img src="{v('img/logo-oscuro.png')}" width="856" height="472" alt="Quinta Dodó, ir al inicio"></a>
<button class="drawer-close" type="button" aria-label="Cerrar menú">{X_SVG}</button>
</div>
<nav class="drawer-nav" aria-label="Menú principal">
{chr(10).join(links)}
</nav>
</div>
<div class="drawer-foot">
<div><span class="mono">[ Ubicación ]</span><a href="{MAPS_LINK}" target="_blank" rel="noopener noreferrer">{ADDRESS} ↗</a></div>
<div><span class="mono">[ Contacto directo ]</span><a href="{WA}" target="_blank" rel="noopener noreferrer">WhatsApp: {PHONE}</a></div>
<div class="drawer-copy">© {YEAR} Quinta Dodó</div>
</div>
</div>
<div class="drawer-preview">
<img class="is-front" data-pv="a" src="/img/previews/piscina-1.jpg" alt="" loading="lazy">
<img data-pv="b" alt="" loading="lazy">
<iframe data-pv="map" title="Ubicación de Quinta Dodó" data-src="{MAPS_EMBED}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>"""


def footer():
    esp = "".join(f'<a href="/espacios/{e["slug"]}">{esc(e["nombre"])}</a>' for e in ESPACIOS)
    return f"""<footer class="site-footer">
<div class="foot-a">
{img('pie-1', '', sizes='100vw', cls='foot-bg')}
<div class="wrap"><div class="foot-cols">
<div class="foot-brand">
<p class="h4">Quinta Dodó</p>
<p class="loc">Boulevard Yuquerí · Concordia, Entre Ríos</p>
<a href="{MAPS_LINK}" target="_blank" rel="noopener noreferrer">{ADDRESS} ↗</a>
<a href="{WA}" target="_blank" rel="noopener noreferrer">WhatsApp {PHONE}</a>
<a href="tel:{PHONE_TEL}">Llamar: {PHONE}</a>
</div>
<nav class="foot-col" aria-label="Sitio">
{tag('Quinta Dodó')}
<a href="/">Inicio</a><a href="/la-quinta">La Quinta</a><a href="{WA}" target="_blank" rel="noopener noreferrer">Consultar</a><a href="/espacios">Espacios</a><a href="/guia">Guía</a><a href="/reservas">Reservas</a>
</nav>
<nav class="foot-col foot-col--wide" aria-label="Espacios">
{tag('Espacios')}
{esp}
</nav>
<nav class="foot-col foot-col--social" aria-label="Redes">
{tag('Redes')}
<a href="{INSTAGRAM}" target="_blank" rel="noopener noreferrer">Instagram</a>
</nav>
</div></div>
</div>
<div class="foot-b">
{img('pie-2', '', sizes='100vw', cls='foot-bg')}
<div class="wrap">
<div class="foot-legal">
<div class="links"><a href="/legal/privacidad">Política de Privacidad</a><a href="/legal/terminos">Términos y Condiciones</a></div>
<div><p>© {YEAR} Quinta Dodó. Todos los derechos reservados.</p><p>Hecho con cariño en Concordia, Entre Ríos.</p></div>
</div>
</div>
<p class="foot-big" aria-label="Ideas Studios">Ideas Studios</p>
</div>
</footer>"""


def jsonld():
    data = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": NAME,
        "url": SITE + "/",
        "image": SITE + v("img/og.jpg").split("?")[0],
        "telephone": PHONE_TEL,
        "description": DESC_HOME,
        "address": {"@type": "PostalAddress", "streetAddress": "Boulevard Yuquerí", "addressLocality": "Concordia",
                    "addressRegion": "Entre Ríos", "addressCountry": "AR"},
        "geo": {"@type": "GeoCoordinates", "latitude": -31.3070718, "longitude": -58.0261913},
        "sameAs": [INSTAGRAM, BOOKING],
    }
    return '<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False) + "</script>"


def page(path, title, desc, main, *, body_class="", ld=""):
    canonical = SITE + (path if path != "/" else "/")
    og_img = SITE + "/img/og.jpg"
    full_title = title if "Quinta Dodó" in title else f"{title} — Quinta Dodó"
    return f"""<!doctype html>
<html lang="es-AR" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(full_title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{canonical}">
<meta name="theme-color" content="#e8e0d6">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_AR">
<meta property="og:site_name" content="Quinta Dodó">
<meta property="og:title" content="{esc(full_title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{og_img}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{v('favicon.png')}">
<link rel="apple-touch-icon" href="{v('favicon.png')}">
<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-display-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{v('css/site.css')}">
<script>document.documentElement.classList.remove("no-js")</script>
<script src="{v('js/site.js')}" defer></script>
{ld}
</head>
<body class="{body_class}">
<a class="skip" href="#contenido">Saltar al contenido</a>
{header()}
{drawer()}
<main id="contenido">
{main}
</main>
{footer()}
</body>
</html>
"""


def write(path, content):
    rel = path.strip("/")
    out = os.path.join(ROOT, rel, "index.html") if rel else os.path.join(ROOT, "index.html")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)


def phead(tag_text, h1, lead, xl=False):
    return f"""<section class="sec sec--dark phead"><div class="wrap"><div class="g12">
{tag(tag_text)}
<div class="txt"><h1 class="h1{' h1--xl' if xl else ''}">{esc(h1)}</h1><p class="lead">{esc(lead)}</p></div>
</div></div></section>"""


def cta_band(title="¿Listo para reservar tu fecha?"):
    return f"""<section class="sec sec--terra cta"><div class="wrap"><div class="cta-in rv">
{tag('Hablemos')}
<h2 class="h2">{esc(title)}</h2>
<p class="lead">Escribinos por WhatsApp con tu fecha y la cantidad de personas: te confirmamos disponibilidad y presupuesto.</p>
{btn('Consultar fecha', '/reservas')}
</div></div></section>"""


def card(href, name, alt, title, meta, wide=False, sizes="(min-width: 900px) 50vw, 100vw"):
    return (f'<a class="card{" card--wide" if wide else ""} rv" href="{href}">{img(name, alt, sizes=("100vw" if wide else sizes))}'
            f'<span class="meta">{esc(meta)}</span><span class="ttl">{esc(title)}</span></a>')


# ------------------------------------------------------------------ paginas
def home():
    order = ["g-01", "g-02", "g-03", "g-04", "g-05", "g-06", "g-07", "g-bano", "g-dog", "g-dormitorio", "g-granja",
             "g-caballo", "g-juegos", "g-mate", "g-salamandra", "g-futbol"]
    alts = {
        "g-01": "Piscina cercada y parque", "g-02": "Parrilla criolla", "g-03": "Quincho con estufa Lepen",
        "g-04": "Dormitorio con mesa de luz y lámpara", "g-05": "Galería con banco frente al parque", "g-06": "Pino y parque",
        "g-07": "Cocina con estantes", "g-bano": "Baño", "g-dog": "Perro en el parque", "g-dormitorio": "Dormitorio",
        "g-granja": "Gallinas en la granja", "g-caballo": "Caballo en el predio", "g-juegos": "Mesa de ping-pong",
        "g-mate": "Mate al atardecer", "g-salamandra": "Salamandra a leña", "g-futbol": "Cancha de fútbol",
    }
    tiles = []
    for n in order:
        m = META[n]
        tiles.append({
            "src": v(f"img/{n}-{mid(n)}.webp"),
            "srcset": ", ".join(f"{v(f'img/{n}-{w}.webp')} {w}w" for w in m["widths"]),
            "w": m["w"], "h": m["h"], "alt": alts[n],
        })
    tiles_json = esc(json.dumps(tiles, ensure_ascii=False))

    svc = ""
    for s in SERVICIOS:
        chips = "".join(f"<li>[{esc(c)}]</li>" for c in s["chips"])
        svc += f"""<article class="svc"><div class="svc-in">
<div class="svc-chips"><span class="tag tag--sm"><i>[</i>Incluye<i>]</i></span><ul>{chips}</ul></div>
<div class="svc-media">{img(s['img'], s['alt'], sizes='(min-width: 1100px) 30vw, 90vw')}</div>
<div class="svc-txt">{tag(f"{s['n']} / Espacio")}<h3 class="h3">{esc(s['titulo'])}</h3><p>{esc(s['txt'])}</p>{btn('Ver más', '/espacios/' + s['slug'])}</div>
</div></article>"""

    pasos = ""
    for p in PASOS:
        checks = "".join(f"<li>✓ {esc(c)}</li>" for c in p["checks"])
        pasos += f"""<article class="step">
{tag(p['tag'])}
<div class="step-txt"><h3 class="h3">{esc(p['titulo'])}</h3><p>{esc(p['txt'])}</p><ul>{checks}</ul></div>
<div class="step-media">{img(p['img'], p['alt'], sizes='(min-width: 1100px) 42vw, 90vw')}</div>
</article>"""

    faq = ""
    first = True
    for grp, qs in FAQ:
        items = ""
        for q, a in qs:
            items += f'<details class="q"{" open" if first else ""}><summary>{esc(q)}</summary><div class="a"><p>{esc(a)}</p></div></details>'
            first = False
        faq += f'<div class="faq-group">{tag(grp)}{items}</div>'

    g = GUIA
    journal = (card("/guia/" + g[0]["slug"], g[0]["img"], g[0]["alt"], g[0]["title"], f'{g[0]["min"]} min de lectura', wide=True)
               + card("/guia/" + g[1]["slug"], g[1]["img"], g[1]["alt"], g[1]["title"], f'{g[1]["min"]} min de lectura')
               + card("/guia/" + g[2]["slug"], g[2]["img"], g[2]["alt"], g[2]["title"], f'{g[2]["min"]} min de lectura'))

    main = f"""<section class="portada" aria-label="Quinta Dodó">
{img('portada', 'Casa de la quinta con la tranquera de entrada', sizes='100vw', eager=True, cls='bg')}
<img class="logo" src="{v('img/logo-blanco.png')}" width="856" height="472" alt="Quinta Dodó" fetchpriority="high">
</section>

<section class="drag" data-imgs="{tiles_json}" aria-label="Galería de fotos de la quinta: arrastrá para recorrerla">
<div class="drag-world"></div>
<span class="drag-hint">Arrastrá para recorrer la quinta</span>
</section>

<section class="sec sec--dark"><div class="wrap">
<div class="esp-head rv"><h2 class="h2">Los espacios de la quinta</h2>{btn('Ver todos los espacios', '/espacios')}</div>
<div class="statement rv">
<div class="who"><img src="{v('img/logo-blanco.png')}" width="856" height="472" alt=""><div><b>Quinta Dodó</b><span>Quincho &amp; salón</span></div></div>
<div class="body"><h2 class="h2">“Predio cerrado, exclusivo y listo para usar”</h2>
<p class="lead">Llegás y está todo listo: pileta impecable, quincho acondicionado y el parque entero a disposición.</p>
{btn('Ver todos los espacios', '/espacios')}</div>
</div>
</div></section>

<section class="sec sec--dark" style="padding-top:0"><div class="wrap">
<div class="svc-head g12 rv">
<div class="c-lab">{tag('Qué ofrece la quinta')}</div>
<div class="c-main"><h2 class="h2">Confort integral en un entorno campestre único</h2>
<p class="lead">Desde celebraciones multitudinarias hasta fines de semana de puro silencio y relax.</p>
{btn('Reservar por WhatsApp', WA, ext=True)}</div>
</div>
{svc}
</div></section>

<section class="sec sec--terra propuesta" aria-label="Nuestra propuesta">
<span class="plus" aria-hidden="true">+</span><span class="plus" aria-hidden="true">+</span><span class="plus" aria-hidden="true">+</span><span class="plus" aria-hidden="true">+</span>
<div class="rv">{tag('Nuestra propuesta')}<h2 class="h2">Cada rincón pensado para disfrutar el campo sin resignar confort</h2></div>
</section>

<section class="sec sec--light"><div class="wrap">
<div class="about-quote rv g12"><div class="c-lab">{tag('La propuesta')}</div>
<div class="c-main"><h2 class="h2">“Un predio entero: pileta, quincho y parque, sin compartir el predio con nadie más.”</h2></div></div>
<div class="about-body rv">
<div class="about-who"><div><b>Quinta Dodó</b><span>Concordia, Entre Ríos</span></div></div>
<div class="about-txt"><h3 class="h3">La Quinta</h3>
<p>Quinta Dodó está sobre Boulevard Yuquerí, en Concordia, Entre Ríos: 5.000 m² de parque arbolado con acceso pavimentado todo el año.</p>
<p>Un enclave sereno a 15 minutos del centro, cerca de los complejos termales, el lago Salto Grande y la costanera.</p>
{btn('Ver más', '/la-quinta')}</div>
</div>
</div></section>

<section class="sec sec--dark"><div class="wrap">
<div class="proc-head g12 rv"><div class="c-lab">{tag('Cómo reservar')}</div>
<div class="c-main"><h2 class="h2">Un proceso simple, transparente y directo</h2>
<p class="lead" style="margin-top:20px">Tres pasos para asegurar tu fecha en Quinta Dodó y disfrutar sin imprevistos.</p></div></div>
{pasos}
</div></section>

<section class="sec sec--light"><div class="wrap"><div class="faq-in">
<div class="faq-side rv">{tag('Preguntas frecuentes')}
<h2 class="h2">Todo lo que necesitás saber antes de reservar</h2>
<p class="lead">Las consultas más frecuentes sobre modalidades, horarios, seña y qué incluye el alquiler.</p>
<p class="note">¿Tenés otra consulta? Escribinos por WhatsApp.</p>
{img('faq', 'Casa de la quinta y camino de entrada', sizes='308px')}
{btn('Reservas', '/reservas')}</div>
<div class="faq-list rv">{faq}</div>
</div></div></section>

<section class="sec sec--dark"><div class="wrap">
<div class="jr-head rv"><h2 class="h2">Modalidades, ubicación y preguntas frecuentes</h2>{btn('Ver la guía', '/guia')}</div>
<div class="cards">{journal}</div>
</div></section>

{cta_band()}"""
    return page("/", "Quinta Dodó — Campo, Piscina & Eventos Privados | Concordia, Entre Ríos", DESC_HOME, main,
                body_class="home", ld=jsonld())


def la_quinta():
    bloques = ""
    for t, h3, ps, btxt, href in LQ_BLOQUES:
        bloques += (f'<div class="lq-block rv">{tag(t)}<h3 class="h3">{esc(h3)}</h3><div class="txt">'
                    + "".join(f"<p>{esc(p)}</p>" for p in ps) + btn(btxt, href) + "</div></div>")
    metr = "".join(f'<div class="metric"><b>{esc(n)}</b><span>{esc(t)}</span></div>' for n, t in LQ_METRICAS)
    feats = "".join(f'<div class="feat rv"><h3 class="h4">{esc(t)}</h3><p>{esc(d)}</p></div>' for t, d in LQ_DESTACADOS)
    main = f"""{phead('Parque arbolado de 5.000 m²', 'Un predio entero para disfrutar', 'Quinta Dodó son 5.000 m² de parque arbolado en Concordia, con pileta, quincho climatizado, asador criollo, cancha y granja. Se alquila entera y en exclusiva.', xl=False)}
<div class="hero-par">{img('portada', 'Casa de la quinta con la tranquera de entrada')}</div>
<section class="sec--light"><div class="lq-quote rv">{tag('La propuesta')}
<h2 class="h2" style="margin-top:24px">“No alquilamos un salón. Alquilamos el predio entero: mientras está tu grupo, no hay nadie más dando vueltas.”</h2></div>
<div class="lq-blocks wrap">{bloques}</div></section>
<section class="sec sec--dark"><div class="wrap rv">{tag('5.000 m²')}
<h2 class="h2 metrics-head">Un predio entero pensado para grupos, familias y celebraciones.</h2>
<div class="metrics">{metr}</div>
<div style="margin-top:80px">{btn('Consultar fecha', '/reservas')}</div></div></section>
<section class="sec sec--light"><div class="wrap">{tag('Destacados')}
<h2 class="h2 feat-head">Lo que encontrás en la quinta</h2>{feats}</div></section>
{cta_band()}"""
    return page("/la-quinta", "La Quinta — Predio, espacios y servicios",
                "Quinta Dodó son 5.000 m² de parque arbolado en Concordia, con pileta, quincho climatizado, asador criollo, cancha y granja. Se alquila entera y en exclusiva.",
                main)


def espacios_index():
    cards = "".join(
        f'<a class="esp-card rv" href="/espacios/{e["slug"]}"><div class="im">{img(e["card"], e["nombre"], sizes="(min-width: 900px) 48vw, 96vw")}</div>'
        f'<div class="ttl"><span>{esc(e["nombre"])}</span><small>Ver espacio →</small></div></a>' for e in ESPACIOS)
    main = f"""{phead('La propuesta', 'Los espacios', 'Quinta Dodó está sobre Boulevard Yuquerí, en Concordia, Entre Ríos: 5.000 m² de parque arbolado con acceso pavimentado todo el año.', xl=True)}
<section class="sec sec--page"><div class="wrap"><div class="esp-grid">{cards}</div></div></section>
{cta_band()}"""
    return page("/espacios", "Los Espacios — Piscina, Quincho, Parque y Hospedaje",
                "Piscina con banco sumergido, quincho con estufa Lepen, galería con asador criollo, parque con cancha y granja, dormitorios y cocina equipada en Quinta Dodó.",
                main)


def pair(names, alts):
    ims = "".join(f'<div class="im rv">{img(n, a, sizes="(min-width: 900px) 48vw, 96vw")}</div>' for n, a in zip(names, alts))
    return f'<div class="pair{" pair--one" if len(names) == 1 else ""}">{ims}</div>'


def espacio(e):
    i = ESPACIOS.index(e)
    prev_e, next_e = ESPACIOS[i - 1], ESPACIOS[(i + 1) % len(ESPACIOS)]
    a1 = "".join(f"<p>{esc(p)}</p>" for p in e["ta"][0])
    a2 = "".join(f"<p>{esc(p)}</p>" for p in e["ta"][1])
    b1 = f"<p>{esc(e['tb'][0])}</p>"
    b2 = f"<p>{esc(e['tb'][1])}</p>" if len(e["tb"]) > 1 else ""
    alts = e["alt"]
    n_a = len(e["a"])
    main = f"""{phead('Concordia, Entre Ríos', e['nombre'], e['lead'])}
<div class="hero-par">{img(e['hero'], e['nombre'], eager=True)}</div>
<section class="sec sec--light" style="padding-bottom:0"><div class="wrap">
<div class="intro-stmt rv" style="padding:0 0 100px"><p>{esc(ESP_INTRO)}</p></div>
{pair(e['a'], alts[:n_a])}
<div class="txt2 rv"><div class="col col--a">{a1}</div><div class="col col--b">{a2}</div></div>
{pair(e['b'], alts[n_a:n_a + len(e['b'])])}
<div class="txt2 rv"><div class="col col--a">{b1}</div><div class="col col--b">{b2}</div></div>
</div></section>
<section class="band sec--terra"><div class="wrap"><div class="g12">
<p class="band-q rv">{esc(ESP_BAND)}</p>
<div class="band-nav">{btn('Espacio anterior', '/espacios/' + prev_e['slug'], cls='btn--dark')}{btn('Siguiente espacio', '/espacios/' + next_e['slug'], cls='btn--dark')}</div>
</div></div></section>
<section class="sec sec--dark more"><div class="wrap">
<h2 class="h2 rv">Ver los demás espacios {btn('Ver todos los espacios', '/espacios')}</h2>
<div class="cards">{card('/espacios/' + prev_e['slug'], prev_e['card'], prev_e['nombre'], prev_e['nombre'], 'Espacio')}{card('/espacios/' + next_e['slug'], next_e['card'], next_e['nombre'], next_e['nombre'], 'Espacio')}</div>
</div></section>"""
    return page("/espacios/" + e["slug"], f"{e['nombre']} — Quinta Dodó, Concordia", e["lead"], main)


def guia_index():
    chips = '<button class="chip" type="button" data-cat="todas" aria-pressed="true">Todas</button>' + "".join(
        f'<button class="chip" type="button" data-cat="{esc(c)}" aria-pressed="false">{esc(c)}</button>' for c in GUIA_CATS)
    cards = "".join(
        f'<a class="g-card rv" href="/guia/{g["slug"]}" data-cat="{esc(g["cat"])}"><div class="im">{img(g["img"], g["alt"], sizes="(min-width: 900px) 48vw, 96vw")}</div>'
        f'<div class="m"><span>{esc(g["cat"])}</span><span>{g["min"]} min de lectura</span></div>'
        f'<h2 class="h4">{esc(g["title"])}</h2><p>{esc(g["desc"])}</p></a>' for g in GUIA)
    main = f"""{phead('La guía', 'Modalidades, ubicación y todo antes de reservar', 'Cómo funciona cada modalidad, cómo llegar y las respuestas a lo que más nos preguntan antes de reservar en Quinta Dodó.')}
<section class="sec sec--page"><div class="wrap"><div class="filters" role="group" aria-label="Filtrar por tema">{chips}</div>
<div class="g-cards">{cards}</div></div></section>
{cta_band()}"""
    return page("/guia", "La Guía — Modalidades, ubicación y preguntas frecuentes",
                "Cómo funciona cada modalidad, cómo llegar a la quinta y las respuestas a las preguntas más frecuentes antes de reservar en Quinta Dodó.",
                main)


def prose(blocks):
    out = []
    for b in blocks:
        k = b[0]
        if k == "link":
            href = MAPS_LINK if b[2] == "MAPS" else b[2]
            out.append(f'<p><a href="{esc(href)}" target="_blank" rel="noopener noreferrer">{esc(b[1])}</a></p>')
        else:
            out.append(f"<{k}>{esc(b[1])}</{k}>")
    return "\n".join(out)


def articulo(g):
    otros = [x for x in GUIA if x["slug"] != g["slug"]][:3]
    i = GUIA.index(g)
    prev_g, next_g = GUIA[i - 1], GUIA[(i + 1) % len(GUIA)]
    rel = "".join(card("/guia/" + o["slug"], o["img"], o["alt"], o["title"], f'{o["cat"]} · {o["min"]} min', sizes="(min-width: 900px) 32vw, 96vw") for o in otros)
    main = f"""<section class="sec sec--dark art-head"><div class="wrap">
<a class="back" href="/guia">← Volver a la guía</a>
<div class="meta"><span>{esc(g['cat'])}</span><span>{g['min']} min de lectura</span></div>
<h1 class="h1">{esc(g['title'])}</h1>
<p class="lead">{esc(g['desc'])}</p>
</div></section>
<div class="art-cover">{img(g['img'], g['alt'], eager=True)}</div>
<section class="sec sec--light" style="padding-top:0;padding-bottom:0"><div class="wrap"><div class="art-body">
<div class="side">{tag(g['cat'])}</div>
<div class="prose">{prose(g['body'])}</div>
</div></div></section>
<section class="sec sec--dark"><div class="wrap">
<div class="related-h rv"><h2 class="h3">Más artículos</h2>{btn('Ver toda la guía', '/guia')}</div>
<div class="related">{rel}</div>
<div class="art-nav">{btn('Artículo anterior', '/guia/' + prev_g['slug'])}{btn('Artículo siguiente', '/guia/' + next_g['slug'])}</div>
</div></section>
{cta_band('Reservá tu fecha en Quinta Dodó')}"""
    return page("/guia/" + g["slug"], g["title"], g["desc"], main)


def reservas():
    mods = "".join(f'<option value="{esc(m)}">{esc(m)}</option>' for m in
                   ["Día de Campo (diurno)", "Fin de Semana Completo", "Estadía Vacacional (semana/quincena)"])
    main = f"""<section class="sec sec--page book"><div class="book-in">
{tag('Reservar')}
<h1 class="h2">Consultá tu fecha</h1>
<p class="lead">Completá los datos de tu estadía y te escribimos por WhatsApp con la disponibilidad y el presupuesto exacto. También podés reservar directo por Booking.com.</p>
<form id="reserva" novalidate>
<div class="f-row">
<div class="f-field"><label for="f-modalidad">Modalidad</label><select id="f-modalidad" required><option value="" disabled selected>Elegí una modalidad</option>{mods}</select></div>
<div class="f-field"><label for="f-adultos">Adultos</label><input id="f-adultos" type="number" min="1" max="30" value="2" required></div>
</div>
<div class="f-row f-row--3">
<div class="f-field"><label for="f-llegada">Fecha de llegada</label><input id="f-llegada" type="date" required></div>
<div class="f-field"><label for="f-salida">Fecha de salida (opcional)</label><input id="f-salida" type="date"></div>
<div class="f-field"><label for="f-ninos">Niños</label><input id="f-ninos" type="number" min="0" max="20" value="0"></div>
</div>
<div class="f-row">
<div class="f-field"><label for="f-nombre">Nombre y apellido</label><input id="f-nombre" type="text" placeholder="Cómo te llamás" autocomplete="name" required></div>
<div class="f-field"><label for="f-telefono">Teléfono de contacto</label><input id="f-telefono" type="tel" placeholder="+54 9 ..." autocomplete="tel"></div>
</div>
<div class="f-field"><label for="f-comentarios">Comentarios (opcional)</label><textarea id="f-comentarios" placeholder="Motivo del evento, alguna consulta puntual..."></textarea></div>
<div class="f-actions">
<button class="f-btn f-btn--wa" type="submit">{CHAT_SVG}Enviar consulta por WhatsApp</button>
<div class="f-or">— o —</div>
<a class="f-btn f-btn--bk" href="{BOOKING}" target="_blank" rel="noopener noreferrer">{BED_SVG}Reservar directo en Booking.com</a>
</div>
<p class="f-sent" id="f-sent" role="status">✓ Se abrió WhatsApp con tu consulta lista para enviar.</p>
<p class="f-note">No cobramos nada por consultar. La seña se coordina una vez confirmada la disponibilidad.</p>
</form>
</div></section>
<section class="sec sec--dark map" id="mapa"><div class="map-in">
{tag('Ubicación')}
<h2 class="h3">Cómo llegar</h2>
<p>Boulevard Yuquerí, Concordia, Entre Ríos. Acceso pavimentado todo el año, a 15 minutos del centro.</p>
<div class="map-frame"><iframe src="{MAPS_EMBED}" title="Ubicación de Quinta Dodó en Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
<a class="map-link" href="{MAPS_LINK}" target="_blank" rel="noopener noreferrer">Abrir en Google Maps ↗</a>
</div></section>"""
    return page("/reservas", "Reservas & Consultas",
                "Consultá disponibilidad y presupuesto para tu día de campo, fin de semana o estadía en Quinta Dodó, Concordia. Reservá por WhatsApp o Booking.com.",
                main)


def legal(slug):
    d = LEGAL[slug]
    main = f"""{phead('Legal', d['title'], d['lead'])}
<section class="sec--light legal"><div class="prose"><p class="upd">Última actualización: {LEGAL_FECHA}</p>
{prose(d['body'])}</div></section>"""
    return page("/legal/" + slug, d["title"], d["desc"], main)


def not_found():
    main = f"""<section class="sec sec--dark nf"><div>
{tag('Error 404')}
<h1 class="h1">Esta página no existe</h1>
<p class="lead" style="margin:0 auto">Puede que el link haya cambiado. Volvé al inicio o mirá los espacios de la quinta.</p>
{btn('Volver al inicio', '/')}
</div></section>"""
    return page("/404", "Página no encontrada", "La página que buscás no existe en Quinta Dodó.", main)


def extras(paths):
    urls = "\n".join(f"<url><loc>{SITE}{p if p != '/' else '/'}</loc></url>" for p in paths)
    with open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8", newline="\n") as f:
        f.write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}\n</urlset>\n')
    with open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8", newline="\n") as f:
        f.write(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")


def main():
    force = "--fotos" in sys.argv
    load_meta(force)
    pages = [("/", home()), ("/la-quinta", la_quinta()), ("/espacios", espacios_index())]
    pages += [("/espacios/" + e["slug"], espacio(e)) for e in ESPACIOS]
    pages += [("/guia", guia_index())]
    pages += [("/guia/" + g["slug"], articulo(g)) for g in GUIA]
    pages += [("/reservas", reservas()), ("/legal/privacidad", legal("privacidad")), ("/legal/terminos", legal("terminos"))]
    for p, html_ in pages:
        write(p, html_)
    write("/404", not_found())
    extras([p for p, _ in pages])
    print(f"{len(pages) + 1} paginas generadas")


if __name__ == "__main__":
    main()
