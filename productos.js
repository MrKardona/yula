// Catálogo de Yulá. Para agregar o editar productos, cambia solo este archivo.
// precio en pesos colombianos (COP), IVA incluido.

const WHATSAPP = ""; // número con indicativo, sin + ni espacios. Ej: "573001234567"
const ENVIO_GRATIS_DESDE = 150000;
const CAJA_PREMIUM = 8000;

const INTENCIONES = {
  amor:       { nombre: "Amor propio",  color: "#e8a3ad" },
  calma:      { nombre: "Calma",        color: "#c98a9b" },
  proteccion: { nombre: "Protección",   color: "#3b3236" },
  paz:        { nombre: "Paz e intuición", color: "#9a6fc4" },
  equilibrio: { nombre: "Equilibrio",   color: "#8fa58a" },
  alegria:    { nombre: "Alegría",      color: "#e9b949" },
};

const TIPOS = { pulseras: "Pulseras", collares: "Collares", cajitas: "Cajitas de regalo", aretes: "Aretes", cabello: "Cabello" };

const SIGNOS = ["Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"];

const PRODUCTOS = [
  {
    id: "pulsera-rodonita", nombre: "Pulsera Rodonita", precio: 24000, img: "img/p/rodonita.jpg",
    tipo: "pulseras", linea: "intencion", intenciones: ["calma","amor"], signos: ["Tauro","Libra","Escorpio"],
    piedras: [["Rodonita", "Calma y equilibrio emocional"]],
    corto: "La piedra con la que empezó Yulá. Para soltar la rabia y volver a tu centro.",
    descripcion: "Cuentas de rodonita natural de 8 mm, rosa con vetas oscuras, y un separador dorado. Es un recordatorio en tu muñeca de que la calma también se elige.",
    opciones: { Talla: ["S (15 cm)","M (17 cm)","L (19 cm)"] },
    incluye: ["Pulsera de rodonita en hilo elástico","Tarjeta con el significado de la piedra","Bolsita de organza"],
    destacado: true, nuevo: true,
  },
  {
    id: "pulsera-cuarzo-rosa", nombre: "Pulsera Cuarzo Rosa", precio: 22000, img: "img/p/cuarzo.jpg",
    tipo: "pulseras", linea: "intencion", intenciones: ["amor"], signos: ["Tauro","Libra","Cáncer"],
    piedras: [["Cuarzo rosa", "Amor propio y ternura"]],
    corto: "Para tratarte con la misma ternura que le das a los demás.",
    descripcion: "Cuentas de cuarzo rosa natural de 8 mm con un separador dorado. Es el regalo clásico para una amiga, tu mamá o tu hermana, o para ti.",
    opciones: { Talla: ["S (15 cm)","M (17 cm)","L (19 cm)"] },
    incluye: ["Pulsera de cuarzo rosa en hilo elástico","Tarjeta con el significado de la piedra","Bolsita de organza"],
    destacado: true,
  },
  {
    id: "pulsera-amatista-luna", nombre: "Pulsera Amatista Luna", precio: 24000, img: "img/p/amatista.jpg",
    tipo: "pulseras", linea: "intencion", intenciones: ["paz"], signos: ["Piscis","Acuario","Virgo"],
    piedras: [["Amatista", "Paz mental e intuición"]],
    corto: "Amatista con un dije de luna dorada para bajar el ruido mental.",
    descripcion: "Cuentas de amatista natural de 8 mm y un pequeño dije de luna creciente. Para dormir mejor y escuchar tu intuición.",
    opciones: { Talla: ["S (15 cm)","M (17 cm)","L (19 cm)"] },
    incluye: ["Pulsera de amatista con dije de luna","Tarjeta con el significado de la piedra","Bolsita de organza"],
    destacado: true,
  },
  {
    id: "pulsera-proteccion", nombre: "Pulsera Escudo", precio: 26000, img: "img/p/turmalina.jpg",
    tipo: "pulseras", linea: "intencion", intenciones: ["proteccion"], signos: ["Capricornio","Escorpio","Leo"],
    piedras: [["Turmalina negra", "Protección"],["Ónix", "Fuerza y enfoque"]],
    corto: "Turmalina negra y ónix para resguardar tu energía.",
    descripcion: "Turmalina negra en bruto alternada con ónix pulido. Combina con todo y te recuerda que puedes soltar lo que no te pertenece.",
    opciones: { Talla: ["S (15 cm)","M (17 cm)","L (19 cm)"] },
    incluye: ["Pulsera de turmalina y ónix","Tarjeta con el significado de las piedras","Bolsita de organza"],
  },
  {
    id: "pulsera-7-chakras", nombre: "Pulsera 7 Chakras", precio: 26000, img: "img/p/chakras.jpg",
    tipo: "pulseras", linea: "intencion", intenciones: ["equilibrio"], signos: SIGNOS,
    piedras: [["Piedra volcánica", "Arraigo"],["7 piedras de colores", "Un centro de energía cada una"]],
    corto: "Piedra volcánica y siete piedras de colores para cuerpo, mente y espíritu.",
    descripcion: "Base de piedra volcánica con jaspe rojo, cornalina, ojo de tigre, aventurina, sodalita, lapislázuli y amatista. La piedra volcánica es porosa: puedes ponerle una gota de tu aceite esencial favorito.",
    opciones: { Talla: ["S (15 cm)","M (17 cm)","L (19 cm)"] },
    incluye: ["Pulsera 7 chakras","Tarjeta con el significado de cada piedra","Bolsita de organza"],
  },
  {
    id: "hilo-rojo-ojo", nombre: "Hilo Rojo con Ojo", precio: 12000, img: "img/p/hilo-rojo.jpg",
    tipo: "pulseras", linea: "esencial", intenciones: ["proteccion"], signos: SIGNOS,
    piedras: [["Ojo turco", "Protección contra la mala energía"]],
    corto: "Hilo rojo tejido con ojo turco. Ajustable.",
    descripcion: "Hilo rojo trenzado a mano con cierre corredizo, un ojo turco de vidrio y balines dorados. Ligero para usarlo todos los días.",
    opciones: { Hilo: ["Rojo","Negro"] },
    incluye: ["Pulsera de hilo ajustable","Bolsita de organza"],
    nuevo: true,
  },
  {
    id: "collar-margarita", nombre: "Collar Margarita", precio: 28000, img: "img/p/collar-flor.jpg",
    tipo: "collares", linea: "esencial", intenciones: ["alegria"], signos: SIGNOS,
    piedras: [],
    corto: "Mostacillas pastel y una margarita esmaltada. Alegría para tu outfit.",
    descripcion: "Collar de mostacillas de vidrio en tonos pastel con un dije de margarita esmaltada. Para los días en que quieres un toque de color.",
    opciones: { Largo: ["40 cm","45 cm"] },
    incluye: ["Collar de mostacillas con dije","Bolsita de organza"],
    destacado: true,
  },
  {
    id: "collar-cuarzo-cristal", nombre: "Collar Punta de Cuarzo", precio: 38000, img: "img/p/collar-cuarzo.jpg",
    tipo: "collares", linea: "intencion", intenciones: ["equilibrio","paz"], signos: SIGNOS,
    piedras: [["Cuarzo cristal", "Claridad y enfoque"]],
    corto: "Una punta de cuarzo cristal envuelta en alambre dorado.",
    descripcion: "Cadena fina dorada con una punta de cuarzo cristal envuelta a mano. Se dice que el cuarzo cristal amplifica la intención de quien lo usa.",
    opciones: { Largo: ["45 cm","50 cm"] },
    incluye: ["Collar con dije de cuarzo","Tarjeta con el significado de la piedra","Bolsita de organza"],
  },
  {
    id: "aretes-flor-rosa", nombre: "Aretes Flor de Cerezo", precio: 16000, img: "img/p/aretes.jpg",
    tipo: "aretes", linea: "esencial", intenciones: ["alegria"], signos: SIGNOS,
    piedras: [],
    corto: "Florecitas esmaltadas rosa y blanco en ganchos dorados.",
    descripcion: "Aretes colgantes livianos con flores esmaltadas. Delicados para el día a día.",
    opciones: {},
    incluye: ["Par de aretes","Bolsita de organza"],
  },
  {
    id: "pinzas-flores", nombre: "Set Pinzas Flor x4", precio: 18000, img: "img/p/pinzas.jpg",
    tipo: "cabello", linea: "esencial", intenciones: ["alegria"], signos: SIGNOS,
    piedras: [],
    corto: "Cuatro pinzas en forma de flor en rosa, lila, crema y salvia.",
    descripcion: "Set de cuatro pinzas mate en forma de flor. Sostienen bien medio recogido y combinan entre sí.",
    opciones: {},
    incluye: ["4 pinzas de flor"],
    nuevo: true,
  },
  {
    id: "cajita-amor-y-calma", nombre: "Cajita Amor y Calma", precio: 62000, img: "img/p/cajita-amor.jpg",
    tipo: "cajitas", linea: "intencion", intenciones: ["amor","calma"], signos: ["Tauro","Libra","Cáncer","Piscis"],
    piedras: [["Cuarzo rosa", "Amor propio"],["Rodonita", "Calma"]],
    corto: "Dos pulseras, una vela de cuarzo y pétalos, y una tarjeta con tu mensaje.",
    descripcion: "Un regalo listo para entregar: pulsera de cuarzo rosa, pulsera de rodonita y una vela de soya con chips de cuarzo rosa y pétalos de rosa. Escribe el mensaje y nosotras lo ponemos en la tarjeta.",
    opciones: { Talla: ["S (15 cm)","M (17 cm)","L (19 cm)"] },
    incluye: ["Pulsera de cuarzo rosa","Pulsera de rodonita","Vela de soya con cuarzo y pétalos","Tarjeta con tu mensaje","Caja kraft con relleno"],
    destacado: true, regalo: true,
  },
  {
    id: "cajita-proteccion", nombre: "Cajita Protección", precio: 62000, img: "img/p/cajita-proteccion.jpg",
    tipo: "cajitas", linea: "intencion", intenciones: ["proteccion"], signos: ["Capricornio","Escorpio","Leo","Aries"],
    piedras: [["Turmalina negra", "Protección"],["Ónix", "Fuerza"]],
    corto: "Pulsera Escudo, vela de lavanda, palo santo y una tarjeta con tu mensaje.",
    descripcion: "Para empezar una etapa nueva o para alguien que necesita sentirse resguardado: pulsera de turmalina y ónix, vela de soya con lavanda, un palo santo y tu mensaje en la tarjeta.",
    opciones: { Talla: ["S (15 cm)","M (17 cm)","L (19 cm)"] },
    incluye: ["Pulsera Escudo (turmalina y ónix)","Vela de soya con lavanda","Palo santo","Tarjeta con tu mensaje","Caja kraft con relleno"],
    regalo: true,
  },
];
