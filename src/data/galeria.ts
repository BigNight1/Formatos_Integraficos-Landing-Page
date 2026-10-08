/**
 * Galería de trabajos reales.
 *
 * ✅ TÍTULOS VERIFICADOS: se leyeron las 15 fotos una por una (recortando la
 *    cabecera de cada documento para leerla con nitidez) y los títulos, los `alt`
 *    y las categorías describen **lo que realmente dice cada papel**.
 *    Antes eran metadata heredada de `gallery-data.json`, sin comprobar: 9 de 15
 *    acertaban, 5 eran parciales y 1 estaba equivocada.
 *
 * ⚠️ PERMISO DE LOS CLIENTES — LEER ANTES DE PUBLICAR
 * Las 15 fotos muestran comprobantes REALES: se leen razones sociales, RUC,
 * direcciones, teléfonos y correos de unas 20 organizaciones. Cuatro son
 * entidades del Estado: Sedapal, ENACO S.A., PROVÍAS Descentralizado y la
 * Universidad Nacional San Luis Gonzaga de Ica.
 * Publicar la marca o los datos de un cliente sin su consentimiento es un riesgo
 * legal en Perú (INDECOPI). Además, la foto de la guía de Importadora Ferretera
 * lleva los **logos de 3M y ASA con la leyenda "Distribuidor Autorizado"**: eso es
 * uso de marca de terceros, y ni el propio cliente puede autorizarlo.
 *   · Nota: YA están publicadas en el sitio actual, así que el rediseño no
 *     aumenta la exposición; pero el permiso hay que conseguirlo igual.
 *   · Mientras no haya permiso: anonimizar (tapar logo y RUC) o no usar las
 *     fotos con datos identificables.
 *
 * ⚠️ PESO: las 15 fotos venían con 8,31 MB (~550 KB cada una). Se optimizaron a
 *    0,79 MB en total, todas por debajo de 200 KB. Si se reemplazan, mantenerlas
 *    ligeras.
 *
 * FILTROS: el canvas proponía "Vouchers POS", que no tiene ninguna foto. Se
 * ajustaron al contenido real y, tras verificar las fotos, quedan en 3 para que
 * ninguno quede vacío ni con un solo trabajo.
 */

export interface Trabajo {
  /** archivo en /public/images/gallery */
  img: string;
  /** título verificado contra el documento */
  titulo: string;
  /** línea técnica corta */
  detalle: string;
  alt: string;
  /** id de filtro */
  cat: 'comprobantes' | 'guias' | 'internos';
  /**
   * 'bottom' en las fotos que traen DOS documentos: el recorte del canvas es 3/4
   * y se ancla arriba, así que mostraba el documento de arriba mientras el título
   * describía el de abajo. Anclando abajo coinciden… y de paso quedan fuera de
   * cuadro los comprobantes de entidades públicas.
   */
  pos?: 'bottom';
  /** enlace interno a la página del formato, si existe */
  url?: string;
}

export const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'comprobantes', label: 'Comprobantes de pago' },
  { id: 'guias', label: 'Guías de remisión' },
  { id: 'internos', label: 'Formatos internos y comerciales' },
];

