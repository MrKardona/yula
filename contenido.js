// Contenido de VibraLuna: significados, fases de la luna y artículos del diario.
// Para agregar un artículo o un significado, edita solo este archivo.
// Los significados vienen de tradiciones y sistemas de creencias; se comparten como inspiración.

const SIGNIFICADOS = {
  colores: [
    ["Rosa", "#f2b8c6", "Amor propio, ternura y dulzura. Recuerda tratarte con la misma suavidad que das a otros."],
    ["Rojo", "#c8463d", "Pasión, vitalidad y coraje. Para los días en que necesitas fuerza para empezar."],
    ["Naranja", "#e8873a", "Creatividad y alegría. Despierta las ganas de crear y de disfrutar."],
    ["Amarillo", "#e9c24a", "Optimismo, claridad mental y abundancia. La energía del sol."],
    ["Verde", "#7fae84", "Sanación, equilibrio y esperanza. El color de la naturaleza y de volver a empezar."],
    ["Azul", "#6d97c9", "Calma, comunicación y verdad. Para expresarte con serenidad."],
    ["Violeta", "#9a7cc4", "Intuición, espiritualidad y transformación. Conecta con tu voz interior."],
    ["Blanco", "#f4f1ee", "Paz, pureza y nuevos comienzos. Una página en blanco."],
    ["Dorado", "#c9a15a", "Éxito, prosperidad y luz propia. Para brillar sin pedir permiso."],
    ["Negro", "#2e2a2c", "Protección, fuerza y límites sanos. Te ayuda a cuidar tu energía."],
  ],
  flores: [
    ["Rosa", "🌹", "El amor en todas sus formas: el de pareja, el de amigas y el amor propio."],
    ["Margarita", "🌼", "Inocencia, sencillez y nuevos comienzos. La alegría de lo simple."],
    ["Loto", "🪷", "Renacer. Florece limpia aunque nace en el barro: crecer a pesar de todo."],
    ["Girasol", "🌻", "Fe y alegría. Siempre busca la luz, incluso en días nublados."],
    ["Nomeolvides", "💙", "Recuerdo y amor fiel. Para alguien que llevas siempre contigo."],
    ["Lavanda", "💜", "Calma y descanso. Aquieta la mente y ayuda a soltar."],
    ["Flor de cerezo", "🌸", "Lo efímero y lo bello. Una invitación a vivir el presente."],
  ],
  simbolos: [
    ["Corazón", "♡", "Amor que se da y se recibe. Un recordatorio de abrirte a lo bonito."],
    ["Luna creciente", "☾", "Ciclos, intuición y energía femenina. Todo lo que crece a su ritmo."],
    ["Estrella", "✦", "Guía y deseos. Tu luz te orienta incluso en la oscuridad."],
    ["Mariposa", "🦋", "Transformación. Los cambios también traen alas."],
    ["Ojo turco", "🧿", "Protección contra la envidia y las malas energías."],
    ["Mano de Fátima", "🖐", "Protección y bendición para ti y tu hogar."],
    ["Trébol", "☘", "Buena suerte y esperanza."],
    ["Infinito", "∞", "Lo eterno: un amor, una amistad o un propósito que no termina."],
    ["Árbol de la vida", "🌳", "Raíces firmes y crecimiento. La conexión con tu familia y tu historia."],
  ],
};

// fases de la luna (de luna nueva a menguante): nombre, mensaje y una intención de la tienda
const FASES = [
  ["Luna nueva", "Es momento de sembrar. Escribe lo que quieres atraer este mes y elige una piedra que te lo recuerde.", "exito"],
  ["Luna creciente", "Tus intenciones empiezan a tomar forma. Da el primer paso, aunque sea pequeño.", "alegria"],
  ["Cuarto creciente", "Aparecen los retos. Mantén la confianza y sigue adelante con calma.", "exito"],
  ["Gibosa creciente", "Ajusta, pule y prepárate. Lo que sembraste está por florecer.", "equilibrio"],
  ["Luna llena", "Celebra y agradece. Es la mejor noche para limpiar y cargar tus piedras bajo su luz.", "amor"],
  ["Gibosa menguante", "Comparte lo que aprendiste y agradece lo que llegó.", "amor"],
  ["Cuarto menguante", "Suelta lo que ya no te sirve: hábitos, pensamientos o relaciones que pesan.", "proteccion"],
  ["Luna menguante", "Descansa y vuelve a tu centro antes de un nuevo ciclo.", "calma"],
];

