# 🌊 Tulum Riego — Landing Page

Landing page profesional para Tulum Riego, construida con **Astro 4**, **TypeScript** e **i18n** nativo.

## ✨ Características

- **Framework**: Astro 4 con TypeScript strict
- **i18n**: Español (`/`) y English (`/en`) — tipado fuerte con `as const`
- **Dark / Light Mode**: CSS custom properties, sin flash (anti-FOUC via script inline)
- **Animaciones**: Scroll reveal, stagger, float, spin con IntersectionObserver
- **Responsive**: Mobile-first con breakpoints en 768px

## 🗂 Estructura

```
src/
├── i18n/
│   ├── es.ts          ← Strings español
│   ├── en.ts          ← Strings inglés
│   └── index.ts       ← Helpers: getLangFromUrl, useTranslations
├── layouts/
│   └── Layout.astro   ← HTML base + anti-FOUC + scripts globales
├── components/
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── HeroSection.astro
│   ├── RecognitionSection.astro
│   ├── ImpactSection.astro
│   ├── MissionEcosystem.astro
│   └── ContactSection.astro
├── pages/
│   ├── index.astro    ← Español (/)
│   └── en/
│       └── index.astro ← English (/en)
└── styles/
    └── global.css     ← Variables CSS dark/light + utilidades
```

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

## 🌐 Rutas

| Ruta  | Idioma   |
|-------|----------|
| `/`   | Español  |
| `/en` | English  |

## 🎨 Tema

El toggle de tema guarda la preferencia en `localStorage` bajo la clave `tulum-theme`.  
Valores: `'dark'` | `'light'`. Si no hay valor guardado, usa `prefers-color-scheme`.

## 📦 Build

```bash
npm run build    # Genera /dist
npm run preview  # Sirve el build
```
