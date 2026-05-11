# Identidad visual — Tulum Riego

Documento base para implementar la UI de Tulum Riego en la app (web/mobile), tomando como fuente el código actual del sitio.

## 1) ADN visual de marca

- Estética: **AgriTech futurista** con lectura técnica, limpia y geométrica.
- Personalidad: precisa, científica, confiable, premium.
- Recursos formales:
  - Geometrías recortadas (`clip-path`) en botones y tarjetas.
  - Brillos y halos cian/dorado.
  - Capas translúcidas tipo glass + texturas de circuito.
  - Alto contraste tipográfico en headings (bold/uppercase).

## 2) Tipografía

## Familias

- **Display / Headline:** `Plus Jakarta Sans` (700–900, normal e italic).
- **Body / UI:** `Space Grotesk` (400–700).

## Uso recomendado

- `Plus Jakarta Sans`: títulos, badges, labels en mayúsculas, CTAs.
- `Space Grotesk`: párrafos, formularios, texto corrido y microcopy.

## Escala observada (aprox. en sitio)

- Hero H1: `clamp(2.5rem, 7vw, 5.5rem)`, `font-weight: 900`, tracking negativo.
- H2 sección: `clamp(1.75rem, 5vw, 3.75rem)`, `font-weight: 900`, uppercase.
- H3 cards: `1.6rem`, `font-weight: 900`.
- Body principal: `0.95rem` a `1rem`, line-height `1.7–1.75`.
- Labels UI: `0.55rem–0.65rem`, uppercase, tracking alto (`0.18em–0.4em`).

## 3) Color system (tokens)

La implementación ya usa CSS Custom Properties para tema claro/oscuro.

## Light mode (`:root`)

| Token | Valor |
|---|---|
| `--color-bg` | `#edf2f7` |
| `--color-bg-alt` | `#e2eaf4` |
| `--color-surface-low` | `#d6e0ef` |
| `--color-surface-high` | `#dce6f2` |
| `--color-input-bg` | `#cdd8ea` |
| `--color-text` | `#0b1326` |
| `--color-text-muted` | `#3d5068` |
| `--color-border` | `rgba(0,151,178,0.28)` |
| `--color-border-strong` | `#0097b2` |
| `--color-primary` | `#0097b2` |
| `--color-primary-glow` | `rgba(0,151,178,0.35)` |
| `--color-gold` | `#8c6400` |
| `--color-gold-glow` | `rgba(140,100,0,0.35)` |
| `--color-gold-bg` | `rgba(140,100,0,0.08)` |
| `--color-midnight` | `#0b1326` |
| `--color-nav-bg` | `rgba(237,242,247,0.88)` |
| `--color-hero-glow` | `rgba(0,151,178,0.06)` |
| `--color-card-bg` | `linear-gradient(135deg,rgba(255,255,255,0.85) 0%,rgba(220,230,242,0.92) 100%)` |
| `--color-card-hover-bg` | `rgba(0,151,178,0.05)` |
| `--shadow-glow` | `0 0 32px rgba(0,151,178,0.2)` |
| `--shadow-gold` | `0 0 16px rgba(140,100,0,0.28)` |

## Dark mode (`.dark`)

| Token | Valor |
|---|---|
| `--color-bg` | `#0b1326` |
| `--color-bg-alt` | `#060e20` |
| `--color-surface-low` | `#131b2e` |
| `--color-surface-high` | `#222a3d` |
| `--color-input-bg` | `#060e20` |
| `--color-text` | `#dae2fd` |
| `--color-text-muted` | `#a8b8cc` |
| `--color-border` | `rgba(0,229,255,0.22)` |
| `--color-border-strong` | `#00e5ff` |
| `--color-primary` | `#00e5ff` |
| `--color-primary-glow` | `rgba(0,229,255,0.38)` |
| `--color-gold` | `#d4af37` |
| `--color-gold-glow` | `rgba(212,175,55,0.42)` |
| `--color-gold-bg` | `rgba(212,175,55,0.08)` |
| `--color-midnight` | `#000d1a` |
| `--color-nav-bg` | `rgba(11,19,38,0.88)` |
| `--color-hero-glow` | `rgba(0,229,255,0.055)` |
| `--color-card-bg` | `linear-gradient(135deg,rgba(45,52,73,0.65) 0%,rgba(23,31,51,0.88) 100%)` |
| `--color-card-hover-bg` | `rgba(0,229,255,0.05)` |
| `--shadow-glow` | `0 0 32px rgba(0,229,255,0.24)` |
| `--shadow-gold` | `0 0 16px rgba(212,175,55,0.38)` |

## Colores funcionales adicionales

- Error texto/campo: `#ff8c8c`.
- Success formulario: `#7ff5c7`.
- Ícono toggle light: `#f5c542`.
- Ícono toggle dark: `#6b7cff`.

## 4) Componentes base

## Botones CTA

