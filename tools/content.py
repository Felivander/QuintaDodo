"""Todo el texto del sitio en un solo lugar (español rioplatense).

Si hay que cambiar una frase, se cambia aca y se corre `python tools/build.py`.
"""

SITE = "https://quintadodo.com"
NAME = "Quinta Dodó"
PHONE = "+54 9 3454 45-9090"
PHONE_TEL = "+5493454459090"
WA = "https://wa.me/5493454459090?text=Hola!%20Quisiera%20consultar%20por%20Quinta%20Dod%C3%B3"
BOOKING = "https://www.booking.com/hotel/ar/quinta-dodo.es-ar.html"
INSTAGRAM = "https://instagram.com/quintadodo"
MAPS_LINK = "https://maps.app.goo.gl/2zcYFopzXsWbHBTv9"
MAPS_EMBED = "https://maps.google.com/maps?q=-31.3070718,-58.0261913&z=16&output=embed"
ADDRESS = "Boulevard Yuquerí, Concordia, Entre Ríos"

DESC_HOME = ("Quinta Dodó en Concordia, Entre Ríos: 5.000 m² de parque arbolado, piscina con banco sumergido "
             "y cerco perimetral, quincho cerrado con estufa Lepen, asador criollo y alojamiento.")

# ---------------------------------------------------------------- espacios
ESPACIOS = [
    {
        "slug": "piscina", "nombre": "Piscina & Solárium", "menu": "Piscina & Relax",
        "lead": "Piscina de agua cristalina con banco húmedo perimetral, cerco de seguridad y solárium con reposeras de madera.",
        "card": "piscina-hero", "hero": "piscina-hero", "a": ["serv-1", "g-01"], "b": ["piscina-a2", "g-05"],
        "alt": ["Piscina con banco sumergido", "Piscina cercada con solárium", "Piscina, solárium y ducha", "Galería con vista al parque"],
        "ta": [
            ["La piscina es el centro del verano en la quinta. Tiene banco húmedo perimetral, así que podés sentarte adentro del agua sin salir, y un solárium amplio alrededor para pasar el día.",
             "Todo el sector está cercado con reja perimetral, de manera que podés estar tranquilo si venís con chicos. El cerco se cierra y la pileta queda aislada del resto del parque."],
            ["El solárium tiene reposeras de madera y suficiente lugar para armar la sombrilla y las sillas del grupo. Alrededor hay césped parejo y árboles que dan sombra a media tarde.",
             "El mantenimiento del agua corre por nuestra cuenta: la pileta se entrega limpia y lista para usar el día que llegás, sin que tengas que ocuparte de nada."],
        ],
        "tb": ["Desde el quincho y la galería se ve la pileta entera, así que podés estar cocinando o tomando algo sin perder de vista a los que están en el agua."],
    },
    {
        "slug": "quincho", "nombre": "Quincho & Estufa Lepen", "menu": "Quincho & Estufa Lepen",
        "lead": "Salón comedor cerrado y climatizado con estufa Lepen a leña, mesas para 25+ comensales, cocina completa y Smart TV.",
        "card": "quincho-hero", "hero": "quincho-hero", "a": ["serv-2", "quincho-a2"], "b": ["quincho-b1", "g-salamandra"],
        "alt": ["Estufa Lepen en el quincho", "Salón comedor del quincho", "Mesas largas del quincho", "Salamandra Lepen a leña"],
        "ta": [
            ["El quincho es un salón comedor cerrado, con vista panorámica al parque. Es el espacio que te salva cuando el tiempo no acompaña: se usa igual en invierno que en verano.",
             "En invierno se climatiza con una salamandra a leña Lepen, que calienta todo el salón. Es de las cosas que más valoran los grupos que vienen entre junio y agosto."],
            ["Está equipado con mesas largas para más de 25 comensales sentados, cocina completa con horno, dos freezers verticales, vajilla y Smart TV. No hace falta que traigas nada más que la comida.",
             "Las mesas se pueden acomodar como necesites: una sola tirada larga para un cumpleaños, o separadas en grupos para un encuentro de empresa."],
        ],
        "tb": ["Es el espacio más usado de la quinta: ahí termina cayendo todo el mundo, tanto para comer como para la sobremesa larga.",
               "Si venís en temporada fría, avisanos al reservar y dejamos la leña lista para que prendas la estufa apenas llegues."],
    },
    {
        "slug": "galeria-asador", "nombre": "Galería & Asador Criollo", "menu": "Galería & Asador",
        "lead": "Galería techada con parrilla criolla, mesada exterior con bacha y mesa de ping-pong reglamentaria bajo la sombra.",
        "card": "galeria-hero", "hero": "galeria-hero", "a": ["galeria-a1", "galeria-b2"], "b": ["g-juegos", "g-05"],
        "alt": ["Parrilla criolla techada", "Galería con mesa de ping-pong", "Paletas de ping-pong sobre la mesa", "Galería con banco frente al parque"],
        "ta": [
            ["La galería techada es el lugar de las sobremesas al aire libre. Está al lado del quincho y da directo al parque, con sombra durante todo el día.",
             "Tiene la parrilla criolla techada, así que podés hacer el asado llueva o no. Al lado hay una mesada exterior con bacha, para lavar y preparar sin tener que entrar a la cocina."],
            ["En el mismo sector está la mesa de ping-pong reglamentaria, con paletas y pelotas incluidas. Queda bajo techo, o sea que se usa a cualquier hora.",
             "Desde la galería se ve la pileta y buena parte del parque, así que es un buen punto para quedarse mientras los chicos andan dando vueltas."],
        ],
        "tb": ["Entre la parrilla, el ping-pong y la sombra, es el sector donde suele arrancar y terminar el día.",
               "Traé el carbón o la leña y la carne: la parrilla, la mesada y los utensilios ya están."],
    },
    {
        "slug": "parque-cancha-granja", "nombre": "Parque, Cancha & Granja", "menu": "Parque & Animales",
        "lead": "5.000 m² de parque arbolado con cancha de fútbol reglamentaria, caballos y granja con gallinas. 100% Pet Friendly.",
        "card": "parque-hero", "hero": "parque-hero", "a": ["g-futbol", "g-dog"], "b": ["g-caballo", "g-granja"],
        "alt": ["Cancha de fútbol con arcos", "Perro en el parque", "Caballo en el predio", "Gallinas en la granja"],
        "ta": [
            ["El predio tiene 5.000 m² de parque arbolado, con árboles grandes que dan sombra en varios sectores. Es todo terreno cerrado y de uso exclusivo del grupo que alquila.",
             "Hay cancha de fútbol con arcos reglamentarios, en césped, con espacio de sobra alrededor para que no se vaya la pelota lejos."],
            ["En el fondo está el sector de animales: caballos en el predio y una granja con gallinas. Para los chicos suele ser lo más lindo de la estadía.",
             "La quinta es 100% pet friendly: podés venir con tu perro sin cargo extra y sin trámite. Hay espacio de sobra para que corra."],
        ],
        "tb": ["El parque se mantiene cortado y prolijo. Entre la cancha, los animales y el espacio libre, los grupos grandes se acomodan sin amontonarse.",
               "Al ser predio cerrado y exclusivo, mientras está tu grupo no hay ningún otro evento en simultáneo."],
    },
    {
        "slug": "dormitorios", "nombre": "Dormitorios & Hospedaje", "menu": "Dormitorios",
        "lead": "Dos habitaciones climatizadas con sommier matrimonial y tres camas individuales, para hasta 5 personas.",
        "card": "dormitorios-hero", "hero": "dormitorios-hero", "a": ["dormitorios-a1", "dormitorios-b1"], "b": ["g-dormitorio", "g-bano"],
        "alt": ["Dormitorio con camas individuales", "Habitación con ventilador de techo", "Dormitorio con cama de dos plazas", "Baño"],
        "ta": [
            ["La quinta tiene dos habitaciones climatizadas para el pernocte, pensadas para grupos de hasta 5 personas.",
             "Una tiene sommier matrimonial y la otra tres camas individuales. Las dos con aire acondicionado y ventilador de techo."],
            ["Los dormitorios dan al parque y tienen buena luz natural a la mañana. El salón con la estufa a leña queda a pocos metros.",
             "El hospedaje se usa en la modalidad de fin de semana completo, de viernes a domingo, y en la estadía vacacional por semana o quincena."],
        ],
        "tb": ["En esas modalidades el predio queda entero a disposición del grupo, con la pileta de uso ilimitado.",
               "Consultanos por la ropa de cama y las toallas al momento de reservar, así te confirmamos qué traer y qué ya está en la casa."],
    },
    {
        "slug": "cocina", "nombre": "Cocina Equipada", "menu": "Cocina",
        "lead": "Cocina completa con horno, 2 freezers verticales, mesada amplia, vajilla y todo lo necesario para cocinar para el grupo.",
        "card": "cocina-hero", "hero": "cocina-hero", "a": ["cocina-a1", "cocina-a2"], "b": ["cocina-b1", "quincho-b2"],
        "alt": ["Cocina con horno", "Estantes con vajilla y utensilios", "Heladera y freezers", "Salón del quincho abierto a la cocina"],
        "ta": [
            ["La cocina está integrada al salón del quincho y es la que se usa para cocinar para todo el grupo.",
             "Tiene cocina con horno, mesada amplia con bacha doble y espacio de trabajo suficiente para que cocinen varios a la vez."],
            ["Hay dos freezers verticales, heladera y estantes con vajilla, vasos y utensilios para el número de comensales que entra en el salón.",
             "Al estar abierta al salón, el que cocina no queda aislado del resto: se sigue la charla mientras se prepara la comida."],
        ],
        "tb": ["Con los dos freezers se puede traer todo comprado de antes, que es lo que suelen hacer los grupos que se quedan el fin de semana.",
               "Entre la cocina, la parrilla de la galería y la mesada exterior, no falta lugar para preparar nada."],
    },
]
ESP = {e["slug"]: e for e in ESPACIOS}

