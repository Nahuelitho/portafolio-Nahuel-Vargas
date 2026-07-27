# Portfolio Nahuel Vargas

Portfolio personal de Nahuel Dario Vargas, desarrollado con React y Vite para presentar perfil profesional, formacion, experiencia, proyectos publicados, habilidades tecnicas, contacto y CV descargable.

## Sitio En Vivo

[Ver portfolio desplegado](https://portafolio-nahuel-vargas.vercel.app/)

## Sobre El Proyecto

El objetivo del sitio es funcionar como carta de presentacion profesional para busqueda laboral en desarrollo de software.

El contenido esta orientado a reclutadores, equipos tecnicos y empresas que quieran revisar experiencia, proyectos publicados, stack de trabajo y canales de contacto.

## Funcionalidades

- Hero con presentacion profesional y foco en Desarrollo de Software.
- Seccion Sobre mi con perfil academico y objetivo laboral.
- Proyectos publicados con miniaturas, tecnologias y enlaces a deploy.
- Habilidades agrupadas por area tecnica.
- Experiencia y formacion academica.
- Capturas academicas ampliables en nueva pestana.
- Descarga de CV en PDF.
- Seccion preparada para demo Android.
- Contacto con LinkedIn, GitHub y correo.
- Modo claro y oscuro persistente.
- Diseno responsive para desktop, tablet y mobile.
- Estilos con CSS tradicional y variables CSS.

## Stack

- React.
- Vite.
- JavaScript con ES Modules.
- CSS tradicional.
- CSS Variables.
- Lucide React.
- React Helmet Async.
- React Router DOM.
- Oxlint.
- Prettier.

## Instalacion

```bash
npm install
```

## Ejecucion Local

```bash
npm run dev
```

## Build De Produccion

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

## Scripts

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la version de produccion en `dist`.
- `npm run preview`: previsualiza el build localmente.
- `npm run lint`: ejecuta Oxlint.
- `npm run format`: aplica formato con Prettier.
- `npm run format:check`: verifica formato con Prettier.

## Estructura Principal

```text
portafolio/
├── docs/
│   ├── decisions/
│   ├── specifications/
│   ├── tasks/
│   └── project-status.md
├── public/
│   ├── cv/
│   ├── images/
│   └── videos/
├── src/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Contenido Editable

- Proyectos: `src/data/projects.js`.
- Habilidades: `src/data/skills.js`.
- Redes profesionales: `src/data/socialLinks.js`.
- CV descargable: `public/cv/nahuel-vargas-cv.pdf`.
- Imagenes de perfil y capturas: `public/images/profile/`.
- Miniaturas de proyectos: `public/images/projects/`.

## Metodologia

El proyecto se trabaja con Spec-Driven Development.

Antes de implementar cambios relevantes se actualizan las especificaciones, el plan de implementacion y el estado del proyecto.

Documentos principales:

- `docs/specifications/portfolio-spec.md`.
- `docs/specifications/design-spec.md`.
- `docs/specifications/accessibility-spec.md`.
- `docs/tasks/implementation-plan.md`.
- `docs/project-status.md`.
- `AGENTS.md`.

## Validacion

Antes de cerrar cambios se ejecuta:

```bash
npm run format
npm run lint
npm run build
```

## Despliegue

El portfolio esta desplegado en Vercel:

[https://portafolio-nahuel-vargas.vercel.app/](https://portafolio-nahuel-vargas.vercel.app/)

## Autor

Nahuel Dario Vargas.

- LinkedIn: [nahuel-vargas-96a9271a8](https://www.linkedin.com/in/nahuel-vargas-96a9271a8/)
- GitHub: [Nahuelitho](https://github.com/Nahuelitho)
