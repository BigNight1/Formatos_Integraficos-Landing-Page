/**
 * Datos de /precios
 * Fuente: design-refs/diseno/Precios.dc.html (renderVals)
 *
 * UNIDAD: millar / millares. Columnas: 1 millar · 5 millares · 10 millares.
 * Pedido mínimo: 1 millar.
 * Los MONTOS se mantienen como precios REFERENCIALES de ejemplo (decisión del
 * dueño) y coinciden con los de la Home y de las 6 páginas de comprobante; las
 * páginas lo avisan junto a las tablas.
 *
 * Decisión del dueño: formas de pago (Yape, Plin), 50% de adelanto y pago contra
 * entrega se mantienen.
 * ⚠️ Pendiente de confirmar: garantía de reimpresión y umbral de descuento por volumen.
 */

export interface Fila {
  formato: string;
  url: string;
  medida: string;
  copias: string;
  p1: string;
  p5: string;
  p10: string;
}

export const grupos: { titulo: string; filas: Fila[] }[] = [
  {
    titulo: 'Comprobantes en talonario',
    filas: [
      { formato: 'Boleta de venta', url: '/boletas-de-venta', medida: '½ oficio', copias: 'Original + 1', p1: 'S/ 85', p5: 'S/ 125', p10: 'S/ 160' },
      { formato: 'Boleta de venta', url: '/boletas-de-venta', medida: 'A4', copias: 'Original + 1', p1: 'S/ 105', p5: 'S/ 145', p10: 'S/ 230' },
      { formato: 'Factura', url: '/facturas', medida: '½ oficio', copias: 'Original + 2', p1: 'S/ 110', p5: 'S/ 165', p10: 'S/ 240' },
      { formato: 'Factura', url: '/facturas', medida: 'A4', copias: 'Original + 2', p1: 'S/ 125', p5: 'S/ 185', p10: 'S/ 275' },
      { formato: 'Guía de remisión', url: '/guias-de-remision', medida: 'A4', copias: 'Original + 3', p1: 'S/ 140', p5: 'S/ 210', p10: 'S/ 320' },
      { formato: 'Nota de crédito / débito', url: '/notas-de-credito-debito', medida: '½ oficio', copias: 'Original + 2', p1: 'S/ 110', p5: 'S/ 165', p10: 'S/ 240' },
      { formato: 'Liquidación de compra', url: '/liquidaciones-de-compra', medida: '½ oficio', copias: 'Original + 2', p1: 'S/ 115', p5: 'S/ 170', p10: 'S/ 250' },
    ],
  },
  {
    titulo: 'Formato continuo (impresora matricial)',
    filas: [
      { formato: 'Boleta continua', url: '/boletas-de-venta', medida: '9½" × 5½"', copias: 'Original + 1', p1: '—', p5: 'S/ 180', p10: 'S/ 280' },
      { formato: 'Factura continua', url: '/facturas', medida: '9½" × 11"', copias: 'Original + 2', p1: '—', p5: 'S/ 260', p10: 'S/ 390' },
      { formato: 'Guía continua', url: '/guias-de-remision', medida: '9½" × 11"', copias: 'Original + 3', p1: '—', p5: 'S/ 290', p10: 'S/ 430' },
    ],
  },
  {
    titulo: 'Otros formatos',
    filas: [
      { formato: 'Proforma / cotización', url: '/servicios/documentos-administrativos', medida: 'A4', copias: 'Original + 1', p1: 'S/ 75', p5: 'S/ 115', p10: 'S/ 150' },
      { formato: 'Recibo por honorarios', url: '/servicios/recibos-por-honorarios', medida: '½ oficio', copias: 'Original + 1', p1: 'S/ 80', p5: 'S/ 120', p10: 'S/ 155' },
      { formato: 'Letra de cambio', url: '/servicios/letras-de-cambio', medida: 'Estándar', copias: 'Original', p1: 'S/ 70', p5: 'S/ 110', p10: 'S/ 145' },
      { formato: 'Voucher POS (rollos)', url: '/servicios/vouchers-pos', medida: '80 mm', copias: 'Térmico', p1: 'S/ 190', p5: 'S/ 850', p10: 'S/ 1,600' },
    ],
  },
];

export const factores = [
  { n: '01', t: 'Cantidad', d: 'El costo por millar baja mucho al pasar de 1 a 10 millares: la preparación de la máquina se reparte.' },
  { n: '02', t: 'Número de copias', d: 'Cada copia autocopiativa adicional suma papel y tiempo de compaginado.' },
  { n: '03', t: 'Medida', d: 'A4 usa casi el doble de papel que ½ oficio.' },
  { n: '04', t: 'Colores', d: 'A 1 color es lo más económico; logos a full color suben el precio.' },
];

export const condiciones = [
  { t: 'Formas de pago', d: 'Transferencia, Yape, Plin o efectivo. 50% de adelanto y saldo contra entrega.' },
  { t: 'Pago contra entrega', d: 'Clientes recurrentes pagan el 100% al recibir su pedido, sin adelantos.' },
  { t: 'Garantía', d: 'Si un error de impresión es nuestro, reimprimimos sin costo. Por eso siempre te enviamos la prueba antes.' },
];

export const faqs = [
  { q: '¿Los precios incluyen IGV?', a: 'Sí, todos los precios referenciales publicados incluyen IGV. El precio final varía según el costo del papel: pide tu cotización sin compromiso.' },
  { q: '¿El diseño tiene costo?', a: 'No. El diseño con tu logo y la prueba digital están incluidos en el precio.' },
  { q: '¿Cuál es el pedido mínimo?', a: 'El pedido mínimo es de 1 millar.' },
  { q: '¿Hacen descuentos por volumen?', a: 'Sí, desde 20 millares o en pedidos recurrentes. Escríbenos para una tarifa especial.' },
  { q: '¿El envío tiene costo?', a: 'La entrega en Lima Metropolitana se cotiza según el distrito; a provincia se envía por la agencia que elijas.' },
];