ESP_INTRO = ("Un predio de 5.000 m² en Concordia con piscina, quincho climatizado, asador criollo, cancha, granja "
             "y hospedaje para hasta 5 personas.")
ESP_BAND = "Cancha con arcos, ping-pong, caballos y granja: los chicos no se quieren ir."

# ---------------------------------------------------------------- guia
GUIA = [
    {
        "slug": "dia-de-campo", "cat": "Modalidades", "min": 4, "img": "guia-dia-de-campo",
        "alt": "Pino y parque de la quinta en un día de sol",
        "title": "Día de Campo & Pileta: cómo funciona la modalidad diurna",
        "desc": "De 10:00 a 20:00 hs con uso exclusivo del predio. Ideal para cumpleaños, asados y encuentros de empresa.",
        "body": [
            ("h2", "De 10 a 20 horas, sin apuro"),
            ("p", "La modalidad diurna va de 10:00 a 20:00 hs. Son diez horas de uso exclusivo del predio, sin compartir con ningún otro grupo."),
            ("p", "Es la opción para cumpleaños, aniversarios, asados de amigos, bautismos y encuentros de empresa."),
            ("h3", "Qué incluye"),
            ("p", "Uso exclusivo del quincho y la galería, piscina habilitada con solárium, parrilla, cocina completa con dos freezers, cancha de fútbol y ping-pong."),
            ("h2", "El salón, la cocina y la parrilla"),
            ("p", "El salón entra cómodo más de 25 comensales sentados, con mesas largas que se acomodan como te sirva."),
            ("h3", "Cocina y asador"),
            ("p", "La cocina tiene horno, mesada amplia, vajilla y dos freezers verticales, así que podés traer todo comprado de antes."),
            ("p", "La parrilla criolla está techada, o sea que el asado sale igual aunque el día no acompañe."),
            ("h3", "Para los chicos"),
            ("p", "Mientras tanto los chicos tienen la cancha con arcos, el ping-pong, los caballos y la granja con gallinas."),
            ("h2", "La pileta"),
            ("p", "La pileta tiene banco sumergido y cerco perimetral, así que se puede estar tranquilo con chicos dando vueltas."),
            ("h3", "Qué traer"),
            ("p", "Solo la comida, la bebida y el carbón o la leña. El resto (parrilla, cocina, vajilla, mesas y reposeras) ya está en la quinta."),
            ("h2", "Ideal para"),
            ("p", "Grupos que quieren pasar el día al aire libre sin resignar comodidad: hay sombra, baños, cocina y un salón cerrado por si refresca."),
            ("h3", "Cuándo conviene reservar"),
            ("p", "Es la modalidad más elegida y la que más rápido se ocupa los fines de semana largos."),
            ("p", "Consultanos la fecha con tiempo y te confirmamos disponibilidad en el momento."),
        ],
    },
    {
        "slug": "fin-de-semana", "cat": "Modalidades", "min": 4, "img": "guia-fin-de-semana",
        "alt": "Dos camas con cubrecamas verdes y una mesa de luz",
        "title": "Fin de Semana Completo: pernocte para hasta 5 personas",
        "desc": "De viernes a domingo, con dos habitaciones climatizadas, estufa a leña Lepen y piscina de uso ilimitado.",
        "body": [
            ("h2", "De viernes a domingo"),
            ("p", "El fin de semana completo es la modalidad para quedarse a dormir: ingresás el viernes y te retirás el domingo, con el predio entero a disposición todo el fin de semana."),
            ("p", "El hospedaje es para hasta 5 personas, en dos habitaciones climatizadas con aire acondicionado y ventilador de techo."),
            ("h3", "Las habitaciones"),
            ("p", "Una tiene sommier matrimonial y la otra tres camas individuales."),
            ("h3", "Qué incluye el pernocte"),
            ("p", "Dos habitaciones climatizadas, estufa a leña Lepen habilitada en el salón, piscina de uso ilimitado y el predio cerrado en exclusiva."),
            ("p", "El quincho queda disponible los tres días, con la cocina completa y los dos freezers para que te organices sin depender de salir a comprar."),
            ("h3", "El invierno también funciona"),
            ("p", "La salamandra Lepen calienta todo el salón, así que la quinta se usa igual de junio a agosto. Si venís en temporada fría, avisanos y dejamos la leña lista."),
            ("h2", "Para quién es"),
            ("p", "Familias y grupos de amigos que quieren desconectar dos noches sin alejarse: estás a 15 minutos del centro de Concordia."),
            ("h3", "Mascotas"),
            ("p", "La quinta es 100% pet friendly. Podés venir con tu perro sin cargo extra: hay 5.000 m² de parque cerrado para que corra."),
            ("h2", "Antes de reservar"),
            ("p", "Consultanos por la ropa de cama y las toallas al reservar, así te confirmamos qué traer."),
            ("h3", "Horarios"),
            ("p", "El horario de ingreso y de salida se acuerda al momento de confirmar la fecha."),
            ("p", "Al ser predio exclusivo, no hay otro evento en simultáneo mientras está tu grupo."),
            ("h3", "Fechas"),
            ("p", "Los fines de semana largos y las fechas de temporada se ocupan con anticipación."),
        ],
    },
    {
        "slug": "como-reservar", "cat": "Cómo reservar", "min": 6, "img": "guia-como-reservar",
        "alt": "Galería con mesa de ping-pong y parrilla",
        "title": "Cómo reservar: consulta, seña y confirmación",
        "desc": "Tres pasos: nos escribís por WhatsApp, te pasamos el presupuesto y congelás la fecha con una seña bancaria.",
        "body": [
            ("h2", "Reservar es simple"),
            ("p", "Reservar es simple y no tiene vueltas: nos escribís, te pasamos el presupuesto y congelás la fecha con una seña. Todo por WhatsApp."),
            ("p", "Lo único que necesitamos saber de entrada es la fecha, cuántas personas van a ser y qué modalidad te sirve."),
            ("h3", "Paso 1: la consulta"),
            ("p", "Escribinos por WhatsApp con la fecha que tenés en mente. Te confirmamos en el momento si está libre."),
            ("h3", "Qué conviene aclarar"),
            ("p", "Contános si van a pernoctar, si vienen con chicos, si traés mascota y si hace falta la estufa a leña. Con eso afinamos el presupuesto."),
            ("p", "También nos sirve saber si es cumpleaños, encuentro de empresa o fin de semana familiar, porque cambia cómo dejamos armado el salón."),
            ("h2", "El presupuesto"),
            ("h3", "Paso 2: el presupuesto"),
            ("p", "Te mandamos por escrito el valor, qué incluye la modalidad, el horario de ingreso y salida, y las condiciones de la seña. Sin letra chica."),
            ("p", "El presupuesto no tiene costo ni te compromete a nada. Si no cerrás, no pasa nada."),
            ("h2", "La seña y el día de llegada"),
            ("h3", "Paso 3: la seña"),
            ("p", "La fecha se confirma con una seña bancaria. Recién ahí queda bloqueada a tu nombre."),
            ("h3", "El día que llegás"),
            ("p", "Llegás y está todo listo: pileta limpia, quincho acondicionado, parque cortado y el predio entero para tu grupo."),
        ],
    },
    {
        "slug": "estadia-vacacional", "cat": "Modalidades", "min": 5, "img": "proceso-3",
        "alt": "Piscina cercada rodeada de parque",
        "title": "Estadía Vacacional: semana o quincena en Concordia",
        "desc": "Semana o quincena completa en Concordia, con tarifas preferenciales por estadía larga.",
        "body": [
            ("h2", "Semana o quincena"),
            ("p", "La estadía vacacional es para quedarse varios días: se alquila por semana o por quincena, con tarifas preferenciales según la duración."),
            ("p", "Es la opción para vacaciones familiares tranquilas, con el predio entero y sin vecinos alrededor."),
            ("h3", "Qué hay cerca"),
            ("p", "Estás a 15 minutos del centro de Concordia y cerca de los complejos termales, el lago Salto Grande y la costanera."),
            ("h2", "Qué incluye"),
            ("p", "Alquiler semanal o quincenal, limpieza y mantenimiento de la piscina durante la estadía, y uso completo del quincho, la galería y el parque."),
            ("h3", "La pileta, todos los días"),
            ("p", "La pileta se mantiene durante toda la estadía, no solo el día de la llegada."),
            ("h3", "Dónde se duerme"),
            ("p", "El hospedaje es para hasta 5 personas, en dos habitaciones climatizadas."),
            ("h3", "Cómo se organiza el día"),
            ("p", "A la mañana la pileta y el parque, al mediodía el asador, y a la tarde la cancha o el ping-pong. Sin horarios ni turnos."),
            ("h2", "Compras y logística"),
            ("p", "Tenés comercios y supermercados a pocos minutos, y la cocina de la quinta con horno, heladera y dos freezers para abastecerte por varios días."),
            ("h3", "Con mascotas"),
            ("p", "100% pet friendly, sin cargo adicional. El parque está cerrado en todo su perímetro."),
            ("h2", "Para reservar"),
            ("h3", "Cómo consultar"),
            ("p", "Escribinos por WhatsApp con las fechas y la cantidad de personas y te pasamos la tarifa por semana o quincena."),
            ("p", "Las temporadas altas se ocupan con mucha anticipación, así que conviene consultar temprano."),
        ],
    },
    {
        "slug": "como-llegar", "cat": "Ubicación", "min": 5, "img": "portada",
        "alt": "Tranquera de entrada y casa de la quinta",
        "title": "Cómo llegar: Boulevard Yuquerí, a 15 min del centro",
        "desc": "Cómo llegar, dónde estamos y qué hay cerca: termas, lago Salto Grande y costanera.",
        "body": [
            ("h2", "Dónde estamos"),
            ("p", "Quinta Dodó está sobre Boulevard Yuquerí, en Concordia, Entre Ríos. El acceso es pavimentado y transitable todo el año con cualquier vehículo."),
            ("p", "Estás a 15 minutos del centro de la ciudad, cerca de comercios, supermercados y servicios."),
            ("h2", "Cómo llegar"),
            ("p", "La forma más simple es abrir la ubicación en Google Maps y seguir la indicación hasta Boulevard Yuquerí."),
            ("link", "Abrir en Google Maps ↗", "MAPS"),
            ("h3", "Si es tu primera vez"),
            ("p", "Si es tu primera vez, avisanos cuando salgas y te vamos guiando por WhatsApp los últimos metros."),
            ("p", "La entrada es por la tranquera del predio; adentro hay lugar de sobra para estacionar varios autos."),
            ("h3", "Qué hay en la zona"),
            ("p", "Concordia es conocida por sus complejos termales, el lago de Salto Grande y la costanera del río Uruguay. Todo queda a corta distancia."),
            ("h2", "Acceso y estacionamiento"),
            ("p", "El camino está en buen estado todo el año, así que no necesitás camioneta ni tracción especial."),
            ("p", "Podés entrar con el auto hasta la casa para bajar las cosas y después dejarlo estacionado dentro del predio."),
            ("h3", "Varios autos"),
            ("p", "Si venís con varios autos, no hay problema: el parque tiene lugar de sobra."),
            ("h2", "Horarios de ingreso"),
            ("p", "El horario de ingreso y de salida depende de la modalidad y se acuerda al confirmar la reserva."),
            ("p", "En el día de campo el uso va de 10:00 a 20:00 hs; en el fin de semana completo, de viernes a domingo."),
            ("h3", "Ante cualquier duda"),
            ("p", "Ante cualquier duda del camino, escribinos por WhatsApp y te orientamos."),
        ],
    },
    {
        "slug": "preguntas-frecuentes", "cat": "Preguntas frecuentes", "min": 3, "img": "guia-preguntas-frecuentes",
        "alt": "Piscina con ducha y parque",
        "title": "Preguntas frecuentes sobre Quinta Dodó",
        "desc": "Lo que más nos preguntan antes de reservar: qué incluye, cuánta gente entra, mascotas, seña y horarios.",
        "body": [
            ("h2", "Las consultas más comunes"),
            ("p", "Reunimos acá lo que más nos preguntan antes de reservar. Si te queda alguna duda, escribinos por WhatsApp."),
            ("h2", "¿Se alquila el predio completo?"),
            ("p", "Sí. La quinta se alquila entera y en exclusiva: mientras está tu grupo no hay ningún otro evento en simultáneo."),
            ("h3", "¿Cuánta gente entra?"),
            ("p", "El salón del quincho entra cómodo más de 25 comensales sentados. Para pernoctar, el hospedaje es para hasta 5 personas."),
            ("h3", "¿Qué hay que llevar?"),
            ("p", "La comida, la bebida y el carbón o la leña. La parrilla, la cocina con horno, los dos freezers, la vajilla, las mesas y las reposeras ya están."),
            ("p", "Si vas a pernoctar, consultanos por la ropa de cama y las toallas al momento de reservar."),
            ("h2", "¿Se puede ir con mascotas?"),
            ("p", "Sí, la quinta es 100% pet friendly y sin cargo extra. El parque está cercado en todo su perímetro."),
            ("h3", "¿Cómo se reserva?"),
            ("p", "Nos escribís por WhatsApp con la fecha, la cantidad de personas y la modalidad. Te pasamos el presupuesto y congelás la fecha con una seña bancaria."),
            ("h2", "La seña y las fechas"),
            ("p", "La seña es lo único que bloquea la fecha a tu nombre. Sin seña, la fecha sigue disponible para otros grupos."),
            ("h3", "Conviene consultar temprano"),
            ("p", "Los fines de semana largos y la temporada alta se ocupan con anticipación, así que conviene consultar temprano."),
            ("p", "Cualquier otra consulta, escribinos y te respondemos a la brevedad."),
        ],
    },
]
ART = {g["slug"]: g for g in GUIA}
GUIA_CATS = ["Modalidades", "Cómo reservar", "Ubicación", "Preguntas frecuentes"]

