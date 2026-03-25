# Deuda Tecnica - Tulum Riego Landing

## Contexto
Documento vivo para registrar deuda tecnica detectada durante la implementacion del plan SEO, performance, seguridad y formulario.

## Estado actual (post Fase 1)

- SEO base centralizado en `src/layouts/Layout.astro`.
- `hreflang`, `canonical`, OG y Twitter tags implementados.
- `robots.txt` y `sitemap.xml` presentes.
- Sin redireccionamiento automatico del idioma por defecto (`es` en `/`, `en` en `/en/`).

## Deuda tecnica abierta (prioridad alta)

### 1) Definir dominio real para `SITE_URL`
- **Estado:** Cerrada.
- **Impacto:** Mitigado. `canonical`, `hreflang`, `og:url` y `sitemap` apuntan a `https://tulumriego.com`.
- **Donde aplica:** `astro.config.mjs`, `.github/workflows/deploy.yml`, `public/robots.txt`.
- **Accion ejecutada:** Fallback en `astro.config.mjs` fijado a `https://tulumriego.com`. Variable `SITE_URL` en workflow de deploy actualizada. `robots.txt` con URL absoluta de sitemap.
- **Criterio de cierre:** `canonical` y `sitemap` publicados con dominio real.

### 2) Estrategia de fuentes no optimizada
- **Estado:** Cerrada.
- **Impacto:** Mitigado para tipografias e iconografia.
- **Donde aplica:** `src/styles/global.css` y `src/layouts/Layout.astro`.
- **Accion ejecutada:** Migracion a self-host (`public/fonts`), `@font-face`, `font-display: swap`, `preload` de fuentes criticas y reemplazo de `Material Symbols` remoto por componente de iconos local.
- **Criterio de cierre:** Sin dependencias remotas de fuentes de texto ni iconografia.

### 3) Uso de `set:html` en contenido traducido
- **Estado:** Cerrada (Fase 3 ejecutada).
- **Impacto:** Riesgo mitigado al eliminar render HTML inyectado.
- **Donde aplica:** `src/components/RecognitionSection.astro`.
- **Accion ejecutada:** Reemplazo por render seguro usando `descriptionParts` tipados en `src/i18n/es.ts` y `src/i18n/en.ts`.
- **Criterio de cierre:** Sin `set:html` para traducciones y sin interpolacion de HTML en runtime.

### 4) Formulario sin pipeline robusto de conversion
- **Estado:** Pendiente (sera Fase 4).
- **Impacto:** Riesgo de baja conversion, mala calidad de lead y abuso de spam.
- **Donde aplica:** `src/components/ContactSection.astro`.
- **Accion requerida:** Validacion HTML+TS, feedback UX, honeypot y envio a Formspree.
- **Criterio de cierre:** Envio real operativo con validaciones accesibles.

## Deuda tecnica media

### 5) URL de sitemap en robots ligada a implementacion actual
- **Estado:** Parcialmente cerrada.
- **Impacto:** Si cambia la estrategia de sitemap, `robots.txt` puede quedar desincronizado.
- **Donde aplica:** `public/robots.txt`.
- **Accion requerida:** Verificar en cada release que `Sitemap: /sitemap.xml` sea la ruta vigente.

### 6) Calidad SEO sin automatizacion CI
- **Estado:** Pendiente.
- **Impacto:** Regresiones SEO/performance no detectadas a tiempo.
- **Accion requerida:** Agregar checks en CI (build, Lighthouse, validacion de metadatos).
- **Criterio de cierre:** Pipeline con validaciones minimas y thresholds.

## Deuda tecnica baja

### 7) Hardcode de copy SEO por pagina
- **Estado:** Activo y funcional, pero mejorable.
- **Impacto:** Mantenimiento manual al escalar a mas rutas.
- **Accion requerida:** Crear objeto tipado central de metadatos por locale/ruta.

## Checklist rapido de cierre de deuda

- [x] `SITE_URL` configurado en entorno productivo (`https://tulumriego.com`).
- [x] Fuentes de texto self-host + `font-display: swap` + `preload`.
- [x] Material Symbols localizado (sin carga remota en runtime).
- [x] Eliminado `set:html`.
- [ ] Formulario validado y conectado a Formspree.
- [ ] Verificacion Search Console (`/` y `/en/` inspeccionadas).
- [ ] Lighthouse movil con mejora en FCP/LCP.

## Notas operativas

- Este archivo debe actualizarse al cerrar cada fase.
- Si cambia hosting o dominio, revalidar `canonical`, `hreflang`, `robots` y `sitemap`.
