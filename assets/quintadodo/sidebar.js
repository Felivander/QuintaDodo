/* ==========================================================================
   Quinta Dodó — panel lateral de navegación
   Portado del sitio DODO. Construye el drawer por JS porque el HTML del
   mirror lo genera Framer y reescribirlo a mano se pierde al hidratar.
   ========================================================================== */
(function () {
  "use strict";

  var WA = "https://wa.me/5493454459090?text=Hola!%20Quisiera%20consultar%20por%20Quinta%20Dod%C3%B3";
  var MAPS = "https://maps.app.goo.gl/CXFx84HNeUjMvi5PA";
  var P = "/assets/quintadodo/previews/";

  var LINKS = [
    { t: "Piscina & Relax",         h: "/espacios/piscina",           p: "piscina" },
    { t: "Quincho & Estufa Lepen",  h: "/espacios/quincho",              p: "quincho" },
    { t: "Galería & Asador",        h: "/espacios/galeria-asador",    p: "galeria" },
    { t: "Parque & Animales",       h: "/espacios/parque-cancha-granja",    p: "parque" },
    { t: "Dormitorios",             h: "/espacios/dormitorios",           p: "dormitorios" },
    { t: "Galería de Fotos",        h: "/espacios",                               p: "fotos" },
    { t: "Ubicación & Mapa",        h: "/reservas",                            p: "ubicacion" },
    { t: "Consultar WhatsApp",      h: WA, p: "whatsapp", accent: true, blank: true }
  ];

  var ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var ICON_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';

  var root, built = false;

  // ---- presentacion de 5 fotos por item, con fundido ----
  var SLIDES = 5;          // <cat>-1.jpg .. <cat>-5.jpg
  var INTERVAL = 1500;     // ms entre fotos
  var imgA, imgB, front, mapFrame, timer = null, idx = 0, cat = null;

  function slide(c, i) {
    var src = P + c + "-" + i + ".jpg";
    var back = (front === imgA) ? imgB : imgA;
    var pre = new Image();
    pre.onload = function () {
      back.src = src;
      back.classList.add("is-front");
      front.classList.remove("is-front");
      front = back;
    };
    pre.src = src;
  }

  function startShow(c) {
    if (timer) clearInterval(timer);
    timer = null;
    cat = c;
    if (c === "ubicacion") {
      // en vez de fotos, se ve el mapa en vivo (mismo lugar de Google Maps
      // que la seccion de /reservas y el pie del drawer)
      if (mapFrame && !mapFrame.src && window.QuintaMapa) mapFrame.src = window.QuintaMapa.embedSrc;
      if (mapFrame) mapFrame.classList.add("is-front");
      return;
    }
    if (mapFrame) mapFrame.classList.remove("is-front");
    idx = 1;
    slide(c, idx);
    timer = setInterval(function () {
      idx = (idx % SLIDES) + 1;
      slide(cat, idx);
    }, INTERVAL);
  }

  function stopShow() {
    if (timer) clearInterval(timer);
    timer = null;
    if (mapFrame) mapFrame.classList.remove("is-front");
  }

  function rolling(el, text) {
    var wrap = document.createElement("span");
    wrap.className = "qd-roll";
    Array.from(text).forEach(function (ch, i) {
      var s = document.createElement("span");
      s.className = "qd-char";
      s.style.transitionDelay = (i * 0.022) + "s";
      s.textContent = ch === " " ? " " : ch;
      wrap.appendChild(s);
    });
    el.appendChild(wrap);
  }

  function build() {
    if (built) return;
    built = true;

    root = document.createElement("div");
    root.className = "qd-drawer-root";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "Menú principal");

    var drawer = document.createElement("div");
    drawer.className = "qd-drawer";

    // --- encabezado ---
    var head = document.createElement("div");
    head.className = "qd-head";
    head.innerHTML =
      '<div class="qd-brand">' +
        '<span class="qd-slashes">///</span>' +
        '<span><span class="qd-name">Quinta Dodó</span>' +
        '<span class="qd-tagline">Campo &amp; Hospedaje Exclusivo</span></span>' +
      '</div>';
    var close = document.createElement("button");
    close.className = "qd-close";
    close.type = "button";
    close.setAttribute("aria-label", "Cerrar menú");
    close.innerHTML = ICON_X;
    close.addEventListener("click", hide);
    head.appendChild(close);

    // --- navegación ---
    var nav = document.createElement("nav");
    nav.className = "qd-nav";
    LINKS.forEach(function (l) {
      var a = document.createElement("a");
      a.className = "qd-link" + (l.accent ? " qd-link--accent" : "");
      a.href = l.h;
      if (l.blank) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      rolling(a, l.t);
      a.addEventListener("mouseenter", function () { startShow(l.p); });
      a.addEventListener("mouseleave", stopShow);
      nav.appendChild(a);
    });

    var top = document.createElement("div");
    top.appendChild(head);
    top.appendChild(nav);

    // --- pie ---
    var foot = document.createElement("div");
    foot.className = "qd-foot";
    foot.innerHTML =
      '<div class="qd-foot-block"><span class="qd-tag">[ Ubicación ]</span>' +
      '<a href="' + MAPS + '" target="_blank" rel="noopener noreferrer">Boulevard Yuquerí, Concordia, Entre Ríos ↗</a></div>' +
      '<div class="qd-foot-block"><span class="qd-tag">[ Contacto directo ]</span>' +
      '<a href="' + WA + '" target="_blank" rel="noopener noreferrer">WhatsApp: +54 9 3454 45-9090</a></div>' +
      '<div class="qd-copy">© 2026 Quinta Dodó</div>';

    drawer.appendChild(top);
    drawer.appendChild(foot);

    // --- fotos: dos capas apiladas que se alternan con fundido ---
    var pv = document.createElement("div");
    pv.className = "qd-preview";
    imgA = document.createElement("img");
    imgB = document.createElement("img");
    imgA.alt = imgB.alt = "";
    imgA.src = P + "piscina-1.jpg";
    imgA.classList.add("is-front");
    front = imgA;
    pv.appendChild(imgA);
    pv.appendChild(imgB);

    // capa del mapa en vivo, arriba de las fotos: solo "Ubicación & Mapa"
    // la activa. El src se pone recien al primer hover (no antes) para no
    // gastar una carga de Google Maps en cada visita si nadie pasa por ahi.
    mapFrame = document.createElement("iframe");
    mapFrame.className = "qd-preview-map";
    mapFrame.loading = "lazy";
    mapFrame.title = "Ubicación de Quinta Dodó";
    mapFrame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    pv.appendChild(mapFrame);

    root.appendChild(drawer);
    root.appendChild(pv);

    root.addEventListener("click", function (e) {
      if (e.target === root || e.target === pv) hide();
    });

    document.body.appendChild(root);
  }

  function show() {
    build();
    requestAnimationFrame(function () { root.classList.add("is-open"); });
    document.documentElement.style.overflow = "hidden";
  }

  function hide() {
    if (!root) return;
    stopShow();
    root.classList.remove("is-open");
    document.documentElement.style.overflow = "";
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hide();
  });

  function trigger() {
    var b = document.createElement("button");
    b.className = "qd-trigger";
    b.type = "button";
    b.setAttribute("aria-label", "Abrir menú");
    b.innerHTML = ICON_MENU;
    b.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      show();
    });
    document.body.appendChild(b);
  }

  // ---- links del nav: WhatsApp + Booking (placeholder hasta tener el link real) ----
  var BOOKING = "https://www.booking.com/";   // PLACEHOLDER: reemplazar por el link real de la quinta

  // iconos de linea en un solo tono (currentColor): toman el color del boton
  var ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 12a8 8 0 1 1 3.6 6.7L4 20l1.3-3.6A8 8 0 0 1 4 12z"/>' +
    '<path d="M9 10.5c.4 2 2 3.6 4 4l1.4-1.1 1.6.6-.2 1.6c-3.6.4-6.9-2.9-6.5-6.5l1.6-.2.6 1.6L9 10.5z"/></svg>';
  var ICON_BED = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M3 18V8"/><path d="M3 12h18v6"/><path d="M3 16h18"/>' +
    '<path d="M7 12V9.5A1.5 1.5 0 0 1 8.5 8h2A1.5 1.5 0 0 1 12 9.5V12"/><path d="M21 12v-1a2 2 0 0 0-2-2h-7"/></svg>';

  // pildoras con icono de linea (currentColor)
  function navlinks() {
    var box = document.createElement("div");
    box.className = "qd-navlinks";
    box.innerHTML =
      '<a class="qd-navlink" href="' + WA + '" target="_blank" rel="noopener noreferrer">' + ICON_CHAT + '<span>WhatsApp</span></a>' +
      '<a class="qd-navlink qd-navlink--booking" href="' + BOOKING + '" target="_blank" rel="noopener noreferrer">' + ICON_BED + '<span>Booking</span></a>';
    document.body.appendChild(box);
  }

  function init() {
    build();
    trigger();
    navlinks();
    window.QuintaDrawer = { open: show, close: hide };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
