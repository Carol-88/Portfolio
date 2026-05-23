# Portfolio — Carolina Romero

Portfolio personal en React + Vite desplegado en [caroldev.com](https://caroldev.com).

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
cp .env.example .env
```

Completa `.env` con tus claves de EmailJS y hCaptcha.

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run lint
npm run build
npm run preview
```

## Estructura

- `src/config/site.js` — identidad, navegación y skills
- `src/assets/projects.json` — proyectos del portfolio
- `src/assets/experiences.json` — experiencia profesional
- `public/` — assets estáticos y CV

## Deploy

Configurado para Vercel con SPA rewrites en `vercel.json`. Añade las variables de entorno en el panel de Vercel.
