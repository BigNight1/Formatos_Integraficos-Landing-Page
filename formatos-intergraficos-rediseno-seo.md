# Formatos Intergráficos — Rediseño de la home + SEO v2

Fecha: 2026-10-07
Diseño (canvas privado): https://claude.ai/artifact/MAbvgDcuzcqnnoHa7SqSrE → artboard **"Home completa · estilo B"**

> ⚠️ **Antes de publicar en el sitio real**: todo lo marcado como 🟥 FICTICIO debe reemplazarse por datos reales. Publicar testimonios, calificaciones o números de autorización inventados es publicidad engañosa (INDECOPI) y Google penaliza las reseñas falsas.

---

## 1. Qué se hizo

### Diseño
- Se eligió la **propuesta B · Círculo de tinta** (fondo carbón `#1A1718`, rojo de marca `#C62F44`, papel `#F2EDEA`, tipografías Big Shoulders Display + DM Sans).
- Se diseñó la **home completa** con 13 secciones, alternando fondos oscuro / papel / rojo:

| # | Sección | Objetivo SEO / conversión |
|---|---|---|
| 1 | Hero con H1 con keyword + frase visual "Imprimimos la confianza de tu negocio" | Keyword principal + CTA WhatsApp |
| 2 | Barra de confianza (años, clientes, 24 h, SUNAT, Google) | E-E-A-T |
| 3 | 8 comprobantes con enlace a su página | Semántica + enlaces internos |
| 4 | Tabla de precios referenciales | Information Gain (ningún competidor salvo Dunkan lo hace) |
| 5 | Cómo trabajamos (4 pasos) | Information Gain + snippet de pasos |
| 6 | Requisitos SUNAT (guía corta) | Responde la búsqueda transaccional más fuerte |
| 7 | Especificaciones técnicas | Contenido que ningún competidor publica |
| 8 | Trabajos realizados | E-E-A-T |
| 9 | Testimonios | E-E-A-T + conversión |
| 10 | Cobertura + dirección + mapa | SEO local |
| 11 | FAQ (10 preguntas) | Rich results / AI Overviews |
| 12 | Guías del blog (4) | Cluster temático |
| 13 | Formulario de cotización + footer con NAP unificado | Conversión + SEO local |

### SEO aplicado en el diseño
- **Title propuesto**: `Imprenta Autorizada SUNAT en Lima | Boletas y Facturas` (54 caracteres).
- **Meta description propuesta**: `Boletas, facturas y guías de remisión en formato continuo, con tu logo y numeración SUNAT. Entrega en 24 h en Lima. Cotiza gratis.` (~133 caracteres).
- **H1**: `Imprenta autorizada SUNAT en Lima: boletas, facturas y guías en formato continuo`.
- Jerarquía H1 → H2 por sección → H3 en tarjetas, pasos y preguntas.
- Entidades nuevas en el texto: notas de crédito y débito, liquidación de compra, retención y percepción, pie de imprenta, número de autorización, serie correlativa, autocopiativo/químico, impresora matricial, ½ oficio / A5 / A4 / 9½" × 11", SUNAT SOL, domicilio habido, Villa María del Triunfo.
- Nombre de marca unificado: **Formatos Intergráficos** (con tilde).
- Alt text descriptivo en todas las imágenes.

---

## 2. Datos FICTICIOS que hay que reemplazar

