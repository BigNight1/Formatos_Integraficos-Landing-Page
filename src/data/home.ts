/**
 * Contenido de la Home · rediseño v2 (estilo B)
 * Fuente: design-refs/diseno/Home.dc.html (renderVals) y design-refs/INVENTARIO.md
 *
 * ⚠️ DATOS FICTICIOS PENDIENTES DE REEMPLAZO (ver formatos-intergraficos-rediseno-seo.md):
 *  - precios (todos los montos)
 *  - testimonios (Rosa Mendoza, Jorge Quispe, Lucía Huamán)
 *  - calificación "4.9 ★ en Google (120 reseñas)"
 *  - "Autorización SUNAT N.º 0458-2026" (está en el Footer)
 *  - mínimos, formas de pago, modelos de impresora, distritos de cobertura
 *
 * Unidad de venta: MILLAR / MILLARES (nunca "juegos").
 */

export const confianza = [
  { valor: '+20', texto: 'años imprimiendo comprobantes' },
  { valor: '500+', texto: 'empresas atendidas' },
  { valor: '24 h', texto: 'entrega en Lima' },
  { valor: '100%', texto: 'formatos autorizados SUNAT' },
  { valor: '4.9 ★', texto: 'en Google (120 reseñas)' }, // 🟥 ficticio
];

export const productos = [
  {
    num: '01',
    nombre: 'Boletas de venta',
    desc: 'En talonario o formato continuo, de ½ oficio a A4. Original + 1 o 2 copias.',
    url: '/boletas-de-venta',
  },
  {
    num: '02',
    nombre: 'Facturas',
    desc: 'Original para el cliente y copias para SUNAT y tu control, listas para impresora matricial.',
    url: '/facturas',
  },
  {
    num: '03',
    nombre: 'Guías de remisión',
    desc: 'Remitente y transportista, con campos para placa, conductor y punto de partida.',
    url: '/guias-de-remision',
  },
  {
    num: '04',
    nombre: 'Notas de crédito y débito',
    desc: 'Con la misma serie y diseño de tus facturas para que la contabilidad cuadre.',
    url: '/notas-de-credito-debito',
  },
  {
    num: '05',
    nombre: 'Liquidaciones de compra',
    desc: 'Para compras a productores sin RUC, con los campos que exige SUNAT.',
    url: '/liquidaciones-de-compra',
  },
  {
    num: '06',
    nombre: 'Retención y percepción',
    desc: 'Comprobantes para agentes de retención y percepción designados por SUNAT.',
    url: '/retencion-percepcion',
  },
  {
    num: '07',
    nombre: 'Proformas y documentos',
    desc: 'Cotizaciones, órdenes de compra y notas de pedido con tu marca.',
    url: '/servicios/documentos-administrativos',
  },
  {
    num: '08',
    nombre: 'Vouchers POS',
    desc: 'Rollos de papel térmico y bond para cajas registradoras y terminales.',
    url: '/servicios/vouchers-pos',
  },
];

/** Encabezados de la tabla de precios. Antes decían "100 / 500 / 1000 juegos". */
export const columnasPrecio = ['1 millar', '5 millares', '10 millares'];

export const precios = [
  { formato: 'Boleta de venta', medida: '½ oficio', copias: 'Original + 1', p1: 'S/ 85', p5: 'S/ 125', p10: 'S/ 160' },
  { formato: 'Boleta de venta', medida: 'A4', copias: 'Original + 1', p1: 'S/ 105', p5: 'S/ 145', p10: 'S/ 230' },
  { formato: 'Factura', medida: '½ oficio', copias: 'Original + 2', p1: 'S/ 110', p5: 'S/ 165', p10: 'S/ 240' },
  { formato: 'Guía de remisión', medida: 'A4', copias: 'Original + 3', p1: 'S/ 140', p5: 'S/ 210', p10: 'S/ 320' },
  { formato: 'Formato continuo', medida: '9½" × 11"', copias: 'Original + 2', p1: '—', p5: 'S/ 260', p10: 'S/ 390' },
];

export const pasos = [
  { n: '01', titulo: 'Nos escribes', texto: 'Mándanos tu RUC, el comprobante y la cantidad por WhatsApp o el formulario.' },
  { n: '02', titulo: 'Apruebas la prueba', texto: 'Te enviamos el diseño con tu logo, serie y numeración para que lo revises.' },
  { n: '03', titulo: 'Autorizas en SUNAT', texto: 'Registras el pedido en SUNAT SOL eligiéndonos como imprenta. Te guiamos si es tu primera vez.' },
  { n: '04', titulo: 'Recibes tus formatos', texto: 'Imprimimos y entregamos en 24 a 48 horas en Lima, o enviamos a provincia.' },
];

export const requisitos = [
  { titulo: 'RUC activo y domicilio habido', texto: 'Tu RUC debe estar activo y con domicilio fiscal en condición de habido.' },
  { titulo: 'Registros de ventas y compras al día', texto: 'Los registros electrónicos de los últimos 12 meses deben estar presentados.' },
  { titulo: 'Declaraciones mensuales al día', texto: 'Las declaraciones de los últimos 6 meses deben estar presentadas.' },
  { titulo: 'Solicitud en SUNAT SOL', texto: 'Indicas la imprenta, nosotros aceptamos el pedido y SUNAT genera el número de autorización.' },
];