const ARTICULOS = [
  {
    id: "significado-colores", titulo: "El significado espiritual de los colores", img: "img/vb/colores.jpg",
    resumen: "Cada color lleva una energía. Aprende a elegir tus accesorios según lo que quieres sentir.",
    filtro: "#/tienda?linea=esencial",
    cuerpo: [
      "Desde siempre los colores han tenido un significado: en la naturaleza, en el arte y en las tradiciones espirituales. Elegir el color de lo que llevas puesto es también una manera de elegir cómo te quieres sentir.",
      "El rosa habla de amor propio y ternura; el verde, de sanación y equilibrio; el violeta, de intuición. El dorado trae prosperidad y el negro protege tu energía.",
      "Un truco sencillo: por la mañana pregúntate qué necesitas hoy. ¿Calma? Elige tonos azules o lilas. ¿Energía para una reunión importante? Naranja o dorado. Tu accesorio será un pequeño recordatorio durante el día.",
    ],
  },
  {
    id: "significado-flores", titulo: "Lo que dicen las flores que llevas", img: "img/vb/flores.jpg",
    resumen: "La margarita, el loto o el girasol no son solo bonitos: cada flor tiene su mensaje.",
    filtro: "#/tienda?linea=esencial",
    cuerpo: [
      "Las flores han sido mensajeras durante siglos. Regalar una flor, o llevarla en un dije, es decir algo sin palabras.",
      "La margarita representa los nuevos comienzos; el loto, la capacidad de renacer aunque vengas del barro; el girasol, la fe de quien siempre busca la luz. La rosa es amor, y la nomeolvides es la flor del recuerdo.",
      "Cuando elijas un accesorio con flores para regalar, piensa en el mensaje: una margarita para quien empieza una etapa, un girasol para alguien que necesita ánimo, una rosa para decir te quiero.",
    ],
  },
  {
    id: "ritual-luna-llena", titulo: "Ritual de luna llena para limpiar tus piedras", img: "img/vb/ritual.jpg",
    resumen: "Un ritual sencillo para agradecer, soltar y cargar tus accesorios con la luz de la luna.",
    filtro: "#/tienda?tipo=velas",
    cuerpo: [
      "A las mujeres, dice la astrología, nos rige la luna: sus fases acompañan nuestros ciclos y emociones. La luna llena es el punto más brillante del ciclo, ideal para agradecer y soltar.",
      "Necesitas una vela, un cuaderno y tus accesorios. Enciende la vela, escribe tres cosas que agradeces y una que quieres dejar ir. Lee en voz alta lo que escribiste.",
      "Después deja tus piedras toda la noche cerca de una ventana donde les dé la luz de la luna. Por la mañana guárdalas en su bolsita. Evita mojar las piedras porosas como la rodonita o la turmalina.",
    ],
  },
  {
    id: "piedra-segun-signo", titulo: "Tu piedra según tu signo", img: "img/vb/signos.jpg",
    resumen: "Descubre qué piedras acompañan mejor a tu signo del zodiaco y por qué.",
    filtro: "#/tienda",
    cuerpo: [
      "Cada signo tiene un elemento: fuego (Aries, Leo, Sagitario), tierra (Tauro, Virgo, Capricornio), aire (Géminis, Libra, Acuario) y agua (Cáncer, Escorpio, Piscis). Las piedras se asocian con los signos según ese elemento y su energía.",
      "Los signos de fuego suelen conectar con piedras cálidas como la cornalina y el ojo de tigre. Los de tierra, con la aventurina y la turmalina. Los de aire, con el cuarzo cristal y la amatista, y los de agua, con la piedra luna y el cuarzo rosa.",
      "En la tienda puedes filtrar por tu signo para ver los accesorios que te acompañan. También es una idea de regalo muy personal para un cumpleaños.",
    ],
  },
];
