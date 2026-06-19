# Estación 68 — Tienda de Bebidas

Catálogo digital interactivo (single-page, sin dependencias) para **Estación 68**, tienda de bebidas en La Plata.

## Features
- Catálogo completo por categorías (combos, gin, vinos, whisky, vodka, etc.) con buscador.
- Sección de **Ofertas** con descuentos.
- **Carrito** con cantidades, persistencia local y compartir pedido por link.
- **Checkout** con envío/retiro, zona, costo de envío, pedido mínimo y envío gratis.
- Pedido final directo por **WhatsApp**.
- **+18** al ingresar, estado Abierto/Cerrado en vivo, horarios, medios de pago y mapa.
- Diseño oscuro/premium, responsive, con animaciones e ilustraciones de producto.

## Estructura
- `index.html` — la app completa (HTML + CSS + JS en un archivo).
- `og-image.png` — imagen de preview para redes/WhatsApp.
- `vercel.json` — config de hosting estático.

## Deploy
Sitio estático. Subir a Vercel (`npx vercel --prod`), Netlify o GitHub Pages.

## Configuración rápida (en `index.html`)
Objeto `SHOP`: WhatsApp, horarios, zonas y costos de envío, mínimo y umbral de envío gratis.
Categoría `Ofertas`: productos en promo y descuentos.

> Mockup de demostración. Precios y datos sujetos a confirmación del comercio.