| Dónde | Dato ficticio | Qué poner |
|---|---|---|
| Testimonios (sección 9) | ✅ Rosa Mendoza, Jorge Quispe, Lucía Huamán y sus textos | Decisión del dueño (8 oct 2026): se mantienen tal cual |
| Barra de confianza | ✅ "4.9 ★ en Google (120 reseñas)" | Quitada. Ahora: "Perú · envíos a todo el país". No queda ninguna calificación con estrellas en el sitio (tampoco AggregateRating en el JSON-LD) |
| Footer | ✅ "Autorización SUNAT N.º 0458-2026" | Quitado: una imprenta no tiene un único número (SUNAT emite uno por cada pedido de impresión del cliente). Ahora: "Imprenta inscrita en SUNAT" + RUC, con enlace a la consulta de RUC de SUNAT. Igual en `/autorizado-sunat`; en las maquetas de comprobante el pie usa el número de ejemplo `0000000000` |
| Precios (sección 4) | ✅ Todos los montos (S/ 85, S/ 125…) | Se mantienen como **referenciales de ejemplo**; aviso visible junto a cada tabla: "Precios referenciales de ejemplo. El precio final varía según el costo del papel: pide tu cotización sin compromiso." |
| Precios | 🟥 "Descuentos por volumen desde 20 millares" | Confirmar el umbral real (la unidad ya está en millares) |
| Especificaciones (sección 7) | ✅ Colores de papel, "hasta 5 copias", offset 1–4 colores | Decisión del dueño: se mantienen. Acabados: sin confirmar |
| FAQ | ✅ Cantidad mínima (100 / 500 juegos) | Ahora: "El pedido mínimo es de 1 millar" (FAQ de Home y /precios; también `formatos-continuos`, `documentos-administrativos`, `recibos-por-honorarios`) |
| FAQ | ✅ Formas de pago (Yape, Plin, 50% adelanto) | Decisión del dueño: se mantienen |
| FAQ | ✅ Modelos de impresora (Epson LX, FX) | Decisión del dueño: se mantienen |
| Cobertura | ✅ Lista de distritos | Quitada. Ahora: "Hacemos envíos a todo el Perú" + "Entrega en 24 h en Lima y de 3 a 5 días a provincias" |
| Proceso | 🟥 "prueba de diseño el mismo día" | Tiempo real de respuesta |
| Trabajos | ✅ Placeholder "talonario de guías de remisión" | Ya es una foto real de la galería (`Sarepta-GuiaRemisionRemitente-FC-crop.webp`) |
| Mapa | ✅ Placeholder | Ya es el embed de Google Maps de la ficha |
| Unidad de venta | ✅ "juegos" | Se vende por **millar**: ninguna aparición de "juego/juegos" como unidad en `src/` |

### Datos REALES ya usados (del sitio actual)
RUC 20503580030 · +51 910 500 706 · Pasaje 8 de Octubre 252, Parque Interno Hogar Policial, VMT · Lun–Sáb 8:00–20:00 · +20 años · 500+ clientes · entrega 24 h Lima / 3–5 días provincia.

### Requisitos SUNAT (verificados en gob.pe)
RUC activo y habido, registros de ventas y compras al día (12 meses), declaraciones mensuales al día (6 meses), solicitud por SUNAT SOL eligiendo la imprenta. Fuente: https://www.gob.pe/390-obtener-autorizacion-para-imprimir-comprobantes-de-pago — revisar que siga vigente al publicar.

---

## 3. Fotos

Las fotos actuales del sitio parecen de banco de imágenes o generadas por IA, y `Trabajos_realizados.webp` muestra **logos de terceros (Sedapal, etc.)**: riesgo legal y de confianza.

Necesarias (celular con buena luz alcanza):
- [ ] Taller / máquina real (reemplaza `hombre_trabajando_formatos.webp` en el hero)
- [ ] Trabajos terminados de clientes **que den permiso**
- [ ] Talonario de guías de remisión
- [ ] Fachada o equipo (para /nosotros)

Optimizar todas a **< 200 KB** en WebP, con `width`/`height` declarados. Hoy `Trabajos_realizados.webp` pesa ~1 MB.

---

## 4. Cambios técnicos pendientes (en el código Astro)

- [ ] Aplicar el title, la meta description y el H1 nuevos.
- [ ] **Schema FAQPage**: hoy declara 2 preguntas y la página muestra 5 → declarar las 10.
- [ ] Ampliar `LocalBusiness`: `areaServed`, `sameAs` (Google Business, Facebook), `priceRange`, `hasOfferCatalog` con un `Service` por comprobante.
- [ ] `BreadcrumbList` en las páginas internas.
- [ ] `/nosotros`: el H1 llega como "Detrás de cada formato, años de experiencia" (el número lo pone JavaScript) → poner el número en el HTML.
- [ ] `/galeria`: no tiene H1 → agregar uno.
- [ ] Footer: "Proformas" enlaza a `/servicios/documentos-administrativos` → alinear el texto con la URL.
- [ ] Videos: agregar `poster` y `preload="none"`.
- [ ] Precargar la imagen del hero (LCP).
- [ ] Search Console + GA4 con un evento por clic en WhatsApp y por envío del formulario.
- [ ] Mismo nombre, dirección y teléfono en el sitio, Google Business y redes.

---

## 5. Páginas internas (fase 2) — DISEÑADAS

Todas están en el canvas, con el mismo **Header** y **Footer** (componentes reutilizables). Las 6 páginas de comprobante salen de **una sola plantilla** (`Comprobante`), cada una con su propio contenido.

