/**
 * Datos de las 6 páginas de comprobante.
 * Fuente: design-refs/diseno/Comprobante.dc.html (renderVals)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * UNIDAD DE VENTA: millar / millares (pedido mínimo: 1 millar).
 * Presentación: "Talonario de 50 formatos" y "Caja de 10 millares".
 * Los MONTOS se mantienen como precios REFERENCIALES de ejemplo (decisión del
 * dueño, 8 oct 2026); la página lo avisa junto a la tabla ("Precios referenciales
 * de ejemplo...") y coinciden con la tabla de la Home (½ oficio boleta: 1 millar
 * S/ 85 … 10 millares S/ 160).
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Decisiones del dueño: formas de pago, "Original + hasta 5 copias" y colores de
 * papel se mantienen. Sin número de autorización SUNAT propio: el pie de imprenta
 * de las maquetas usa un número de ejemplo (0000000000).
 * ⚠️ CONTENIDO TRIBUTARIO A VALIDAR CON UN CONTADOR antes de publicar:
 *    la regla de los S/ 700, los destinos de cada ejemplar, y las definiciones
 *    de nota de crédito/débito, liquidación de compra, retención y percepción.
 */

export type Slug = 'boletas' | 'facturas' | 'guias' | 'notas' | 'liquidaciones' | 'retencion';

export interface Tema {
  hero: 'circulo' | 'split' | 'banda';
  flip: boolean;
  dark: string;
  accent: string;
  accentText: string;
  hi: string;
  soft: string;
  paper: string;
  ink: string;
}

export const temas: Record<Slug, Tema> = {
  boletas: { hero: 'circulo', flip: false, dark: '#1A1718', accent: '#C62F44', accentText: '#FFFFFF', hi: '#FF8A99', soft: '#F6E1E4', paper: '#F2EDEA', ink: '#A3243A' },
  facturas: { hero: 'split', flip: false, dark: '#241418', accent: '#8E1F3A', accentText: '#FFFFFF', hi: '#F2A7B6', soft: '#F3E3E7', paper: '#F7F0EE', ink: '#8E1F3A' },
  guias: { hero: 'banda', flip: false, dark: '#13262B', accent: '#B8461F', accentText: '#FFFFFF', hi: '#F4A27F', soft: '#F8E6DD', paper: '#F4EFEA', ink: '#9A3A19' },
  notas: { hero: 'circulo', flip: true, dark: '#141D33', accent: '#E0574A', accentText: '#1A1718', hi: '#FF9C8F', soft: '#FBE4E0', paper: '#F5F0EC', ink: '#B23A2E' },
  liquidaciones: { hero: 'split', flip: true, dark: '#1E2A20', accent: '#D49A22', accentText: '#1A1718', hi: '#EFC66A', soft: '#F7EDD4', paper: '#F5F1E8', ink: '#8A5F0E' },
  retencion: { hero: 'banda', flip: false, dark: '#201A22', accent: '#B0245E', accentText: '#FFFFFF', hi: '#F59BC0', soft: '#F8E1EB', paper: '#F4EFF1', ink: '#9A1F52' },
};

export interface Spec {
  medida: string;
  copias: string;
  papel: string;
  pres: string;
  p1: string;
  p10: string;
}

export interface Contenido {
  nombre: string;
  corto: string;
  articulo: string;
  url: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  chips: string[];
  desde: string;
  dato: { n: string; t: string };
  doc: {
    tipo: string;
    sigla: string;
    numero: string;
    continuo: boolean;
    copias: string[];
    campos: string[];
    destino: string;
  };
  queEs: string[];
  emisor: string;
  receptor: string;
  ojo: string;
  campos: string[];
  specs: Spec[];
  faqs: { q: string; a: string }[];
}

/** Campos que llevan todos los comprobantes autorizados. */
const camposBase = [
  'Razón social, RUC y dirección del emisor',
  'Serie y numeración correlativa preimpresa',
  'Pie de imprenta: datos de la imprenta, fecha de impresión y número de autorización SUNAT',
];

