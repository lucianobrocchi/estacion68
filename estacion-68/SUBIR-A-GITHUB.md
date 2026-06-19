# Subir Estación 68 a GitHub (repo: estacion68)

Esta carpeta ya está lista para subir. Elegí una opción.

## Opción A — GitHub CLI (más rápida)
Requiere GitHub CLI: https://cli.github.com
Desde una terminal dentro de esta carpeta:
```
gh auth login          # solo la primera vez
git init
git add -A
git commit -m "Catálogo digital Estación 68"
gh repo create estacion68 --public --source=. --remote=origin --push
```
Listo. Queda en https://github.com/TU-USUARIO/estacion68

## Opción B — Git + repo creado a mano
1. Entrá a https://github.com/new y creá un repo llamado **estacion68** (público, sin README).
2. Desde una terminal en esta carpeta:
```
git init
git add -A
git commit -m "Catálogo digital Estación 68"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/estacion68.git
git push -u origin main
```

## Opción C — Sin terminal (web)
1. Creá el repo **estacion68** en https://github.com/new
2. En el repo: "Add file" → "Upload files" → arrastrá
   index.html, og-image.png, vercel.json, README.md, .gitignore, DEPLOY.md
3. Commit changes.

## Después: deploy automático
En Vercel → New Project → Import Git Repository → elegí **estacion68**.
Cada push a `main` redeploya solo.