### Estructura de cada página de comprobante
Breadcrumb → Hero (H1 + definición corta + "desde S/") → ¿Qué es y cuándo se usa? (quién la emite / quién la recibe) → Datos que lleva impresos → Tabla de medidas, copias y precios → Cómo pedirla (4 pasos) → FAQ propia (4) → Otros comprobantes (enlaces internos) → Footer.

### Identidad visual por comprobante
Cada página tiene su portada, su paleta (familia del rojo de marca) y una maqueta ilustrada del documento (componente `Documento`, con copias de colores y perforaciones si es continuo).

| Página | Portada | Fondo | Acento | Dato destacado |
|---|---|---|---|---|
| Boletas | Círculo (derecha) | Carbón `#1A1718` | Rojo `#C62F44` | S/ 700 |
| Facturas | Panel dividido (izquierda) | Vino oscuro `#241418` | Vino `#8E1F3A` | 3 ejemplares |
| Guías de remisión | Banda continua | Petróleo `#13262B` | Terracota `#B8461F` | 2 tipos |
| Notas de crédito/débito | Círculo (izquierda) | Marino `#141D33` | Coral `#E0574A` | 1 referencia |
| Liquidaciones de compra | Panel dividido (derecha) | Verde bosque `#1E2A20` | Ocre `#D49A22` | 0 RUC |
| Retención y percepción | Banda continua | Grafito `#201A22` | Frambuesa `#B0245E` | Solo agentes |

En Astro: un `theme` por página (variables CSS) + 3 variantes del componente `Hero`.

### SEO por página (para implementar en Astro)

| URL | Title (≤60) | H1 | Schema |
|---|---|---|---|
| `/boletas-de-venta` | Boletas de Venta SUNAT en Lima \| Desde S/ 85 | Impresión de boletas de venta autorizadas SUNAT en Lima | Service + Offer + FAQPage + BreadcrumbList |
| `/facturas` | Impresión de Facturas SUNAT en Lima \| 24 h | Impresión de facturas autorizadas SUNAT en Lima | Service + Offer + FAQPage + BreadcrumbList |
| `/guias-de-remision` | Guías de Remisión SUNAT \| Remitente y Transportista | Impresión de guías de remisión SUNAT: remitente y transportista | Service + Offer + FAQPage + BreadcrumbList |
| `/notas-de-credito-debito` | Notas de Crédito y Débito SUNAT \| Imprenta Lima | Impresión de notas de crédito y débito autorizadas SUNAT | Service + FAQPage + BreadcrumbList |
| `/liquidaciones-de-compra` | Liquidaciones de Compra SUNAT \| Imprenta Lima | Impresión de liquidaciones de compra autorizadas SUNAT | Service + FAQPage + BreadcrumbList |
| `/retencion-percepcion` | Comprobantes de Retención y Percepción \| Lima | Impresión de comprobantes de retención y percepción | Service + FAQPage + BreadcrumbList |
| `/precios` | Precios de Boletas y Facturas en Lima (2026) | Precios de impresión de boletas, facturas y guías en Lima | OfferCatalog + FAQPage + BreadcrumbList |
| `/autorizado-sunat` | Cómo Autorizar Comprobantes en SUNAT (Guía 2026) | Cómo autorizar la impresión de comprobantes de pago en SUNAT | Article + HowTo (5 pasos) + FAQPage + BreadcrumbList |
| `/blog` | Guías de Comprobantes de Pago y SUNAT | Guías sobre comprobantes de pago y SUNAT | Blog + BreadcrumbList |
| `/blog/factura-o-boleta` | Factura o Boleta: Cuál Emitir y Cuándo | Factura o boleta: cuál emitir y cuándo | Article (author, dateModified) + BreadcrumbList |
| `/nosotros` | Nosotros \| Imprenta en VMT con +20 Años | Más de 20 años imprimiendo comprobantes en Lima | AboutPage + Organization + Person (gerente) |
| `/galeria` | Galería de Comprobantes Impresos \| Formatos Intergráficos | Galería de trabajos: comprobantes y formatos impresos | ImageGallery + BreadcrumbList |

### Mejoras SEO que aplican a todas
- **Breadcrumb visible** + `BreadcrumbList` → mejor rastreo y migas en Google.
- **Enlazado interno contextual**: cada comprobante enlaza a los otros 5, a `/precios` y a la guía SUNAT. El footer enlaza a todo.
- **Respuesta corta arriba** (definición de 1–2 frases) → candidata a featured snippet y AI Overviews.
- **Tablas** de medidas/precios y **pasos numerados** → formatos que Google extrae.
- **Autor + revisor + fecha de actualización** en la guía y los artículos → E-E-A-T.
- **FAQ propia por página**, distinta en cada una (no duplicada).