export const specs = [
  { k: 'Medidas', v: '½ oficio, A4 y formato continuo 9½" × 11" o 9½" × 5½"' },
  { k: 'Papel', v: 'Bond 75 g y autocopiativo (químico), en blanco' },
  { k: 'Copias', v: 'Original + hasta 5 copias' },
  { k: 'Numeración', v: 'Serie y numeración correlativa, preimpresa' },
  { k: 'Impresión', v: 'Offset de 1 a 4 colores, con marca de agua opcional' },
];

export const testimonios = [
  {
    texto: 'Pedimos las facturas un lunes y el martes ya estaban en la tienda. La prueba de diseño nos ahorró un error en la serie.',
    nombre: 'Rosa Mendoza',
    cargo: 'Administradora · ferretería en San Juan de Miraflores',
  },
  {
    texto: 'Llevamos cinco años imprimiendo nuestras guías de remisión con ellos. Las copias salen nítidas y nunca hemos tenido problemas con SUNAT.',
    nombre: 'Jorge Quispe',
    cargo: 'Jefe de logística · distribuidora en Ate',
  },
  {
    texto: 'Era mi primera vez pidiendo boletas autorizadas y me explicaron todo el trámite en SOL por WhatsApp. Muy recomendables.',
    nombre: 'Lucía Huamán',
    cargo: 'Dueña · minimarket en Villa El Salvador',
  },
];

export const distritos = [
  'Villa María del Triunfo',
  'San Juan de Miraflores',
  'Villa El Salvador',
  'Chorrillos',
  'Surco',
  'Lima Cercado',
  'Ate',
  'San Juan de Lurigancho',
  'Los Olivos',
  'Callao',
];

export const faqs = [
  {
    q: '¿Qué necesito para imprimir boletas autorizadas por SUNAT?',
    a: 'RUC activo y habido, registros de ventas y compras al día de los últimos 12 meses y declaraciones de los últimos 6 meses. Con eso solicitas la autorización en SUNAT SOL y nos eliges como imprenta.',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'Entre 24 y 48 horas en Lima Metropolitana desde que apruebas la prueba de diseño y SUNAT emite la autorización. A provincia, de 3 a 5 días hábiles.',
  },
  { q: '¿Envían a provincia?', a: 'Sí, enviamos a todo el Perú por la agencia de transporte que prefieras.' },
  {
    q: '¿Los formatos cumplen con los requisitos de SUNAT?',
    a: 'Sí. Cada comprobante lleva pie de imprenta, RUC de la imprenta, número de autorización, serie y numeración correlativa, según el Reglamento de Comprobantes de Pago.',
  },
  {
    q: '¿Cuál es la cantidad mínima?',
    a: 'Desde 1 millar en talonario y desde 5 millares en formato continuo.', // 🟥 confirmar mínimos reales
  },
  {
    q: '¿Qué diferencia hay entre papel bond y autocopiativo?',
    a: 'El autocopiativo (químico) transfiere lo escrito a las copias sin papel carbón. El bond se usa para originales simples o formatos de una sola hoja.',
  },
  {
    q: '¿Puedo usar mi impresora matricial?',
    a: 'Sí. El formato continuo tiene perforaciones laterales para impresoras matriciales Epson LX, FX y similares.',
  },
  {
    q: '¿Ofrecen descuentos por volumen?',
    a: 'Sí, a partir de 20 millares o en pedidos recurrentes. Pídenos la tarifa por WhatsApp.', // 🟥 confirmar umbral real
  },
  {
    q: '¿Cómo puedo pagar?',
    a: 'Transferencia, Yape, Plin o efectivo. Pides con 50% de adelanto y pagas el saldo contra entrega.', // 🟥 confirmar condiciones
  },
  {
    q: '¿Todavía conviene el comprobante físico si existe la factura electrónica?',
    a: 'Sí, como respaldo por contingencia o si tu negocio no está obligado a emitir electrónicamente. Te ayudamos a evaluar tu caso.',
  },
];

/**
 * Guías destacadas en la Home: 4 de las 6 del blog.
 * Se quitó "Cómo autorizar la impresión… SUNAT" de la lista del blog porque
 * duplicaba la página /autorizado-sunat (canibalización de keywords).
 */
export const guias = [
  { tag: 'Comprobantes', titulo: 'Factura o boleta: cuál emitir y cuándo', min: 4, url: '/blog/factura-o-boleta', listo: true },
  { tag: 'Medidas', titulo: '½ oficio o A4: qué medida de boleta elegir', min: 3, url: '/blog/medidas-de-boleta', listo: true },
  { tag: 'Papel', titulo: 'Papel autocopiativo vs bond: diferencias y usos', min: 4, url: '/blog/autocopiativo-vs-bond', listo: true },
  { tag: 'SUNAT', titulo: 'Qué es el pie de imprenta y por qué tu comprobante lo necesita', min: 5, url: '/blog/pie-de-imprenta', listo: true },
];

export const WHATSAPP = 'https://wa.me/51910500706';
export const TELEFONO = '+51 910 500 706';
export const TELEFONO_TEL = '+51910500706';
