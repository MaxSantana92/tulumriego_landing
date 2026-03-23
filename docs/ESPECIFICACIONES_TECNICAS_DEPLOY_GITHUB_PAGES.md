# Especificaciones Tecnicas - Deploy en GitHub Pages (Astro)

## Objetivo
Documentar la configuracion tecnica para desplegar la landing de Tulum Riego en GitHub Pages usando Astro, evitando el build por defecto con Jekyll.

## Contexto del incidente

### Sintoma observado
En el pipeline de GitHub Pages aparecieron errores de parsing YAML sobre archivos `.astro` (ej. `HeroSection.astro`, `Layout.astro`, `Nav.astro`) y el mensaje:

- `Invalid YAML front matter in /src/pages/en/index.astro`

### Causa raiz
El repositorio estaba siendo procesado por el flujo por defecto de GitHub Pages (contenedor `jekyll-build-pages`), que interpreta archivos fuente del proyecto como contenido Jekyll y no como componentes Astro.

## Alcance de la solucion
- Configurar despliegue por GitHub Actions (no por branch + Jekyll).
- Compilar el sitio con Astro en CI.
- Publicar el artefacto `dist` en GitHub Pages.
- Resolver base path para repositorio de proyecto (`/<repo>`) sin romper el caso `*.github.io`.

## Cambios implementados

### 1) Configuracion de Astro
Archivo: `astro.config.mjs`

Se agrego resolucion dinamica de `base`:

- Lee `GITHUB_REPOSITORY` para obtener nombre de repo.
- Si el repo **no** es `*.github.io`, usa `base = /<repo>`.
- Si el repo **si** es `*.github.io`, usa `base = /`.
- Permite override con `BASE_PATH` si se define en entorno.

Tambien se mantiene:

- `site = process.env.SITE_URL ?? 'https://example.com'`

### 2) Workflow de deploy
Archivo: `.github/workflows/deploy.yml`

Se creo pipeline con dos jobs:

1. **build**
   - `actions/checkout@v4`
   - `actions/setup-node@v4` (Node 20, cache npm)
   - `npm ci`
   - `npm run build` con `SITE_URL=https://${{ github.repository_owner }}.github.io`
   - `actions/upload-pages-artifact@v3` con `path: dist`

2. **deploy**
   - depende de `build`
   - usa `actions/deploy-pages@v4`
   - publica en entorno `github-pages`

## Requisitos de plataforma

### Configuracion en GitHub
En `Settings > Pages`:

- **Source**: `GitHub Actions`

No usar `Deploy from a branch` para este proyecto Astro.

### Permisos del workflow
Definidos en `deploy.yml`:

- `contents: read`
- `pages: write`
- `id-token: write`

## Variables de entorno

### Requeridas/recomendadas
- `SITE_URL`: URL canonica del sitio (recomendado definir dominio final).
- `GITHUB_REPOSITORY`: provista automaticamente por GitHub Actions.
- `BASE_PATH` (opcional): fuerza manual del `base`.

## Criterios de aceptacion
- El workflow `Deploy to GitHub Pages` finaliza en verde.
- No aparecen errores de Jekyll/YAML sobre archivos `.astro`.
- La pagina publica carga assets correctamente bajo `/<repo>/` cuando aplica.
- Rutas i18n funcionan:
  - `/` (es)
  - `/en` (en)

## Validacion tecnica ejecutada
- Build local exitoso: `npm run build`.
- Generacion correcta de rutas estaticas y salida `dist`.

## Riesgos y mitigaciones

### Riesgo 1: Canonical/sitemap con dominio placeholder
- Riesgo: mantener `https://example.com` si no se define `SITE_URL` real.
- Mitigacion: configurar `SITE_URL` de produccion en CI.

### Riesgo 2: Base path incorrecto por cambio de nombre de repo
- Riesgo: links/estaticos rotos si cambia el nombre del repositorio.
- Mitigacion: validar deploy despues de renombrar repo o fijar `BASE_PATH`.

## Procedimiento operativo
1. Hacer merge/push a `main`.
2. Verificar ejecucion de workflow `Deploy to GitHub Pages`.
3. Confirmar URL publicada en job `deploy`.
4. Probar navegacion en `/` y `/en`.
5. Revisar `canonical`, `hreflang` y `sitemap.xml` en produccion.

## Historial de cambios
- Se incorpora workflow dedicado de Pages para Astro.
- Se agrega logica de `base` dinamica en `astro.config.mjs`.
