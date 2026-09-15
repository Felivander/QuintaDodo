/* ==========================================================================
   Quinta Dodó — limpieza de restos de Aveon que no se pueden seleccionar
   por clase (los rótulos comparten la clase generica de "Caption") ni
   ocultar en el HTML (Framer los vuelve a pintar al hidratar).
   Corre al cargar y se re-aplica con un MutationObserver.
   ========================================================================== */
(function () {
  "use strict";

  // rótulos entre corchetes que van fuera, tal como se leen en pantalla
  var ROTULOS = /^\[?\s*(OVERVIEW|0[1-9]\s*\/\s*(CHALLENGE|APPROACH|OVERVIEW|RESULT|OUTCOME)|MORE PROJECTS|SERVICES PROVIDED|ALL PROJECTS|STUDIO|PROJECTS)\s*\]?$/i;

  // Sube desde una hoja mientras el ancestro no contenga NADA mas que ese
  // texto: devuelve el envoltorio mas externo del componente, sin riesgo de
  // agarrar la tarjeta o la seccion entera.
  function envoltorio(el) {
    var t = (el.textContent || "").replace(/\s+/g, " ").trim();
    var cur = el;
    while (cur.parentElement && cur.parentElement !== document.body &&
           (cur.parentElement.textContent || "").replace(/\s+/g, " ").trim() === t) {
      cur = cur.parentElement;
    }
    return cur;
  }

  function limpiar() {
    // 1) rótulos: ocultar el componente Caption completo
    var nodos = document.querySelectorAll(".framer-nTVwd, .framer-bznlad, [data-framer-name='Caption']");
    for (var i = 0; i < nodos.length; i++) {
      var el = nodos[i];
      if (el.dataset.qdLimpio) continue;
      var t = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (ROTULOS.test(t)) {
        envoltorio(el).style.setProperty("display", "none", "important");
        el.dataset.qdLimpio = "1";
      }
    }
    // 2) tarjetas de espacios: sacar el segmento "Concordia, Entre Ríos /" repetido
    var hojas = document.querySelectorAll("p, span, div");
    for (var j = 0; j < hojas.length; j++) {
      var h = hojas[j];
      if (h.children.length !== 0 || h.dataset.qdLimpio) continue;
      var txt = (h.textContent || "").trim();
      if (!/^concordia,\s*entre\s*r[ií]os$/i.test(txt)) continue;
      // el texto vive en <p> dentro del componente Caption; los separadores "/"
      // son hermanos del envoltorio del Caption. Subir solo mientras el ancestro
      // no tenga otro texto: asi nunca se agarra la tarjeta entera.
      var cont = envoltorio(h);
      var fila = cont.parentElement;
      var filaTxt = (fila && fila.innerText || "").replace(/\s+/g, " ").trim();
      // solo dentro de la fila "LUGAR / DETALLE / DURACIÓN" de las tarjetas
      if (!/\/.+\//.test(filaTxt)) continue;
      cont.style.setProperty("display", "none", "important");
      h.dataset.qdLimpio = "1";
      // y el separador "/" que le sigue
      var sib = cont.nextElementSibling;
      while (sib && !(sib.textContent || "").trim()) sib = sib.nextElementSibling;
      if (sib && /^\/$/.test((sib.textContent || "").trim())) {
        sib.style.setProperty("display", "none", "important");
      }
    }

    // 3) footer "sitemap": nav en ingles con animacion de texto rodante
    //    (una letra por <span>, por eso ni grep ni la busqueda por texto
    //    exacto la encuentran; hay que leer el href para saber que decir).
    var FOOTER_NAV = [
      { rx: /\/$/,           es: "Inicio" },
      { rx: /la-quinta$/,    es: "La Quinta" },
      { rx: /wa\.me/,        es: "Consultar" },
      { rx: /\/espacios$/,   es: "Espacios" },
      { rx: /\/guia$/,       es: "Guía" },
      { rx: /\/reservas$/,   es: "Reservas" }
    ];
    document.querySelectorAll("a[href]").forEach(function (a) {
      if (a.dataset.qdFooterFix) return;
      var href = a.getAttribute("href") || "";
      // el componente de texto rodante mete un <style> DENTRO del <a>, cuyo
      // css tambien cuenta como texto para .textContent; por eso se compara
      // solo el arranque de la cadena, no la cadena completa.
      var txt = (a.textContent || "").replace(/\s+/g, " ").trim();
      if (/^404\b/i.test(txt) && /404/.test(href)) {
        // link al 404 en un pie de pagina: no tiene sentido, se saca entero
        var wrap = a.closest("div") || a;
        wrap.style.setProperty("display", "none", "important");
        a.dataset.qdFooterFix = "1";
        return;
      }
      if (!/^(home|about|services|work|journal|contact)\b/i.test(txt)) return;
      var m = FOOTER_NAV.find(function (f) { return f.rx.test(href); });
      if (m) {
        a.textContent = m.es;
        a.dataset.qdFooterFix = "1";
      }
    });
  }

  function arrancar() {
    limpiar();
    var t = null;
    new MutationObserver(function () {
      clearTimeout(t);
      t = setTimeout(limpiar, 120);
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else {
    arrancar();
  }
})();