export const trabajos: Trabajo[] = [
  // ---------- Comprobantes de pago ----------
  {
    img: '/images/gallery/Horus-Factura-FC.webp',
    titulo: 'Factura en formato continuo',
    detalle: 'Continuo · numeración correlativa',
    alt: 'Factura comercial impresa en formato continuo autocopiativo',
    cat: 'comprobantes',
  },
  {
    img: '/images/gallery/NotariaBanda-boletadeventaelectronica-FC.webp',
    titulo: 'Boleta de venta electrónica',
    detalle: 'Representación impresa en continuo',
    alt: 'Representación impresa de boleta de venta electrónica en formato continuo',
    cat: 'comprobantes',
  },
  {
    img: '/images/gallery/ReciclemosS.A-LiquidacionCompras-FC.webp',
    titulo: 'Liquidación de compras',
    detalle: 'Autocopiativo · con V.º B.º de gerencia',
    alt: 'Liquidación de compras en formato continuo con visto bueno de gerencia',
    cat: 'comprobantes',
    pos: 'bottom',
  },
  {
    img: '/images/gallery/OtrosTrabajosde-FC.webp',
    titulo: 'Boletas, liquidación y proforma',
    detalle: 'Muestrario de documentos comerciales',
    alt: 'Muestrario de boletas de venta, liquidación de compras y proforma en continuo',
    cat: 'comprobantes',
  },
  {
    img: '/images/gallery/EcoReciclaS.A.C-GuiaRemisionRemitente-FC.webp',
    titulo: 'Facturas y guía de remisión',
    detalle: 'Continuo · agente de carga internacional',
    alt: 'Facturas y guía de remisión remitente en formato continuo para agente de carga',
    cat: 'comprobantes',
    pos: 'bottom',
  },

  // ---------- Guías de remisión ----------
  {
    img: '/images/gallery/ImportadoraFerretera-GuiadeRemisionRemitente-FC.webp',
    titulo: 'Guía de remisión remitente',
    detalle: 'Continuo · distribuidora ferretera',
    alt: 'Guía de remisión remitente en formato continuo con casilleros SUNAT',
    cat: 'guias',
  },
  {
    img: '/images/gallery/ReciclajeDelPeru-GuiaremisionRemitente-FC.webp',
    titulo: 'Guía de remisión con encabezado azul',
    detalle: 'Continuo · alta transferencia',
    alt: 'Formato continuo de guía de remisión remitente con encabezado azul',
    cat: 'guias',
  },
  {
    img: '/images/gallery/Sarepta-GuiaRemisionRemitente-FC.webp',
    titulo: 'Guía de remisión remitente',
    detalle: 'Continuo · corporación farmacéutica',
    alt: 'Guía de remisión remitente continua para distribución farmacéutica',
    cat: 'guias',
  },
  {
    img: '/images/gallery/Soler-Palau-GuiaRemision-FC.webp',
    titulo: 'Guía de remisión con membrete',
    detalle: 'Offset alta resolución · matricial',
    alt: 'Guía de remisión continua de remitente con membrete impreso en offset',
    cat: 'guias',
  },

  // ---------- Formatos internos y comerciales ----------
  {
    img: '/images/gallery/EmpresaMineraFidamiS.A-Ticketdebalanza-FC.webp',
    titulo: 'Ticket de balanza',
    detalle: 'Control de pesaje · uso minero',
    alt: 'Ticket de balanza continuo para el control de pesaje de camiones',
    cat: 'internos',
  },
  {
    img: '/images/gallery/JM-Grupo-NotaVenta-FC.webp',
    titulo: 'Nota de venta',
    detalle: 'Continuo · numeración correlativa',
    alt: 'Nota de venta corporativa en papel químico continuo',
    cat: 'internos',
  },
  {
    img: '/images/gallery/cocinaSurge-notadepedido-FC.webp',
    titulo: 'Nota de pedido',
    detalle: 'Continuo · numeración correlativa',
    alt: 'Nota de pedido en formato continuo con numeración correlativa',
    cat: 'internos',
  },
  {
    img: '/images/gallery/Sedapal-BoletaPago-FC.webp',
    titulo: 'Boleta de pago de haberes',
    detalle: 'Continuo · uso institucional',
    alt: 'Boleta de pago de haberes en formato continuo para personal',
    cat: 'internos',
  },
  {
    img: '/images/gallery/VariosTrabajosS.Adiferentes-FC.webp',
    titulo: 'Órdenes de despacho y constancias',
    detalle: 'Muestrario de formatos continuos',
    alt: 'Muestrario de órdenes de despacho, guías de remisión y constancias de pago',
    cat: 'internos',
  },
  {
    img: '/images/gallery/Otros2-FC.webp',
    titulo: 'Letra de cambio',
    detalle: 'Título valor · con textos legales',
    alt: 'Letra de cambio impresa en formato continuo con sus textos legales',
    cat: 'internos',
    url: '/servicios/letras-de-cambio',
  },
];

/** Cuántos trabajos hay por categoría. */
export const conteo = filtros.reduce<Record<string, number>>((acc, f) => {
  acc[f.id] = f.id === 'todos' ? trabajos.length : trabajos.filter((t) => t.cat === f.id).length;
  return acc;
}, {});
