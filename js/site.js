/* Quinta Dodó — comportamiento del sitio. Sin dependencias. */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  document.documentElement.classList.remove("no-js");

  /* ---------- menu lateral ---------- */
  (function () {
    var drawer = $("#drawer");
    if (!drawer) return;
    var openBtn = $(".menu-btn");
    var closeBtn = $(".drawer-close", drawer);
    var imgA = $("[data-pv='a']", drawer), imgB = $("[data-pv='b']", drawer);
    var map = $("[data-pv='map']", drawer);
    var front = imgA, timer = null, idx = 0, cat = null, lastFocus = null;
    var SLIDES = 5, EVERY = 1500;

    function slide(c, i) {
      var src = "/img/previews/" + c + "-" + i + ".jpg";
      var back = front === imgA ? imgB : imgA;
      var pre = new Image();
      pre.onload = function () {
        back.src = src;
        back.classList.add("is-front");
        front.classList.remove("is-front");
        front = back;
      };
      pre.src = src;
    }
    function start(c) {
      stop();
      cat = c;
      if (c === "ubicacion") {
        if (!map.getAttribute("src")) map.setAttribute("src", map.getAttribute("data-src"));
        map.classList.add("is-front");
        return;
      }
      idx = 1;
      slide(c, idx);
      timer = setInterval(function () { idx = (idx % SLIDES) + 1; slide(cat, idx); }, EVERY);
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
      map.classList.remove("is-front");
    }
    function open() {
      lastFocus = document.activeElement;
      drawer.classList.add("is-open");
      drawer.removeAttribute("aria-hidden");
      drawer.inert = false;
      document.body.classList.add("no-scroll");
      openBtn.setAttribute("aria-expanded", "true");
      closeBtn.focus();
    }
    function close() {
      stop();
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      drawer.inert = true;
      document.body.classList.remove("no-scroll");
      openBtn.setAttribute("aria-expanded", "false");
      if (lastFocus) lastFocus.focus();
    }
    drawer.inert = true;
    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    drawer.addEventListener("click", function (e) {
      if (e.target === drawer || e.target.classList.contains("drawer-preview")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
    });
    $$(".drawer-link", drawer).forEach(function (a) {
      var c = a.getAttribute("data-pv");
      a.addEventListener("mouseenter", function () { start(c); });
      a.addEventListener("focus", function () { start(c); });
      a.addEventListener("mouseleave", stop);
    });
    // mismo hash en la misma pagina (p. ej. /reservas#mapa): cerrar el menu
    $$("a[href*='#']", drawer).forEach(function (a) {
      a.addEventListener("click", function () {
        var u = new URL(a.href, location.href);
        if (u.pathname.replace(/\/$/, "") === location.pathname.replace(/\/$/, "")) close();
      });
    });
  })();

  /* ---------- aparecer al hacer scroll ---------- */
  (function () {
    var els = $$(".rv");
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach(function (e) { io.observe(e); });
  })();

  /* ---------- servicios: resalta el que esta al centro ---------- */
  (function () {
    var items = $$(".svc");
    if (!items.length || !("IntersectionObserver" in window)) { items.forEach(function (i) { i.classList.add("is-active"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("is-active", en.isIntersecting); });
    }, { rootMargin: "-38% 0px -38% 0px", threshold: 0 });
    items.forEach(function (i) { io.observe(i); });
  })();

  /* ---------- fotos que se mueven despacio al scrollear ---------- */
  (function () {
    var els = $$(".hero-par");
    if (!els.length || reduce) return;
    var ticking = false;
    function update() {
      ticking = false;
      var vh = window.innerHeight;
      els.forEach(function (box) {
        var r = box.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1..1
        var img = $("img", box);
        img.style.transform = "translate3d(0," + (p * r.height * 0.1).toFixed(1) + "px,0)";
      });
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();
  })();

  /* ---------- galeria arrastrable ---------- */
  (function () {
    var root = $(".drag");
    if (!root) return;
    var world = $(".drag-world", root);
    var data = JSON.parse(root.getAttribute("data-imgs"));
    var GAP = 12, ox = 0, oy = 0, vx = 0, vy = 0, W = 0, H = 0, dragging = false, visible = true;
    var lx = 0, ly = 0, lastT = 0, moved = false, touchMode = false;

    function build() {
      world.innerHTML = "";
      var vw = root.clientWidth, vh = root.clientHeight;
      var cols = vw >= 1100 ? 4 : vw >= 700 ? 3 : 2;
      var tw = (vw - GAP * (cols - 1)) / cols;
      var heights = [], i;
      for (i = 0; i < cols; i++) heights.push(0);
      var tiles = [];
      var n = 0;
      // se repite la lista hasta que cada columna supere la altura de la ventana
      while (Math.min.apply(null, heights) < vh + 200 || n < data.length) {
        var d = data[n % data.length];
        var c = heights.indexOf(Math.min.apply(null, heights));
        var ar = Math.max(0.72, Math.min(1.5, d.w / d.h));
        var th = Math.round(tw / ar);
        tiles.push({ d: d, x: c * (tw + GAP), y: heights[c], w: tw, h: th });
        heights[c] += th + GAP;
        n++;
        if (n > 200) break;
      }
      W = cols * (tw + GAP);
      H = Math.max.apply(null, heights);
      // 2x2 copias para poder dar la vuelta
      for (var ry = 0; ry < 2; ry++) {
        for (var rx = 0; rx < 2; rx++) {
          tiles.forEach(function (t) {
            var el = document.createElement("div");
            el.className = "drag-tile";
            el.style.cssText = "width:" + t.w + "px;height:" + t.h + "px;left:" + (t.x + rx * W) + "px;top:" + (t.y + ry * H) + "px";
            var im = document.createElement("img");
            im.src = t.d.src;
            im.srcset = t.d.srcset;
            im.sizes = Math.round(t.w) + "px";
            im.alt = t.d.alt || "";
            im.loading = "lazy";
            im.decoding = "async";
            im.draggable = false;
            el.appendChild(im);
            world.appendChild(el);
          });
        }
      }
      world.style.width = W * 2 + "px";
      world.style.height = H * 2 + "px";
      apply();
    }
    function mod(a, m) { return ((a % m) + m) % m; }
    function apply() {
      var x = mod(ox, W) - W, y = mod(oy, H) - H;
      world.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
    }
    root.addEventListener("pointerdown", function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true; moved = false;
      touchMode = e.pointerType === "touch";
      lx = e.clientX; ly = e.clientY; lastT = performance.now(); vx = vy = 0;
      root.classList.add("is-dragging");
      try { root.setPointerCapture(e.pointerId); } catch (err) {}
    });
    root.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var now = performance.now(), dt = Math.max(1, now - lastT);
      var dx = e.clientX - lx, dy = touchMode ? 0 : e.clientY - ly;
      ox += dx; oy += dy;
      vx = dx / dt * 16; vy = dy / dt * 16;
      lx = e.clientX; ly = e.clientY; lastT = now;
      if (!moved && (Math.abs(dx) + Math.abs(dy)) > 2) { moved = true; root.classList.add("has-moved"); }
      apply();
    });
    function end() { dragging = false; root.classList.remove("is-dragging"); }
    root.addEventListener("pointerup", end);
    root.addEventListener("pointercancel", end);
    root.addEventListener("lostpointercapture", end);

    function frame() {
      if (visible && !dragging) {
        if (Math.abs(vx) > 0.05 || Math.abs(vy) > 0.05) {
          ox += vx; oy += vy; vx *= 0.95; vy *= 0.95; apply();
        } else if (!reduce && !moved) {
          ox -= 0.25; oy -= 0.12; apply(); // deriva suave hasta que la muevan
        }
      }
      requestAnimationFrame(frame);
    }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0 }).observe(root);
    }
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(build, 200); });
    build();
    requestAnimationFrame(frame);
  })();

  /* ---------- guia: filtros ---------- */
  (function () {
    var chips = $$(".chip[data-cat]");
    if (!chips.length) return;
    var cards = $$(".g-card");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var cat = chip.getAttribute("data-cat");
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
        cards.forEach(function (card) {
          card.hidden = !(cat === "todas" || card.getAttribute("data-cat") === cat);
        });
      });
    });
  })();

  /* ---------- reservas: formulario -> WhatsApp ---------- */
  (function () {
    var form = $("#reserva");
    if (!form) return;
    var WA = "5493454459090";
    function fecha(iso) { if (!iso) return ""; var p = iso.split("-"); return p[2] + "/" + p[1] + "/" + p[0]; }
    var hoy = new Date().toISOString().slice(0, 10);
    var llegada = $("#f-llegada"), salida = $("#f-salida");
    llegada.min = hoy; salida.min = hoy;
    llegada.addEventListener("change", function () {
      salida.min = llegada.value || hoy;
      if (salida.value && salida.value < llegada.value) salida.value = "";
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var falta = false;
      ["modalidad", "llegada", "adultos", "nombre"].forEach(function (id) {
        var inp = $("#f-" + id), box = inp.closest(".f-field");
        var vacio = !inp.value || !inp.value.trim();
        box.classList.toggle("is-invalid", vacio);
        if (vacio) falta = true;
      });
      if (falta) return;
      var v = function (id) { return $("#f-" + id).value.trim(); };
      var personas = v("adultos") + " adulto" + (v("adultos") === "1" ? "" : "s");
      if (v("ninos") && v("ninos") !== "0") personas += " + " + v("ninos") + " niño" + (v("ninos") === "1" ? "" : "s");
      var l = ["¡Hola! Quiero consultar disponibilidad en Quinta Dodó \u{1F33F}", "",
        "\u{1F4CB} Modalidad: " + v("modalidad"),
        "\u{1F4C5} Llegada: " + fecha(v("llegada"))];
      if (v("salida")) l.push("\u{1F4C5} Salida: " + fecha(v("salida")));
      l.push("\u{1F465} Personas: " + personas, "\u{1F64B} Nombre: " + v("nombre"));
      if (v("telefono")) l.push("\u{1F4DE} Tel. de contacto: " + v("telefono"));
      if (v("comentarios")) l.push("", "\u{1F4DD} Comentarios: " + v("comentarios"));
      l.push("", "Quedo a la espera de la disponibilidad y el presupuesto. ¡Gracias!");
      $("#f-sent").classList.add("is-visible");
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(l.join("\n")), "_blank", "noopener");
    });
  })();
})();
