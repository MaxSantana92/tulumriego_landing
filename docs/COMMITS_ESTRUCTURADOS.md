# Commits Estructurados por Implementacion

## Objetivo
Definir un flujo estandar para crear commits claros, atomicos y trazables, agrupando archivos que pertenecen a la misma implementacion tecnica.

## Principios
- Un commit = una implementacion o sub-implementacion coherente.
- No mezclar SEO, performance, seguridad y formulario en el mismo commit.
- Mensajes con formato consistente (tipo + alcance + motivo).
- Siempre revisar staging antes de confirmar (`git diff --cached --name-only`).

## Convencion recomendada de mensaje

Formato:
`<tipo>(<alcance>): <resultado>`

Tipos sugeridos:
- `feat`: nueva funcionalidad
- `fix`: correccion de bug
- `refactor`: mejora interna sin cambiar comportamiento esperado
- `perf`: optimizacion de rendimiento
- `seo`: mejoras tecnicas de indexacion/metadatos
- `chore`: cambios operativos/configuracion
- `docs`: documentacion

Ejemplos:
- `seo(layout): centraliza canonical, hreflang y metadata social`
- `perf(fonts): migra tipografias a self-host con preload`
- `refactor(icons): reemplaza material symbols remoto por iconos locales`

## Mapa de grupos de archivos por implementacion

Usar estos grupos para staging selectivo y commits separados:

### 1) SEO tecnico (Fase 1)
- `astro.config.mjs`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/pages/en/index.astro`
- `src/pages/sitemap.xml.ts`
- `public/robots.txt`

Mensaje sugerido:
`seo(core): implementa canonical, hreflang y sitemap sin redirect default`

### 2) Performance de fuentes (Fase 2)
- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `public/fonts/*`

Mensaje sugerido:
`perf(fonts): self-host de fuentes de texto y preload critico`

### 3) Localizacion de iconos (cierre de deuda Fase 2)
- `astro.config.mjs`
- `src/components/AppIcon.astro`
- `src/components/Nav.astro`
- `src/components/HeroSection.astro`
- `src/components/ImpactSection.astro`
- `src/components/MissionEcosystem.astro`
- `src/components/ContactSection.astro`
- `src/components/RecognitionSection.astro`
- `src/layouts/Layout.astro`
- `src/styles/global.css`

Mensaje sugerido:
`perf(icons): elimina carga remota de material symbols y localiza iconos`

### 4) Documentacion de deuda tecnica
- `src/docs/technical_debt/DEUDA_TECNICA.md`
- `docs/COMMITS_ESTRUCTURADOS.md`

Mensaje sugerido:
`docs(deuda-tecnica): actualiza estado y criterios de cierre por fase`

## Automatizacion (PowerShell)

Pega esta funcion en tu terminal para commitear por grupo:

```powershell
function New-StructuredCommit {
  param(
    [Parameter(Mandatory = $true)][string]$Message,
    [Parameter(Mandatory = $true)][string[]]$Files
  )

  git add -- $Files
  Write-Host "`nArchivos staged para commit:" -ForegroundColor Cyan
  git diff --cached --name-only

  if ($LASTEXITCODE -ne 0) {
    throw "No se pudo preparar staging."
  }

  git commit -m $Message
}
```

Ejemplos de uso:

```powershell
New-StructuredCommit `
  -Message "seo(core): implementa canonical, hreflang y sitemap sin redirect default" `
  -Files @(
    "astro.config.mjs",
    "src/layouts/Layout.astro",
    "src/pages/index.astro",
    "src/pages/en/index.astro",
    "src/pages/sitemap.xml.ts",
    "public/robots.txt"
  )

New-StructuredCommit `
  -Message "perf(fonts): self-host de fuentes de texto y preload critico" `
  -Files @(
    "src/styles/global.css",
    "src/layouts/Layout.astro",
    "public/fonts"
  )
```

## Checklist antes de cada commit
- El commit corresponde a una sola implementacion.
- `git diff --cached --name-only` solo muestra archivos del grupo.
- `npm run build` compila correctamente.
- El mensaje explica el resultado, no solo la accion.
