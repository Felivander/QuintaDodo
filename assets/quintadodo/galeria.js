/* ==========================================================================
   Quinta Dodó — galeria arrastrable del home
   Reemplaza la de Framer: sus columnas quedaban de distinto alto y al repetir
   el bloque aparecian huecos oscuros. Aca cada columna da la vuelta por su
   cuenta (su propio alto), asi nunca hay costuras ni huecos.
   ========================================================================== */
(function () {
  "use strict";

  var I = "/assets/framerusercontent.com/images/";
  var G = "/assets/quintadodo/galeria/";
  // [archivo, ancho/alto]
  var FOTOS = [
    [I + "99BDFysUyM0K66sHuK1SUal39U__0404e46688.jpeg", 1200 / 896],
    [I + "h9MaG5FEkxHmmnSJlOdfA0j6CcU__90eed7ebd3.jpeg", 1],
    [I + "to4m8a7kbzln4In00CRbjuZRQFI__0404e46688.jpeg", 1200 / 896],
    [I + "kwP41D5KHqHCxkwtEcEkLlaf4Xk__0c55e41633.jpeg", 928 / 1152],
    [I + "E5Eq5rbGo3etGr6SnbIMPlPKec__90eed7ebd3.jpeg", 1],
    [I + "gjXMWnEL0NJu6tSHjURbcQFJE__1c2aed7aef.jpeg", 1024 / 768],
    [I + "pwftHnssLove9zCJUF8oAr2oT4__d6e0e2e7a7.jpeg", 1024 / 765],
    [G + "bano-1200.jpg", 1200 / 896],
    [G + "dog-1200.jpg", 1200 / 896],
    [G + "dormitoriomain-1200.jpg", 1200 / 896],
    [G + "farm-1200.jpg", 1200 / 896],
    [G + "caballo-1200.jpg", 1200 / 896],
    [G + "juegos-1200.jpg", 1200 / 896],
    [G + "mate-1200.jpg", 1200 / 896],
    [G + "salamandra-1200.jpg", 1200 / 896]
  ];
  var GAP = 8;
  var HINT = "Arrastrá para recorrer la quinta";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var root = null, world = null, cols = [];
  var ox = 0, oy = 0, vx = 0, vy = 0, W = 0, dragging = false, moved = false, visible = true;
  var lx = 0, ly = 0, lastT = 0, touchMode = false, built = false;

  function mod(a, m) { return ((a % m) + m) % m; }

  function build() {
    var host = document.querySelector(".framer-bk1czx");
    if (!host) return false;
    if (!root) {
      root = document.createElement("div");
      root.className = "qd-drag";
      root.setAttribute("aria-label", "Galería de fotos de la quinta: arrastrá para recorrerla");
      world = document.createElement("div");
      world.className = "qd-drag-world";
      var hint = document.createElement("span");
      hint.className = "qd-drag-hint";
      hint.textContent = HINT;
      root.appendChild(world);
      root.appendChild(hint);
      attach();
    }
    if (root.parentElement !== host) host.appendChild(root);
    layout();
    return true;
  }

  function layout() {
    var vw = root.clientWidth, vh = root.clientHeight;
    if (!vw || !vh) return;
    var n = vw >= 1100 ? 4 : vw >= 700 ? 3 : 2;
    var tw = (vw - GAP * (n - 1)) / n;
    W = n * (tw + GAP);
    world.innerHTML = "";
    cols = [];
    var lists = [];
    var c, i;
    for (c = 0; c < n; c++) lists.push([]);
    FOTOS.forEach(function (f, k) { lists[k % n].push(f); });
    for (c = 0; c < n; c++) {
      var list = lists[c];
      var P = 0;
      list.forEach(function (f) { P += Math.round(tw / f[1]) + GAP; });
      var reps = Math.ceil((vh + P) / P) + 1;
      var strip = document.createElement("div");
      strip.className = "qd-drag-col";
      strip.style.width = tw + "px";
      var y = 0;
      for (var r = 0; r < reps; r++) {
        for (i = 0; i < list.length; i++) {
          var h = Math.round(tw / list[i][1]);
          var tile = document.createElement("div");
          tile.className = "qd-drag-tile";
          tile.style.cssText = "top:" + y + "px;height:" + h + "px";
          var im = document.createElement("img");
          im.src = list[i][0];
          im.alt = "";
          im.draggable = false;
          im.decoding = "async";
          tile.appendChild(im);
          strip.appendChild(tile);
          y += h + GAP;
        }
      }
      // dos juegos de columnas (a x y a x+W) para dar la vuelta en horizontal
      var copy = strip.cloneNode(true);
      strip.style.left = c * (tw + GAP) + "px";
      copy.style.left = c * (tw + GAP) + W + "px";
      world.appendChild(strip);
      world.appendChild(copy);
      cols.push({ els: [strip, copy], P: P });
    }
    apply();
  }

  function apply() {
    if (!cols.length) return;
    world.style.transform = "translate3d(" + (mod(ox, W) - W).toFixed(1) + "px,0,0)";
    cols.forEach(function (c) {
      var y = mod(oy, c.P) - c.P;
      c.els[0].style.transform = c.els[1].style.transform = "translate3d(0," + y.toFixed(1) + "px,0)";
    });
  }

  function attach() {
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
      if (!moved && Math.abs(dx) + Math.abs(dy) > 2) { moved = true; root.classList.add("has-moved"); }
      apply();
    });
    function end() { dragging = false; root.classList.remove("is-dragging"); }
    root.addEventListener("pointerup", end);
    root.addEventListener("pointercancel", end);
    root.addEventListener("lostpointercapture", end);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0 }).observe(root);
    }
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(layout, 200); });
    (function frame() {
      if (visible && !dragging) {
        if (Math.abs(vx) > 0.05 || Math.abs(vy) > 0.05) {
          ox += vx; oy += vy; vx *= 0.95; vy *= 0.95; apply();
        } else if (!reduce && !moved) {
          ox -= 0.25; oy -= 0.12; apply();
        }
      }
      requestAnimationFrame(frame);
    })();
  }

  function asegurar() {
    if (!document.querySelector(".framer-aiycup")) return; // solo en el home
    if (root && document.body.contains(root)) return;
    built = build() || built;
  }

  function init() {
    asegurar();
    var t = null;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(asegurar, 120); })
      .observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
