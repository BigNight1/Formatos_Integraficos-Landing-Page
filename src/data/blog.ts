/**
 * Datos de /blog
 * Fuente: design-refs/diseno/Blog.dc.html
 *
 * OJO — aquí NO hay canibalización: la tarjeta destacada enlaza a la página pilar
 * /autorizado-sunat (no a un artículo del blog). Es enlazado interno correcto.
 * Lo que sí se quitó fue la tarjeta equivalente de la Home, que apuntaba a
 * /blog/autorizar-impresion-comprobantes-sunat y competía con esa página.
 *
 * ⚠️ De los 6 posts, SOLO '/blog/factura-o-boleta' tiene artículo diseñado. Los
 * otros 5 se muestran sin enlace ("En preparación") para no generar 404.
 *
 * ⚠️ FICTICIO: "revisadas por un contador". El brief pide el nombre y número de
 * colegiatura del contador real, o quitar la frase.
 * ⚠️ Fechas literales ("7 de octubre de 2026"): hay que mantenerlas a mano.
 *
 * ⚠️ Las categorías (/blog/sunat, /blog/comprobantes, /blog/papel-y-medidas) NO
 * están diseñadas: se muestran como etiquetas sin enlace para no generar 404.
 * Decidir si se crean como páginas de categoría.
 */

export interface Post {
  tag: string;
  t: string;
  d: string;
  min: number;
  url: string;
  /** false = todavía no existe el artículo */
  listo: boolean;
}

export const destacada = {
  tag: 'Destacada · SUNAT',
  t: 'Cómo autorizar la impresión de comprobantes de pago en SUNAT, paso a paso',
  d: 'Requisitos, los 5 pasos en SUNAT SOL y los errores que frenan la autorización.',
  min: 6,
  fecha: 'Actualizada el 7 de octubre de 2026',
  url: '/autorizado-sunat',
};

export const categorias = [
  { label: 'Todas', url: '/blog', activa: true },
  { label: 'SUNAT' },
  { label: 'Comprobantes' },
  { label: 'Papel y medidas' },
];

export const posts: Post[] = [
  {
    tag: 'Comprobantes',
    t: 'Factura o boleta: cuál emitir y cuándo',
    d: 'La diferencia en una tabla, con ejemplos de bodegas, servicios y ventas a empresas.',
    min: 5,
    url: '/blog/factura-o-boleta',
    listo: true,
  },
  {
    tag: 'Papel y medidas',
    t: '½ oficio o A4: qué medida de boleta elegir',
    d: 'Cuánto entra en cada medida y cuál conviene según cuántos productos vendes.',
    min: 3,
    url: '/blog/medidas-de-boleta',
    listo: true,
  },
  {
    tag: 'Papel y medidas',
    t: 'Papel autocopiativo vs bond: diferencias y usos',
    d: 'Qué es el papel químico, cuántas copias soporta y cuándo basta con bond.',
    min: 4,
    url: '/blog/autocopiativo-vs-bond',
    listo: true,
  },
  {
    tag: 'Comprobantes',
    t: 'Cómo llenar una guía de remisión sin errores',
    d: 'Campo por campo, con los errores que más se observan en controles.',
    min: 6,
    url: '/blog/como-llenar-guia-de-remision',
    listo: true,
  },
  {
    tag: 'SUNAT',
    t: 'Comprobante físico o electrónico: cuándo te sigue sirviendo el físico',
    d: 'Contingencias, negocios no obligados y cómo convivir con ambos.',
    min: 5,
    url: '/blog/comprobante-fisico-o-electronico',
    listo: true,
  },
  {
    tag: 'SUNAT',
    t: 'Qué es el pie de imprenta y por qué tu comprobante lo necesita',
    d: 'Qué datos lleva, dónde va y qué pasa si falta.',
    min: 3,
    url: '/blog/pie-de-imprenta',
    listo: true,
  },
];