# ---------------------------------------------------------------- home
SERVICIOS = [
    {"n": "01", "slug": "piscina", "img": "serv-1", "alt": "Piscina de la quinta", "titulo": "Piscina con Banco Sumergido",
     "chips": ["Banco sumergido", "Cerco perimetral", "Solárium con reposeras"],
     "txt": "Piscina de agua cristalina con banco húmedo perimetral, cerco de seguridad y solárium amplio con reposeras."},
    {"n": "02", "slug": "quincho", "img": "serv-2", "alt": "Quincho con estufa Lepen", "titulo": "Quincho con Estufa Lepen",
     "chips": ["Estufa Lepen a leña", "Cocina completa", "Smart TV & vajilla"],
     "txt": "Salón comedor cerrado con estufa Lepen a leña, mesas para 25+ comensales, cocina completa y Smart TV."},
    {"n": "03", "slug": "galeria-asador", "img": "serv-3", "alt": "Galería techada con parrilla", "titulo": "Galería & Asador Criollo",
     "chips": ["Parrilla criolla techada", "Mesa de ping-pong", "Mesada & bacha"],
     "txt": "Parrilla criolla techada, mesada exterior con bacha y mesa de ping-pong reglamentaria bajo la sombra."},
    {"n": "04", "slug": "parque-cancha-granja", "img": "serv-4", "alt": "Parque con cancha de fútbol", "titulo": "Parque, Cancha & Granja",
     "chips": ["Cancha con arcos", "Caballos y granja", "100% Pet Friendly"],
     "txt": "Cancha de fútbol con arcos, caballos en el predio y granja con gallinas. 100% Pet Friendly."},
]

