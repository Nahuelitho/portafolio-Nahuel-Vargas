# Portfolio Nahuel Vargas

Portfolio personal profesional desarrollado con React JS y Vite usando Spec-Driven Development.

## Descripcion

Este proyecto presentara el perfil de Nahuel Dario Vargas como desarrollador de software, sus habilidades tecnicas, formacion, experiencia, proyectos, enlaces profesionales, informacion de contacto y CV descargable.

El sitio estara orientado a reclutadores, empresas de software, clientes potenciales y otros desarrolladores.

## Captura de Pantalla

[PENDIENTE: agregar captura de pantalla]

## Sitio Desplegado

[PENDIENTE: agregar URL del sitio desplegado]

## Caracteristicas Previstas

- Header y navegacion responsive.
- Hero principal.
- Seccion Sobre mi.
- Tecnologias y habilidades.
- Proyectos destacados.
- Listado completo de proyectos.
- Detalle individual de proyecto.
- Educacion y experiencia.
- Contacto.
- Footer.
- Pagina 404.
- Descarga de CV.
- Modo claro y oscuro.
- SEO basico.
- Accesibilidad basica.
- Tests automatizados futuros cuando la interfaz este mas estable.

## Tecnologias

- React JS.
- Vite.
- JavaScript con ES Modules.
- React Router DOM.
- CSS tradicional.
- CSS Variables.
- Lucide React.
- React Helmet Async.
- Vitest. [PENDIENTE: futuro, no se configura por ahora]
- React Testing Library. [PENDIENTE: futuro, no se configura por ahora]
- Oxlint.
- Prettier.

## Requisitos Previos

- Node.js instalado.
- npm instalado.
- Git instalado.

## Instalacion

```bash
npm install
```

## Ejecucion Local

```bash
npm run dev
```

## Scripts Disponibles

Scripts actuales:

- `npm run dev`: inicia servidor de desarrollo.
- `npm run build`: genera build de produccion.
- `npm run lint`: ejecuta Oxlint.
- `npm run preview`: previsualiza el build.
- `npm run format`: aplica formato con Prettier.
- `npm run format:check`: verifica formato con Prettier.

Scripts de tests pendientes para una etapa futura:

- `npm run test`.
- `npm run test:run`.

## Estructura del Proyecto

Estructura objetivo:

```text
portafolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── profile/
│   ├── cv/
│   │   └── nahuel-vargas-cv.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── docs/
│   ├── specifications/
│   ├── decisions/
│   ├── tasks/
│   └── project-status.md
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── tests/
│   ├── App.jsx
│   └── main.jsx
├── AGENTS.md
├── README.md
├── package.json
└── vite.config.js
```

## Como Agregar un Nuevo Proyecto

Los proyectos se administraran en `src/data/projects.js`.

Estructura prevista:

```js
{
  id: 1,
  slug: 'nombre-del-proyecto',
  title: 'Nombre del proyecto',
  shortDescription: 'Descripcion corta',
  fullDescription: 'Descripcion completa',
  role: 'Rol desempenado',
  context: 'Personal, academico o profesional',
  featured: true,
  status: 'Finalizado',
  technologies: ['React', 'Node.js'],
  features: [],
  challenges: [],
  learnings: [],
  image: '/images/projects/nombre-del-proyecto.webp',
  gallery: [],
  liveUrl: '',
  repositoryUrl: '',
  repositoryPublic: false,
}
```

Reglas:

- No inventar proyectos.
- No agregar proyectos de terceros como propios.
- No mostrar repositorio si `repositoryPublic` es `false`.
- No renderizar botones con enlaces vacios.
- Usar `featured: true` para proyectos destacados.

## Como Modificar Informacion Personal

La informacion personal se agregara en archivos de datos y componentes especificos durante la implementacion.

Datos ya disponibles:

- Nombre: Nahuel Dario Vargas.
- LinkedIn: `https://www.linkedin.com/in/nahuel-vargas-96a9271a8/`.
- GitHub: `https://github.com/Nahuelitho`.

Datos pendientes:

- [PENDIENTE: agregar descripcion personal].
- [PENDIENTE: confirmar correo publico de contacto].
- [PENDIENTE: agregar CV PDF final].
- [PENDIENTE: agregar foto de perfil].
- [PENDIENTE: confirmar proyectos publicables].

## Variables de Entorno

Actualmente el proyecto no requiere variables de entorno.

Si se incorpora un servicio externo en el futuro, crear o actualizar `.env.example`, no subir `.env`, no documentar valores reales y confirmar que `.env` este en `.gitignore`.

## Despliegue en Vercel

Proceso previsto:

1. Ejecutar `npm run build` localmente.
2. Conectar el repositorio a Vercel.
3. Usar comando de build `npm run build`.
4. Usar directorio de salida `dist`.
5. Configurar fallback para rutas internas de React Router.
6. Verificar `/`, `/projects`, `/projects/:slug` y rutas inexistentes.

## Metodologia SDD

Este proyecto usa Spec-Driven Development:

1. Leer especificaciones.
2. Identificar ambiguedades.
3. Actualizar documentacion.
4. Planificar tareas pequenas.
5. Implementar una tarea por vez.
6. Validar con lint, tests y build.
7. Actualizar estado del proyecto.

Documentos principales:

- `docs/specifications/portfolio-spec.md`.
- `docs/specifications/design-spec.md`.
- `docs/specifications/accessibility-spec.md`.
- `docs/tasks/implementation-plan.md`.
- `docs/decisions/architecture-decisions.md`.
- `docs/project-status.md`.
- `AGENTS.md`.

## Convenciones del Proyecto

- Componentes enfocados y pequenos.
- HTML semantico.
- CSS tradicional con variables.
- Sin dependencias innecesarias.
- Sin informacion inventada.
- Placeholders explicitos para datos faltantes.
- Tests orientados a comportamiento visible.
- Accesibilidad desde el inicio.

## Roadmap

- Fase 1: documentacion y configuracion.
- Fase 2: sistema visual.
- Fase 3: navegacion.
- Fase 4: pagina principal.
- Fase 5: proyectos.
- Fase 6: calidad.
- Fase 7: despliegue.

## Licencia

[PENDIENTE: definir licencia]

## Autor

Nahuel Dario Vargas.

## Enlaces Profesionales

- LinkedIn: `https://www.linkedin.com/in/nahuel-vargas-96a9271a8/`.
- GitHub: `https://github.com/Nahuelitho`.