### Ideas tomadas de la competencia (añadidas)
- Enlace "verificar en SUNAT" junto al número de autorización (Dunkan).
- **Pago contra entrega** para clientes recurrentes (Dunkan).
- **Garantía de reimpresión** explícita (Print Express).
- **Carta del gerente** con foto en /nosotros (Print Express).
- **Letras, recibos por honorarios y documentos aduaneros** en el footer y en /precios (Impresos Continuos).

### Pendiente de diseñar
- [ ] Las 5 guías restantes del blog (se reutiliza la plantilla del artículo).
- [ ] Rediseño de `/servicios/formatos-continuos`, `/servicios/vouchers-pos` y `/servicios/documentos-administrativos` (con secciones `#letras`, `#honorarios`, `#aduaneros`).
- [ ] Página `/contacto`.

---

## 5b. Datos FICTICIOS nuevos (páginas internas)

| Dónde | Dato ficticio | Qué poner |
|---|---|---|
| Todas las páginas de comprobante + /precios | ✅ Todos los precios por medida y cantidad | Se mantienen como referenciales de ejemplo, con el aviso junto a las tablas (Home, `/precios` y las 6 páginas de comprobante) |
| Comprobantes | ✅ "Talonario de 50 juegos", "caja de 1000 juegos" | Ahora: "Talonario de 50 formatos" y "Caja de 10 millares" |
| /precios | ✅ Precios de letras, recibos por honorarios, proformas y rollos POS | Se mantienen como referenciales de ejemplo |
| /precios, Footer | ✅ "Pago contra entrega para clientes recurrentes", "50% de adelanto" | Decisión del dueño: se mantienen |
| Footer, /precios, /nosotros | 🟥 "Garantía de reimpresión sin costo" | Solo si realmente la ofrecen |
| /autorizado-sunat, artículo, /nosotros | 🟥 **Carlos Ramírez**, gerente | Ya se usa el nombre real del fundador (Zenón Walter Armas Quispialaya); falta confirmar el cargo exacto |
| /autorizado-sunat, artículo | ✅ "Revisado por un contador colegiado" | Decisión del dueño: se mantiene la mención "revisadas por un contador" (índice del blog). Falta, si se quiere, nombre y colegiatura del contador |
| /nosotros | ✅ Fundación 2004 | Corregida: **11/01/2002** (cifra "año de fundación", primer hito, carta y `foundingDate: '2002-01-11'`) |
| /nosotros | ✅ "3 M juegos al año" | Quitada; sustituida por "Perú · envíos a todo el país". "12 personas" se mantiene |
| /nosotros | 🟥 Hitos 2008 / 2014 / 2021 | Confirmar con el dueño (se mantienen por ahora) |
| /nosotros | ✅ Texto de la carta del gerente | Decisión del dueño: se mantiene |
| /galeria | 🟥 6 placeholders de trabajos | Fotos reales con permiso de cada cliente |
| /autorizado-sunat | ✅ 5 placeholders de capturas de SUNAT SOL | Ya son capturas reales (`public/sunat-sol/`) con el nombre del contribuyente oculto |

## 5c. Contenido técnico/legal a VALIDAR con un contador

Redacté el contenido tributario con información general. **Antes de publicar, que un contador lo revise**, en especial:

- Regla de los **S/ 700** para identificar al comprador en boletas.
- Destino de ejemplares (adquirente / emisor / SUNAT) en facturas y boletas.
- Nombre del formulario (**Formulario Virtual N.º 816**) y ruta del menú en SUNAT SOL (tomado del title actual del sitio).
- Definiciones de nota de crédito/débito, liquidación de compra, retención y percepción.
- Campos obligatorios de la guía de remisión (remitente vs transportista).
- Uso de comprobantes físicos como contingencia frente a la emisión electrónica.
- ✅ Enlace "verificar en SUNAT": ahora apunta a la consulta de RUC de SUNAT (`e-consultaruc.sunat.gob.pe`), en el Footer y en `/autorizado-sunat`.

---

## 6. Competidores de referencia (Google, "imprenta autorizada SUNAT Lima")

| Competidor | Qué tomamos como idea |
|---|---|
| impresoscontinuos.pe | Lista completa de tipos de comprobante, proceso en 3 pasos |
| dunkan.pe | Tabla de precios por formato y volumen, resolución SUNAT enlazada |
| printexpress.pe | Página por producto, FAQ de pagos y garantía, carta del gerente |

Ninguno publica especificaciones completas, testimonios ni guías → esa es nuestra ventaja.