PASOS = [
    {"tag": "Paso 1", "img": "proceso-1", "alt": "Galería y parque de la quinta", "titulo": "Consulta de fecha & modalidad",
     "txt": "Nos escribís por WhatsApp con la fecha, la cantidad de personas y la modalidad elegida. Un predio entero para vos y tus invitados: pileta, quincho, cancha y granja en un mismo lugar.",
     "checks": ["Sin cargo", "Por WhatsApp", "Respuesta rápida"]},
    {"tag": "Paso 2", "img": "proceso-2", "alt": "Dormitorio de la quinta", "titulo": "Confirmación & seña bancaria",
     "txt": "Te enviamos el presupuesto detallado y congelás tu fecha con una seña bancaria segura.",
     "checks": ["Presupuesto por escrito", "Sin letra chica", "Fecha bloqueada"]},
    {"tag": "Paso 3", "img": "proceso-3", "alt": "Piscina cercada y parque", "titulo": "Llegás y disfrutás",
     "txt": "Llegás a la quinta con todo listo, limpio y preparado: el predio entero para vos y tus invitados.",
     "checks": ["Predio en exclusiva", "Pileta limpia", "Quincho acondicionado"]},
]

FAQ = [
    ("Reservas", [
        ("¿Cuáles son los horarios del día de campo?", "La modalidad diurna va de 10:00 a 20:00 hs, con uso exclusivo del quincho, la galería, la piscina y el parque durante toda la jornada."),
        ("¿Cómo reservo una fecha?", "Nos escribís por WhatsApp con la fecha, la cantidad de personas y la modalidad. Te pasamos el presupuesto y congelás la fecha con una seña bancaria."),
        ("¿Se puede ir con mascotas?", "Sí, la quinta es 100% pet friendly y sin cargo extra. El parque está cercado en todo su perímetro."),
    ]),
    ("Valores", [
        ("¿Cuánto sale el alquiler?", "El valor depende de la modalidad, la fecha y la cantidad de personas. Escribinos por WhatsApp con esos datos y te pasamos el presupuesto exacto."),
        ("¿La consulta tiene costo?", "No. Consultar disponibilidad y pedir el presupuesto no tiene costo ni te compromete a nada."),
        ("¿Qué incluye el alquiler?", "El predio entero y en exclusiva: quincho, galería con parrilla, piscina con solárium, cancha y parque, más la cocina con horno y dos freezers, la vajilla, las mesas y las reposeras. La comida, la bebida, el carbón y la leña no están incluidos."),
    ]),
    ("El predio", [
        ("¿Cuánta gente entra en el quincho?", "El salón comedor cerrado tiene mesas largas para más de 25 comensales, cocina completa con horno, 2 freezers verticales, vajilla y Smart TV."),
        ("¿Hay lugar para dormir?", "Sí: dos habitaciones climatizadas para hasta 5 personas (una con sommier matrimonial y otra con tres camas individuales), con aire acondicionado y ventilador de techo. Se usan en el fin de semana completo y en la estadía vacacional."),
    ]),
]

