# Quinta Dodó — sitio web

Sitio estático (HTML + CSS + un poco de JS), sin dependencias ni frameworks.
Dominio: https://quintadodo.com

## Cómo se edita

Las páginas se **generan** con un script; no se editan a mano.

| Qué querés cambiar | Dónde |
|---|---|
| Un texto (títulos, párrafos, preguntas frecuentes, guía, legales) | `tools/content.py` |
| Qué foto va en cada lugar / agregar una foto | `tools/images.py` (y `tools/content.py` para usarla) |
| Estructura de una página (secciones, menú, pie) | `tools/build.py` |
| Colores, tipografías, tamaños | `css/site.css` |
| Menú, galería arrastrable, formulario, animaciones | `js/site.js` |

Después de cambiar algo:

```bash
python tools/build.py          # regenera las páginas (y optimiza fotos nuevas)
python serve.py 8900           # ver el sitio en http://127.0.0.1:8900
```

Requiere Python 3 y Pillow (`pip install pillow`) solo para optimizar fotos nuevas (ver `tools/images.py`).
Las URLs de CSS, JS y fotos llevan un hash del contenido (`?v=...`), así que el
navegador nunca mezcla archivos viejos con nuevos.

## Estructura

```
index.html, <seccion>/index.html   páginas generadas (se suben al repo)
css/  js/  fonts/  img/            recursos
tools/                             generador y contenido
.htaccess                          URLs limpias y caché para Apache (DonWeb)
```

## Publicación

DonWeb clona la rama `main` en `public_html/` mediante webhook de GitHub
(cada `git push` a `main` actualiza el sitio).