export const comprobantes: Record<Slug, Contenido> = {
  boletas: {
    nombre: 'Boletas de venta',
    corto: 'boletas',
    articulo: 'la boleta de venta',
    url: '/boletas-de-venta',
    title: 'Boletas de Venta SUNAT en Lima | Imprenta Autorizada',
    description:
      'Impresión de boletas de venta autorizadas SUNAT en ½ oficio, A4 y formato continuo. Con tu logo y numeración. Entrega en 24 h en Lima. Cotiza gratis.',
    h1: 'Impresión de boletas de venta autorizadas SUNAT en Lima',
    intro:
      'La boleta de venta es el comprobante que entregas a tus clientes consumidores finales. Imprimimos tus boletas en talonario o formato continuo, con tu logo, serie y numeración autorizada, desde 1 millar y con entrega en 24 horas.',
    chips: ['½ oficio · A4 · continuo', 'Original + 1 o 2 copias', 'Talonario o continuo'],
    desde: 'S/ 85',
    dato: {
      n: 'S/ 700',
      t: 'Desde este monto la boleta debe llevar el nombre y DNI del comprador. Nuestras boletas ya traen el espacio.',
    },
    doc: { tipo: 'Boleta de venta', sigla: 'BV', numero: 'B001 - 000321', continuo: false, copias: ['#F7C7CF'], campos: ['Señor(es)', 'DNI', 'Dirección', 'Fecha'], destino: 'Adquirente' },
    queEs: [
      'La boleta de venta se emite en operaciones con consumidores o usuarios finales: bodegas, restaurantes, tiendas, servicios a personas. No otorga derecho a crédito fiscal al comprador.',
      'Cuando el importe supera S/ 700, debe consignarse el nombre y el documento de identidad del comprador. Por eso la diseñamos con espacio para esos datos.',
    ],
    emisor: 'Cualquier negocio con RUC que venda a personas naturales o consumidores finales.',
    receptor: 'El consumidor final. El original es para el cliente y la copia queda para tu control.',
    ojo: 'Si tu cliente necesita sustentar crédito fiscal, no le sirve una boleta: necesita una factura.',
    campos: camposBase.concat([
      'Denominación “Boleta de venta”',
      'Espacio para nombre y DNI del comprador (ventas mayores a S/ 700)',
      'Destino de cada ejemplar: “Adquirente” y “Emisor”',
    ]),
    specs: [
      { medida: '½ oficio', copias: 'Original + 1', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 85', p10: 'S/ 160' },
      { medida: 'A4', copias: 'Original + 1', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 105', p10: 'S/ 230' },
      { medida: 'Continuo 9½" × 5½"', copias: 'Original + 1', papel: 'Autocopiativo', pres: 'Caja de 10 millares', p1: '—', p10: 'S/ 280' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta imprimir 10 millares de boletas de venta?', a: 'Desde S/ 160 en ½ oficio con original y una copia, IGV incluido. El precio cambia según la medida, las copias y los colores.' },
      { q: '¿Cuántas boletas trae cada talonario?', a: 'Normalmente 50 formatos por talonario, numerados de forma correlativa.' },
      { q: '¿Puedo usar boletas físicas si ya emito electrónicas?', a: 'Sí, como respaldo para contingencias cuando no puedes emitir electrónicamente, siguiendo las reglas de SUNAT para esos casos.' },
      { q: '¿Qué medida de boleta me conviene?', a: 'La ½ oficio es la más usada en comercios; la A4 conviene si detallas muchos productos. Para impresora matricial, el formato continuo.' },
    ],
  },

  facturas: {
    nombre: 'Facturas',
    corto: 'facturas',
    articulo: 'la factura',
    url: '/facturas',
    title: 'Impresión de Facturas SUNAT en Lima | 24 h',
    description:
      'Facturas autorizadas SUNAT en talonario y formato continuo, con original y copias en papel autocopiativo. Con tu logo y numeración. Entrega en 24 h en Lima.',
    h1: 'Impresión de facturas autorizadas SUNAT en Lima',
    intro:
      'La factura es el comprobante que necesitan tus clientes con RUC para sustentar gasto y crédito fiscal. Imprimimos facturas en talonario o formato continuo, con original y copias en papel autocopiativo, listas en 24 horas.',
    chips: ['½ oficio · A4 · continuo', 'Original + 2 o 3 copias', 'Para impresora matricial'],
    desde: 'S/ 110',
    dato: { n: '3', t: 'ejemplares en cada formato: el original para tu cliente y las copias para ti y para SUNAT.' },
    doc: { tipo: 'Factura', sigla: 'F', numero: 'F001 - 000123', continuo: false, copias: ['#F7C7CF', '#FBE7A6'], campos: ['Señor(es)', 'R.U.C.', 'Dirección', 'Fecha de emisión'], destino: 'Adquirente' },
    queEs: [
      'La factura se emite cuando vendes a otra empresa o persona con RUC que necesita usar el IGV como crédito fiscal o sustentar el gasto o costo para el Impuesto a la Renta.',
      'La factura física se imprime con un original para el cliente y copias para el emisor y para SUNAT. En formato continuo, funciona directo en tu impresora matricial.',
    ],
    emisor: 'Empresas y personas con negocio que venden a clientes con RUC.',
    receptor: 'Clientes con RUC que necesitan crédito fiscal o sustentar gasto.',
    ojo: 'Los datos del cliente (razón social y RUC) son obligatorios; sin ellos la factura no sustenta crédito fiscal.',
    campos: camposBase.concat([
      'Denominación “Factura”',
      'Espacio para razón social y RUC del cliente',
      'Destino de cada ejemplar: “Adquirente”, “Emisor” y “SUNAT”',
      'Columnas de cantidad, descripción, precio unitario, valor de venta, IGV y total',
    ]),
    specs: [
      { medida: '½ oficio', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 110', p10: 'S/ 240' },
      { medida: 'A4', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 125', p10: 'S/ 275' },
      { medida: 'Continuo 9½" × 11"', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Caja de 10 millares', p1: '—', p10: 'S/ 390' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta imprimir 10 millares de facturas?', a: 'Desde S/ 240 en ½ oficio con original y dos copias, IGV incluido.' },
      { q: '¿Por qué la factura lleva tantas copias?', a: 'Porque cada ejemplar tiene un destino: el cliente, tu archivo y SUNAT. Podemos agregar copias extra para tu control interno.' },
      { q: '¿Puedo tener facturas y boletas con el mismo diseño?', a: 'Sí, y lo recomendamos: misma línea gráfica, cada una con su serie y su denominación.' },
      { q: '¿Funcionan con mi impresora matricial?', a: 'Sí, el formato continuo lleva perforaciones laterales y se ajusta a la medida que use tu sistema.' },
    ],
  },

  guias: {
    nombre: 'Guías de remisión',
    corto: 'guías de remisión',
    articulo: 'la guía de remisión',
    url: '/guias-de-remision',
    title: 'Guías de Remisión SUNAT | Remitente y Transportista',
    description:
      'Impresión de guías de remisión de remitente y transportista autorizadas SUNAT, en talonario y formato continuo. Con todos los campos que exige SUNAT.',
    h1: 'Impresión de guías de remisión SUNAT: remitente y transportista',
    intro:
      'La guía de remisión sustenta el traslado de mercadería. Imprimimos guías de remitente y de transportista con todos los campos que exige SUNAT, en talonario o formato continuo.',
    chips: ['Remitente y transportista', 'Original + 3 copias', 'A4 · ½ oficio · continuo'],
    desde: 'S/ 140',
    dato: { n: '2', t: 'tipos de guía: la del remitente, dueño de la carga, y la del transportista.' },
    doc: { tipo: 'Guía de remisión remitente', sigla: 'GR', numero: '001 - 002317', continuo: true, copias: ['#F7C7CF', '#FBE7A6', '#CFE3F5'], campos: ['Punto de partida', 'Punto de llegada', 'Destinatario', 'Placa / Conductor'], destino: 'Destinatario' },
    queEs: [
      'La guía de remisión acompaña a los bienes durante su traslado y prueba de dónde salen, a dónde van y quién los transporta.',
      'La guía de remitente la emite el propietario de los bienes; la guía de transportista, la empresa que presta el servicio de transporte.',
    ],
    emisor: 'El dueño de la mercadería (remitente) o la empresa de transporte (transportista).',
    receptor: 'El destinatario de los bienes; una copia viaja con la carga.',
    ojo: 'Sin guía, la mercadería puede ser intervenida en un control. Revisa que el motivo del traslado esté bien marcado.',
    campos: camposBase.concat([
      'Punto de partida y punto de llegada',
      'Datos del destinatario',
      'Motivo del traslado',
      'Placa del vehículo y licencia del conductor',
      'Descripción, cantidad y peso de los bienes',
    ]),
    specs: [
      { medida: 'A4', copias: 'Original + 3', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 140', p10: 'S/ 320' },
      { medida: '½ oficio', copias: 'Original + 3', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 125', p10: 'S/ 290' },
      { medida: 'Continuo 9½" × 11"', copias: 'Original + 3', papel: 'Autocopiativo', pres: 'Caja de 10 millares', p1: '—', p10: 'S/ 430' },
    ],
    faqs: [
      { q: '¿Qué diferencia hay entre guía de remitente y de transportista?', a: 'La de remitente la emite el dueño de la mercadería; la de transportista, la empresa que la traslada. Si usas transporte tercerizado, normalmente circulan ambas.' },
      { q: '¿Cuántas copias necesita una guía de remisión?', a: 'Lo más común es original y tres copias. Te asesoramos según tu operación.' },
      { q: '¿Cuánto cuesta imprimir 10 millares de guías?', a: 'Desde S/ 290 en ½ oficio con original y tres copias, IGV incluido.' },
      { q: '¿Pueden imprimir guías con mis rutas o almacenes preimpresos?', a: 'Sí, podemos dejar preimpreso tu punto de partida habitual para ahorrar tiempo de llenado.' },
    ],
  },

  notas: {
    nombre: 'Notas de crédito y débito',
    corto: 'notas de crédito y débito',
    articulo: 'la nota de crédito',
    url: '/notas-de-credito-debito',
    title: 'Notas de Crédito y Débito SUNAT | Imprenta Lima',
    description:
      'Impresión de notas de crédito y débito autorizadas SUNAT con la misma línea gráfica y serie de tus comprobantes. Entrega en 24 h en Lima.',
    h1: 'Impresión de notas de crédito y débito autorizadas SUNAT',
    intro:
      'Las notas de crédito y débito corrigen o modifican una factura o boleta ya emitida. Las imprimimos con la misma línea gráfica y serie de tus comprobantes para que tu contabilidad cuadre.',
    chips: ['Crédito y débito', 'Original + 2 copias', 'Mismo diseño que tus facturas'],
    desde: 'S/ 110',
    dato: { n: '1', t: 'referencia obligatoria: cada nota indica la serie y el número del comprobante que modifica.' },
    doc: { tipo: 'Nota de crédito', sigla: 'NC', numero: 'FC01 - 000027', continuo: false, copias: ['#F7C7CF', '#FBE7A6'], campos: ['Señor(es)', 'R.U.C.', 'Comprobante que modifica', 'Motivo'], destino: 'Adquirente' },
    queEs: [
      'La nota de crédito se usa para anular una operación, aplicar descuentos o bonificaciones, o registrar devoluciones sobre un comprobante ya emitido.',
      'La nota de débito sirve para cobrar montos adicionales posteriores a la venta, como intereses por mora o penalidades.',
    ],
    emisor: 'El mismo negocio que emitió la factura o boleta original.',
    receptor: 'El cliente que recibió el comprobante que se modifica.',
    ojo: 'Cada nota debe indicar la serie y el número del comprobante que modifica.',
    campos: camposBase.concat([
      'Denominación “Nota de crédito” o “Nota de débito”',
      'Serie y número del comprobante que se modifica',
      'Motivo de la emisión',
      'Datos del cliente',
    ]),
    specs: [
      { medida: '½ oficio', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 110', p10: 'S/ 240' },
      { medida: 'A4', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 125', p10: 'S/ 275' },
    ],
    faqs: [
      { q: '¿Cuándo uso una nota de crédito y cuándo una de débito?', a: 'Crédito cuando el monto baja (devolución, descuento, anulación); débito cuando sube (intereses, penalidades, gastos adicionales).' },
      { q: '¿Necesito una autorización aparte para las notas?', a: 'Sí, cada tipo de comprobante y serie se autoriza en SUNAT SOL. Puedes pedirlas en la misma solicitud que tus facturas.' },
      { q: '¿Cuántas notas debo imprimir?', a: 'Suelen usarse mucho menos que las facturas: con 1 millar la mayoría de negocios tiene para años.' },
      { q: '¿Pueden llevar el mismo diseño de mis facturas?', a: 'Sí, mantenemos el logo y la línea gráfica; cambia la denominación y la serie.' },
    ],
  },

  liquidaciones: {
    nombre: 'Liquidaciones de compra',
    corto: 'liquidaciones de compra',
    articulo: 'la liquidación de compra',
    url: '/liquidaciones-de-compra',
    title: 'Liquidaciones de Compra SUNAT | Imprenta Lima',
    description:
      'Impresión de liquidaciones de compra autorizadas SUNAT para compras a productores sin RUC, con los campos del vendedor y de la operación.',
    h1: 'Impresión de liquidaciones de compra autorizadas SUNAT',
    intro:
      'La liquidación de compra la emites tú cuando compras a productores que no tienen RUC. La imprimimos con todos los campos del vendedor y de la operación, en talonario o formato continuo.',
    chips: ['Compras a productores sin RUC', 'Original + 2 copias', 'Talonario o continuo'],
    desde: 'S/ 115',
    dato: { n: '0', t: 'RUC necesita el vendedor: agricultores, ganaderos y pescadores artesanales venden con su DNI.' },
    doc: { tipo: 'Liquidación de compra', sigla: 'LC', numero: 'E001 - 000112', continuo: true, copias: ['#FBE7A6', '#D9EBCF'], campos: ['Vendedor', 'DNI', 'Domicilio', 'Lugar de operación'], destino: 'Comprador' },
    queEs: [
      'La emite el comprador cuando adquiere productos primarios a personas naturales productoras o acopiadoras que no tienen RUC: agricultores, ganaderos, pescadores artesanales, recolectores.',
      'Así el comprador puede sustentar el costo de esa compra aunque el vendedor no emita comprobante.',
    ],
    emisor: 'La empresa que compra (acopiadores, agroindustrias, molinos, comercializadoras).',
    receptor: 'El productor que vende sin RUC.',
    ojo: 'Registra bien el DNI y el domicilio del vendedor: son obligatorios.',
    campos: camposBase.concat([
      'Denominación “Liquidación de compra”',
      'Nombre, DNI y domicilio del vendedor',
      'Lugar donde se realiza la operación',
      'Descripción de los bienes, cantidad y precio',
    ]),
    specs: [
      { medida: '½ oficio', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 115', p10: 'S/ 250' },
      { medida: 'A4', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 130', p10: 'S/ 285' },
      { medida: 'Continuo 9½" × 11"', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Caja de 10 millares', p1: '—', p10: 'S/ 400' },
    ],
    faqs: [
      { q: '¿Quién puede emitir liquidaciones de compra?', a: 'Las empresas que compran productos primarios a personas naturales sin RUC, dentro de los casos que permite SUNAT.' },
      { q: '¿Qué datos del vendedor necesito?', a: 'Nombre completo, DNI y domicilio, además del lugar de la operación.' },
      { q: '¿Las imprimen para provincia?', a: 'Sí, muchos de nuestros clientes son acopiadores de provincia; enviamos por agencia en 3 a 5 días.' },
      { q: '¿Cuánto cuesta imprimir 10 millares de liquidaciones?', a: 'Desde S/ 250 en ½ oficio con original y dos copias, IGV incluido.' },
    ],
  },

  retencion: {
    nombre: 'Retención y percepción',
    corto: 'comprobantes de retención y percepción',
    articulo: 'el comprobante de retención',
    url: '/retencion-percepcion',
    title: 'Comprobantes de Retención y Percepción | Lima',
    description:
      'Impresión de comprobantes de retención y percepción para agentes designados por SUNAT, con tu serie autorizada y el diseño de tus comprobantes.',
    h1: 'Impresión de comprobantes de retención y percepción',
    intro:
      'Si SUNAT te designó como agente de retención o de percepción, necesitas comprobantes que sustenten el IGV retenido o percibido. Los imprimimos con tu serie autorizada y el diseño de tus demás comprobantes.',
    chips: ['Agentes designados por SUNAT', 'Original + 2 copias', '½ oficio · A4 · continuo'],
    desde: 'S/ 115',
    dato: { n: 'Solo', t: 'los agentes designados por SUNAT pueden emitirlos. Verifica tu condición antes de pedirlos.' },
    doc: { tipo: 'Comprobante de retención', sigla: 'CR', numero: 'R001 - 000089', continuo: false, copias: ['#F8D0E0', '#FBE7A6'], campos: ['Proveedor', 'R.U.C.', 'Fecha de emisión', 'Comprobantes'], destino: 'Proveedor' },
    queEs: [
      'El comprobante de retención lo entrega el agente de retención a su proveedor por el IGV que le retuvo al pagarle.',
      'El comprobante de percepción lo entrega el agente de percepción a su cliente por el IGV que le cobró por adelantado.',
    ],
    emisor: 'Empresas designadas por SUNAT como agentes de retención o de percepción.',
    receptor: 'El proveedor (retención) o el cliente (percepción).',
    ojo: 'Solo puedes emitirlos si SUNAT te designó como agente. Verifica tu condición antes de pedirlos.',
    campos: camposBase.concat([
      'Denominación “Comprobante de retención” o “de percepción”',
      'Datos del proveedor o cliente',
      'Comprobantes que originan la retención o percepción',
      'Importe retenido o percibido',
    ]),
    specs: [
      { medida: '½ oficio', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 115', p10: 'S/ 250' },
      { medida: 'A4', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Talonario de 50 formatos', p1: 'S/ 130', p10: 'S/ 285' },
      { medida: 'Continuo 9½" × 11"', copias: 'Original + 2', papel: 'Autocopiativo', pres: 'Caja de 10 millares', p1: '—', p10: 'S/ 400' },
    ],
    faqs: [
      { q: '¿Qué diferencia hay entre retención y percepción?', a: 'En la retención, el comprador retiene parte del IGV a su proveedor; en la percepción, el vendedor cobra por adelantado parte del IGV a su cliente.' },
      { q: '¿Cómo sé si soy agente de retención o percepción?', a: 'SUNAT publica la relación de agentes designados. Si tu empresa figura, debes emitir estos comprobantes.' },
      { q: '¿Se autorizan igual que las facturas?', a: 'Sí, también se solicitan en SUNAT SOL indicando la imprenta.' },
      { q: '¿Cuánto cuesta imprimir 10 millares de comprobantes de retención?', a: 'Desde S/ 250 en ½ oficio con original y dos copias, IGV incluido.' },
    ],
  },
};

/** Pasos compartidos por las 6 páginas. */
export const pasos = [
  { n: '01', t: 'Nos escribes', d: 'Tu RUC, la medida, el número de copias y la cantidad.' },
  { n: '02', t: 'Apruebas la prueba', d: 'Revisas el diseño con tu logo, serie y numeración.' },
  { n: '03', t: 'Autorizas en SUNAT SOL', d: 'Nos eliges como imprenta y SUNAT genera el número de autorización.' },
  { n: '04', t: 'Recibes en 24–48 h', d: 'En Lima, o por agencia a provincia en 3 a 5 días.' },
];

export const slugs: Slug[] = ['boletas', 'facturas', 'guias', 'notas', 'liquidaciones', 'retencion'];

/** Los otros 5 comprobantes, para el bloque de enlazado interno. */
export function otrosComprobantes(slug: Slug) {
  return slugs
    .filter((k) => k !== slug)
    .map((k) => ({ nombre: comprobantes[k].nombre, url: comprobantes[k].url, accent: temas[k].accent }));
}