# ---------------------------------------------------------------- la quinta
LQ_BLOQUES = [
    ("01 / El predio", "Sobre Boulevard Yuquerí",
     ["La quinta está sobre Boulevard Yuquerí, en Concordia, Entre Ríos, con acceso pavimentado transitable todo el año y con cualquier vehículo.",
      "Estás a 15 minutos del centro, cerca de comercios y supermercados, y a poca distancia de los complejos termales, el lago Salto Grande y la costanera."],
     "Cómo llegar", "/guia/como-llegar"),
    ("02 / La propuesta", "Uso exclusivo del predio",
     ["Cada reserva arranca igual: nos contás la fecha, cuántos son y qué modalidad te sirve. Con eso armamos el presupuesto.",
      "No compartís la quinta con otro grupo. Cuando reservás, el predio queda entero a disposición tuya: pileta, quincho, galería, cancha y parque."],
     "Cómo reservar", "/guia/como-reservar"),
    ("03 / La reserva", "Todo listo para usar",
     ["Entregamos todo listo para usar: la pileta limpia y en condiciones, el quincho acondicionado, el parque cortado y la leña a mano si hace frío.",
      "Llegás, abrís la tranquera y arrancás. No hay que preparar nada ni esperar a nadie."],
     "Consultar fecha", "/reservas"),
]
LQ_METRICAS = [
    ("5.000", "m² de parque arbolado y cerrado"),
    ("25+", "comensales sentados en el quincho climatizado"),
    ("15", "minutos hasta el centro de Concordia"),
    ("5", "huéspedes con pernocte en dos habitaciones"),
]
LQ_DESTACADOS = [
    ("Pileta con banco sumergido y cerco", "Agua cristalina, banco húmedo perimetral, cerco de seguridad y solárium con reposeras de madera."),
    ("Quincho climatizado para 25+ personas", "Salón cerrado con estufa Lepen a leña, mesas largas, cocina completa, dos freezers y Smart TV."),
    ("Cerco perimetral de seguridad", "El parque está cercado en todo su perímetro, así que los chicos y las mascotas andan tranquilos."),
    ("Acceso pavimentado todo el año", "Se llega con cualquier vehículo, sin camioneta ni tracción especial."),
    ("Uso exclusivo del predio", "El predio se alquila completo y en exclusiva: mientras está tu grupo, no hay otro evento en simultáneo."),
]

