/* ==========================================================================
   Quinta Dodó — mapa embebido
   1) En /reservas: inserta una seccion nueva con el mapa, en el lugar donde
      vivia la tarjeta de contacto falsa de Aveon (Melbourne/+61...), que
      custom.css oculta con display:none (.framer-23p62).
   2) En el drawer: la preview de "Ubicación & Mapa" muestra el mapa en vivo
      en vez de fotos (logica agregada a sidebar.js via window.QuintaMapa).
   Ubicacion real: https://maps.app.goo.gl/2zcYFopzXsWbHBTv9 (resuelve a
   "Quinta Dodó" en Google Maps, -31.3070718,-58.0261913).
   ========================================================================== */
(function () {
  "use strict";

  var LAT = "-31.3070718", LNG = "-58.0261913";
  var EMBED_SRC = "https://maps.google.com/maps?q=" + LAT + "," + LNG +
    "&z=16&output=embed";
  var PLACE_LINK = "https://maps.app.goo.gl/2zcYFopzXsWbHBTv9";

  window.QuintaMapa = { embedSrc: EMBED_SRC, placeLink: PLACE_LINK };

  function crearSeccion() {
    var sec = document.createElement("section");
    sec.className = "qd-map-section";
    sec.id = "mapa";
    sec.innerHTML =
      '<div class="qd-map-inner">' +
        '<span class="qd-tag qd-map-tag">[ Ubicación ]</span>' +
        '<h3 class="qd-map-title">Cómo llegar</h3>' +
        '<p class="qd-map-text">Mario Bordagaray al fondo, s/n, Villa Zorraquín, Concordia, Entre Ríos. ' +
          'Acceso pavimentado todo el año, a 15 minutos del centro.</p>' +
        '<div class="qd-map-frame">' +
          '<iframe src="' + EMBED_SRC + '" loading="lazy" ' +
          'referrerpolicy="no-referrer-when-downgrade" ' +
          'title="Ubicación de Quinta Dodó en Google Maps"></iframe>' +
        "</div>" +
        '<a class="qd-map-link" href="' + PLACE_LINK + '" target="_blank" rel="noopener noreferrer">Abrir en Google Maps ↗</a>' +
      "</div>";
    return sec;
  }

  // Framer re-renderiza esta zona despues de hidratar (por eso limpieza.js
  // tambien necesita un observer): una insercion unica en DOMContentLoaded
  // se pierde. Se reinserta cada vez que hace falta.
  function asegurarSeccion() {
    var viejo = document.querySelector(".framer-23p62"); // tarjeta falsa oculta por CSS
    if (!viejo) return; // no estamos en /reservas
    if (document.querySelector(".qd-map-section")) return; // ya esta
    // Va DESPUES de la seccion de contacto (la del formulario de reserva):
    // antes quedaba arriba de todo y "Consultar fecha" aterrizaba en el mapa.
    var host = document.querySelector(".framer-r1pc6r") || viejo.closest("section") || viejo;
    host.insertAdjacentElement("afterend", crearSeccion());
    irAlMapa();
  }

  // /reservas#mapa (link "Ubicación & Mapa" del menu): el ancla no existe al
  // cargar porque la seccion se inserta por JS, y Framer todavia mueve cosas
  // despues de hidratar. Se reintenta hasta que la pagina se estabiliza.
  var irAlMapaTimer = null, irAlMapaIntentos = 0;
  function irAlMapa() {
    if (location.hash !== "#mapa" || irAlMapaIntentos >= 5) return;
    clearTimeout(irAlMapaTimer);
    irAlMapaTimer = setTimeout(function () {
      var m = document.getElementById("mapa");
      if (m) { irAlMapaIntentos++; m.scrollIntoView(); }
    }, 600);
  }

  function init() {
    asegurarSeccion();
    var t = null;
    new MutationObserver(function () {
      clearTimeout(t);
      t = setTimeout(asegurarSeccion, 120);
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