- Clase forma: `poly-cta` (corte diagonal).
- Estilo primario:
  - Fondo: `var(--color-primary)`
  - Texto: `var(--color-midnight)`
  - Peso: `900`, uppercase, tracking amplio.
  - Glow: `box-shadow` con `--color-primary-glow`.
- Hover: `brightness(1.12)` + ligero `scale`.

## Badges

- Variante pequeña: `poly-cta-sm`.
- Usados en bloques de reconocimiento/hero.
- Normalmente fondo translúcido (`--color-gold-bg`) + borde `--color-gold`.

## Card cristalina (`.crystalline-card`)

- Fondo gradiente (`--color-card-bg`), borde semitransparente.
- Forma poligonal con `clip-path`.
- Hover:
  - modifica `clip-path`,
  - eleva borde a `--color-primary`,
  - agrega `--shadow-glow`.

## Navbar glass

- Clase: `glass-nav`.
- Efecto:
  - fondo translúcido `--color-nav-bg`,
  - blur `22px`,
  - borde inferior `--color-border`.

## Inputs

- Fondo `--color-input-bg`, borde `--color-border`.
- Focus global:
  - borde `--color-primary`,
  - ring `0 0 0 2px var(--color-primary-glow)`.
- Placeholder opacidad baja (`~0.38`).

## Estados de formulario

- `input-invalid`:
  - `border-color: #ff8c8c`
  - ring rojo suave.
- Mensajes:
  - `.field-error`: rojo.
  - `.form-status.is-success`: verde menta.
  - `.form-status.is-error`: rojo.

## 5) Patrones de layout

- Contenedor principal: `max-width: 80rem` (en contacto `72rem`).
- Sistema frecuente: `asymmetric-grid` (`1.2fr 0.8fr` desktop / 1 columna mobile).
- Separación vertical por secciones: `padding` entre `6rem` y `8rem`.
- Bordes de sección para jerarquía: `1px solid var(--color-border)`.

## 6) Motion & interacciones

## Animaciones

- `spin-slow`: rotaciones continuas decorativas.
- `pulse-ring`: pulso en anillos SVG.
- `float-y`: desplazamiento vertical suave de assets hero.

## Reveals al scroll

- Clases: `reveal`, `reveal-left`, `reveal-right`, `stagger-container`.
- Entrada con opacidad + translate + easing suave.
- Stagger por ítem (`0.10s`, `0.22s`, `0.34s`).

## Microinteracciones

- Links nav/footer cambian a primary/gold en hover.
- Cards/íconos escalan sutilmente.
- Toggle tema desplaza “thumb” con transición cúbica.

## 7) Iconografía

- Sistema actual: `astro-icon` con `material-symbols`.
- Wrapper: `AppIcon` normaliza nombres `snake_case` -> `kebab-case`.
- Tamaños frecuentes: `0.85rem`, `1.25rem`, `1.5rem`, `2.75rem`.
- Color siempre por token (`--color-primary` / `--color-gold` / `--color-text`).

## 8) Guía de implementación rápida para la app

## A) Crear Design Tokens

Implementar exactamente los tokens CSS en un sistema de tema (por ejemplo):

- `theme.light.colors.*`
- `theme.dark.colors.*`
- `theme.shadow.glow`
- `theme.shadow.gold`

## B) Definir componentes reutilizables

- `TRButton` (variants: `primary`, `outlineGold`).
- `TRBadge` (`gold`, `primary`).
- `TRCardCrystalline`.
- `TRInput` + `TRFieldError` + `TRFormStatus`.
- `TRSection` (padding estándar + borde opcional).
- `TRNavGlass`.

## C) Tipografía semántica

- `display-xl`, `display-lg`, `heading-lg`, `heading-md`, `body-md`, `label-xs`.
- Asegurar uppercase + tracking en labels y CTAs.

## D) Modo oscuro/claro

- Persistencia local (`localStorage` o equivalente móvil).
- Aplicar tema antes del primer paint para evitar FOUC.

## E) Accesibilidad mínima

- Contraste AA en texto/body.
- Estados focus visibles.
- `aria-invalid`, `aria-live` en formularios.
- Mantener textos de error/success legibles en ambos temas.

## 9) Checklist de consistencia visual

- [ ] Se respetan `Plus Jakarta Sans` y `Space Grotesk`.
- [ ] Primario cian + acento dorado en todos los flujos.
- [ ] CTAs con forma poligonal (no rectangulares simples).
- [ ] Cards con borde y glow en hover.
- [ ] Navbar translúcida con blur.
- [ ] Inputs con focus ring cian.
- [ ] Motion suave, nunca agresivo.
- [ ] Dark mode como primera experiencia visual.

## 10) Archivos fuente de referencia

- `src/styles/global.css`
- `src/components/Nav.astro`
- `src/components/HeroSection.astro`
- `src/components/RecognitionSection.astro`
- `src/components/ImpactSection.astro`
- `src/components/MissionEcosystem.astro`
- `src/components/ContactSection.astro`
- `src/components/Footer.astro`
- `src/components/AppIcon.astro`