# ---------------------------------------------------------------- legal
LEGAL_FECHA = "29 de septiembre de 2026"
LEGAL = {
    "privacidad": {
        "title": "Política de Privacidad",
        "lead": "Cómo tratamos los datos que nos dejás al consultar por una fecha o al escribirnos.",
        "desc": "Cómo Quinta Dodó trata los datos personales que dejás al consultar por una fecha o al escribirnos.",
        "body": [
            ("h2", "1. Qué datos recopilamos"),
            ("p", "Recopilamos los datos que nos das vos: nombre, teléfono, correo y los detalles de tu consulta (fecha, cantidad de personas y modalidad)."),
            ("p", "El servidor donde está alojado el sitio puede registrar datos técnicos básicos de navegación, como el tipo de dispositivo y las páginas visitadas."),
            ("h2", "2. Para qué los usamos"),
            ("p", "Usamos esa información únicamente para responderte, pasarte el presupuesto, coordinar la reserva y mantenerte al tanto de tu estadía."),
            ("p", "Los datos técnicos los usamos para entender cómo funciona el sitio y mejorarlo. No los cruzamos con tus datos personales."),
            ("h2", "3. Con quién los compartimos"),
            ("p", "No vendemos, alquilamos ni cedemos tus datos personales a terceros."),
            ("p", "Solo compartimos lo indispensable con los servicios que usamos para que el sitio y la mensajería funcionen."),
            ("h2", "4. Cookies"),
            ("p", "El sitio usa solo lo esencial para funcionar y no usa cookies con fines publicitarios. El mapa de la página de reservas es un servicio de Google Maps, que puede usar sus propias cookies."),
            ("h2", "5. Cuánto tiempo los guardamos"),
            ("p", "Guardamos tus datos el tiempo necesario para gestionar la consulta o la reserva, y después los damos de baja."),
            ("h2", "6. Tus derechos"),
            ("p", "Podés pedirnos en cualquier momento acceder a tus datos, corregirlos o eliminarlos. Escribinos por WhatsApp y lo resolvemos."),
            ("h3", "Marco legal aplicable"),
            ("p", "Tus datos se tratan conforme a la Ley 25.326 de Protección de Datos Personales de la República Argentina."),
            ("p", "La Agencia de Acceso a la Información Pública es el organismo de control en materia de datos personales en Argentina."),
            ("h2", "7. Seguridad de los datos"),
            ("p", "Tomamos medidas razonables para proteger tus datos frente a accesos o usos no autorizados."),
            ("h2", "8. Menores de edad"),
            ("p", "El sitio no está dirigido a menores de 16 años y no recopilamos datos de menores a sabiendas."),
            ("h2", "9. Cambios en esta política"),
            ("p", "Podemos actualizar esta política. Cualquier cambio se publica en esta misma página."),
            ("h2", "10. Contacto"),
            ("p", "Para cualquier consulta sobre esta política, escribinos por WhatsApp al " + PHONE + "."),
        ],
    },
    "terminos": {
        "title": "Términos y Condiciones",
        "lead": "Las condiciones que rigen el uso del sitio y el alquiler de la quinta.",
        "desc": "Condiciones que rigen el uso del sitio y el alquiler de Quinta Dodó: reservas, seña, horarios y cuidados.",
        "body": [
            ("h2", "1. Aceptación de las condiciones"),
            ("p", "Al usar este sitio y al reservar una fecha, aceptás estas condiciones. Si no estás de acuerdo, no utilices el servicio."),
            ("h2", "2. El servicio"),
            ("p", "Ofrecemos el alquiler temporario de la quinta en tres modalidades: día de campo, fin de semana completo y estadía vacacional por semana o quincena."),
            ("p", "Los presupuestos se informan por WhatsApp y tienen la vigencia que se indique en cada caso."),
            ("h2", "3. Propiedad del contenido"),
            ("p", "Las fotos, textos y el material de este sitio son de Quinta Dodó y no pueden reproducirse sin autorización."),
            ("p", "Nos reservamos el derecho de difundir imágenes del predio. No publicamos fotos de huéspedes sin su consentimiento."),
            ("h2", "4. Reserva personal"),
            ("p", "La reserva es personal e intransferible: no podés cederla ni subalquilar la quinta a terceros."),
            ("h2", "5. Seña y pagos"),
            ("p", "La fecha se confirma con una seña bancaria. El saldo se abona según lo acordado al momento de reservar."),
            ("p", "La comida, la bebida, el carbón y la leña no están incluidos, salvo que se indique expresamente."),
            ("h3", "Moneda"),
            ("p", "Los valores se informan en pesos argentinos y pueden actualizarse según la fecha y la temporada."),
            ("h2", "6. Horarios y estadía"),
            ("p", "Los horarios de ingreso y salida de cada modalidad se acuerdan al reservar y se respetan de ambas partes."),
            ("p", "El grupo es responsable del cuidado del predio y de las instalaciones durante su estadía. Los daños se resarcen al finalizar."),
            ("h2", "7. Cancelaciones"),
            ("p", "Ante una cancelación, las condiciones de devolución de la seña son las que se informan por escrito al momento de reservar."),
            ("h2", "8. Cuidados y responsabilidad"),
            ("p", "Cuidamos que las instalaciones estén en condiciones. No respondemos por objetos personales dejados en el predio."),
            ("p", "El uso de la piscina, la parrilla y la cancha es responsabilidad del grupo. Los menores deben estar siempre acompañados por un adulto."),
            ("h2", "9. Mascotas"),
            ("p", "La quinta es pet friendly y no cobra cargo adicional por mascotas."),
            ("h2", "10. Confidencialidad"),
            ("p", "Ambas partes se comprometen a tratar con reserva la información intercambiada durante la contratación."),
            ("h2", "11. Ley aplicable"),
            ("p", "Estas condiciones se rigen por las leyes de la República Argentina. Cualquier controversia se somete a los tribunales competentes de la provincia de Entre Ríos."),
            ("h2", "12. Consultas"),
            ("p", "Si tenés dudas sobre estas condiciones, escribinos por WhatsApp."),
        ],
    },
}
