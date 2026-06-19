# Subir Estación 68 a Vercel

Tenés esta carpeta lista (`index.html`, `og-image.png`, `vercel.json`).
Elegí UNA de las opciones:

## Opción A — Vercel CLI (la más rápida, 2 minutos)
1. Instalá Node.js si no lo tenés: https://nodejs.org
2. Abrí una terminal dentro de esta carpeta (`estacion68-web`).
3. Ejecutá:
   ```
   npx vercel
   ```
4. Te pide loguearte (se abre el navegador, entrás con Google/GitHub/email).
5. Aceptá las opciones por defecto (Enter en todo).
6. Para publicar la versión final de producción:
   ```
   npx vercel --prod
   ```
7. Te da la URL pública (ej: https://estacion68.vercel.app). ¡Listo!

## Opción B — Arrastrar a Vercel (sin instalar nada)
1. Entrá a https://vercel.com y creá una cuenta (gratis).
2. New Project → importá desde un repositorio de GitHub,
   o usá "Deploy" subiendo esta carpeta.
   (Si no te aparece la opción de subir carpeta, usá la Opción A.)

## Después de publicar (importante)
- Cuando tengas tu URL final, editá `index.html` y reemplazá en las
  etiquetas Open Graph:
    <meta property="og:image" content="og-image.png">
  por la URL completa, ej:
    <meta property="og:image" content="https://TU-DOMINIO.vercel.app/og-image.png">
  (así el preview se ve bien al compartir por WhatsApp).
- Para dominio propio (ej: estacion68.com.ar): Vercel → Project → Settings → Domains.

## Para actualizar el sitio más adelante
- Cambiás `index.html` y volvés a correr `npx vercel --prod`
  (o pusheás a GitHub si lo conectaste).

## Datos a revisar antes de publicar (en index.html)
- Horarios, zonas de envío y costos (objeto SHOP).
- Mínimo de envío ($8.000) y envío gratis ($25.000).
- Las 6 ofertas y sus descuentos.
- WhatsApp: 542216617353 (ya configurado).
