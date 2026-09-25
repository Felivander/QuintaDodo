/* ==========================================================================
   Quinta Dodó — formulario de reserva (solo /reservas)
   Sin backend: arma un mensaje prolijo y abre WhatsApp con todo pre-cargado.
   Tambien ofrece reservar directo por Booking.com.
   ========================================================================== */
(function () {
  "use strict";

  if (!/\/reservas\/?(\?|#|$)/.test(location.pathname)) return;

  var WA_NUM = "5493454459090";
  var BOOKING_URL = window.QD_BOOKING_URL || "https://www.booking.com/hotel/ar/quinta-dodo.es-ar.html";

  var ICON_CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 12a8 8 0 1 1 3.6 6.7L4 20l1.3-3.6A8 8 0 0 1 4 12z"/>' +
    '<path d="M9 10.5c.4 2 2 3.6 4 4l1.4-1.1 1.6.6-.2 1.6c-3.6.4-6.9-2.9-6.5-6.5l1.6-.2.6 1.6L9 10.5z"/></svg>';
  var ICON_BED = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M3 18V8"/><path d="M3 12h18v6"/><path d="M3 16h18"/>' +
    '<path d="M7 12V9.5A1.5 1.5 0 0 1 8.5 8h2A1.5 1.5 0 0 1 12 9.5V12"/><path d="M21 12v-1a2 2 0 0 0-2-2h-7"/></svg>';

  var MODALIDADES = ["Día de Campo (diurno)", "Fin de Semana Completo", "Estadía Vacacional (semana/quincena)"];

  function hoyISO() {
    var d = new Date();
    return d.toISOString().slice(0, 10);
  }

  function fechaLegible(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return p[2] + "/" + p[1] + "/" + p[0];
  }

  function construirMensaje(datos) {
    var l = [];
    l.push("¡Hola! Quiero consultar disponibilidad en Quinta Dodó 🌿");
    l.push("");
    l.push("📋 Modalidad: " + datos.modalidad);
    l.push("📅 Llegada: " + fechaLegible(datos.llegada));
    if (datos.salida) l.push("📅 Salida: " + fechaLegible(datos.salida));
    var personas = datos.adultos + " adulto" + (datos.adultos === "1" ? "" : "s");
    if (datos.ninos && datos.ninos !== "0") personas += " + " + datos.ninos + " niño" + (datos.ninos === "1" ? "" : "s");
    l.push("👥 Personas: " + personas);
    l.push("🙋 Nombre: " + datos.nombre);
    if (datos.telefono) l.push("📞 Tel. de contacto: " + datos.telefono);
    if (datos.comentarios) {
      l.push("");
      l.push("📝 Comentarios: " + datos.comentarios);
    }
    l.push("");
    l.push("Quedo a la espera de la disponibilidad y el presupuesto. ¡Gracias!");
    return l.join("\n");
  }

  function campo(id, label, inputHtml) {
    return '<div class="qd-book-field" data-field="' + id + '">' +
      '<label for="qd-' + id + '">' + label + "</label>" +
      inputHtml +
      "</div>";
  }

  function construirFormulario() {
    var wrap = document.createElement("section");
    wrap.className = "qd-book";
    wrap.innerHTML =
      '<span class="qd-book-tag">[ Reservar ]</span>' +
      '<h2 class="qd-book-title">Consultá tu fecha</h2>' +
      '<p class="qd-book-sub">Completá los datos de tu estadía y te escribimos por WhatsApp con la disponibilidad y el presupuesto exacto. También podés reservar directo por Booking.com.</p>' +
      '<form id="qd-book-form" novalidate>' +
        '<div class="qd-book-row">' +
          campo("modalidad", "Modalidad",
            '<select id="qd-modalidad" required>' +
              '<option value="" disabled selected>Elegí una modalidad</option>' +
              MODALIDADES.map(function (m) { return '<option value="' + m + '">' + m + "</option>"; }).join("") +
            "</select>") +
          campo("adultos", "Adultos",
            '<input id="qd-adultos" type="number" min="1" max="30" value="2" required>') +
        "</div>" +
        '<div class="qd-book-row qd-book-row--3">' +
          campo("llegada", "Fecha de llegada",
            '<input id="qd-llegada" type="date" required>') +
          campo("salida", "Fecha de salida (opcional)",
            '<input id="qd-salida" type="date">') +
          campo("ninos", "Niños",
            '<input id="qd-ninos" type="number" min="0" max="20" value="0">') +
        "</div>" +
        '<div class="qd-book-row">' +
          campo("nombre", "Nombre y apellido",
            '<input id="qd-nombre" type="text" placeholder="Como te llamás" required>') +
          campo("telefono", "Teléfono de contacto",
            '<input id="qd-telefono" type="tel" placeholder="+54 9 ...">') +
        "</div>" +
        campo("comentarios", "Comentarios (opcional)",
          '<textarea id="qd-comentarios" placeholder="Motivo del evento, alguna consulta puntual..."></textarea>') +
        '<div class="qd-book-actions">' +
          '<button type="submit" class="qd-book-btn qd-book-btn--whatsapp">' + ICON_CHAT + "Enviar consulta por WhatsApp</button>" +
          '<div class="qd-book-or">— o —</div>' +
          '<a class="qd-book-btn qd-book-btn--booking" href="' + BOOKING_URL + '" target="_blank" rel="noopener noreferrer">' + ICON_BED + "Reservar directo en Booking.com</a>" +
        "</div>" +
        '<p class="qd-book-sent" id="qd-book-sent">✓ Se abrió WhatsApp con tu consulta lista para enviar.</p>' +
        '<p class="qd-book-note">No cobramos nada por consultar. La seña se coordina una vez confirmada la disponibilidad.</p>' +
      "</form>";

    var llegada = wrap.querySelector("#qd-llegada");
    var salida = wrap.querySelector("#qd-salida");
    llegada.min = hoyISO();
    salida.min = hoyISO();
    llegada.addEventListener("change", function () {
      salida.min = llegada.value || hoyISO();
      if (salida.value && salida.value < llegada.value) salida.value = "";
    });

    wrap.querySelector("#qd-book-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var camposReq = ["modalidad", "llegada", "adultos", "nombre"];
      var falta = false;
      camposReq.forEach(function (id) {
        var input = wrap.querySelector("#qd-" + id);
        var box = wrap.querySelector('[data-field="' + id + '"]');
        var vacio = !input.value || !input.value.trim();
        box.classList.toggle("qd-invalid", vacio);
        if (vacio) falta = true;
      });
      if (falta) return;

      var datos = {
        modalidad: wrap.querySelector("#qd-modalidad").value,
        llegada: wrap.querySelector("#qd-llegada").value,
        salida: wrap.querySelector("#qd-salida").value,
        adultos: wrap.querySelector("#qd-adultos").value || "1",
        ninos: wrap.querySelector("#qd-ninos").value || "0",
        nombre: wrap.querySelector("#qd-nombre").value.trim(),
        telefono: wrap.querySelector("#qd-telefono").value.trim(),
        comentarios: wrap.querySelector("#qd-comentarios").value.trim()
      };
      var texto = encodeURIComponent(construirMensaje(datos));
      var sent = wrap.querySelector("#qd-book-sent");
      sent.classList.add("is-visible");
      window.open("https://wa.me/" + WA_NUM + "?text=" + texto, "_blank", "noopener");
    });

    return wrap;
  }

  // El formulario viejo de Aveon (.framer-fxztht) vive DENTRO del arbol que
  // React hidrata; insertar un hermano ahi funciona un instante y despues
  // React lo reconcilia y lo borra (mismo problema que el canvas del agua
  // en el home). Solucion: igual que ahi, un MutationObserver que vuelve a
  // insertar si React se lo lleva, hasta que deje de moverse.
  var form = null;

  function insertar() {
    if (document.body.contains(form)) return true;
    var viejo = document.querySelector(".framer-fxztht");
    if (!viejo || !viejo.parentElement) return false;
    viejo.insertAdjacentElement("afterend", form);
    return true;
  }

  function montar() {
    form = construirFormulario();
    if (!insertar()) {
      document.body.appendChild(form);
    }
    var t = null;
    new MutationObserver(function () {
      clearTimeout(t);
      t = setTimeout(insertar, 80);
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montar);
  } else {
    montar();
  }
})();
