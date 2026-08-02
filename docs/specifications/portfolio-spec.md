# Especificacion del Portfolio Personal

## Estado

- Version: 0.1.0
- Fecha: 2026-07-25
- Estado: borrador inicial
- Responsable: Nahuel Dario Vargas

## Objetivo

Crear un portfolio personal profesional, moderno, responsive y accesible para presentar el perfil de Nahuel Dario Vargas como desarrollador de software, sus conocimientos tecnicos, proyectos, experiencia academica y profesional, informacion de contacto y CV descargable.

El sitio debe estar orientado a reclutadores, empresas de software, clientes potenciales y otros desarrolladores. Debe poder desplegarse en Vercel.

## Metodologia SDD

El proyecto se desarrollara con Spec-Driven Development. Antes de implementar una funcionalidad se debe revisar `docs/specifications`, actualizar la especificacion si aparece una nueva necesidad, actualizar `docs/tasks/implementation-plan.md`, implementar una tarea pequena, validar y actualizar `docs/project-status.md`.

No se deben implementar funcionalidades que no esten documentadas.

## Stack Tecnologico

Stack requerido:

- React JS con Vite.
- JavaScript moderno con ES Modules.
- React Router DOM.
- CSS tradicional organizado por archivos.
- CSS Variables.
- Lucide React.
- React Helmet Async.
- Vitest.
- React Testing Library.
- ESLint/Oxlint segun configuracion del proyecto.
- Prettier.

Dependencias ya detectadas en `package.json`:

- `react`.
- `react-dom`.
- `react-router-dom`.
- `lucide-react`.
- `react-helmet-async`.
- `vite`.
- `@vitejs/plugin-react`.
- `oxlint`.
- `prettier`.

Pendiente de configurar despues de aprobar esta etapa:

- Scripts `format` y `format:check`.
- Vitest y React Testing Library quedan fuera del alcance actual hasta que existan componentes y flujos definitivos para validar.

## Restricciones

No utilizar por ahora TypeScript, Redux, Zustand, backend, Express, bases de datos, Firebase, Supabase, Tailwind CSS, librerias grandes de componentes, animaciones pesadas ni dependencias innecesarias.

Si se considera necesaria una dependencia nueva, primero se debe documentar que problema resuelve, por que no puede resolverse con las herramientas actuales y que impacto tendra en tamano y mantenimiento.

## Alcance Version 1

La primera version debe incluir header y navegacion, hero, sobre mi, habilidades, proyectos destacados, listado completo de proyectos, detalle de proyecto, educacion y experiencia, contacto, footer, pagina 404, descarga de CV, modo claro y oscuro, diseno responsive, SEO basico y accesibilidad basica. Los tests automatizados quedan pospuestos hasta contar con comportamiento estable que valga la pena validar.

No incluir blog, panel de administracion, autenticacion ni base de datos en la version 1.

## Rutas

- `/`: pagina principal.
- `/projects`: listado completo de proyectos.
- `/projects/:slug`: detalle individual de proyecto.
- `/404`: pagina 404.
- `*`: rutas desconocidas deben mostrar `NotFoundPage`.

La configuracion de despliegue debe evitar errores 404 al recargar rutas internas en Vercel.

## Contenido de Inicio

### Header

Debe incluir nombre o marca personal, enlaces a Inicio, Sobre mi, Proyectos, Habilidades y Contacto, boton para descargar CV y boton para cambiar tema. El CV descargable debe apuntar a `/cv/nahuel-vargas-cv.pdf` cuando Nahuel agregue el PDF final en `public/cv/nahuel-vargas-cv.pdf`.

Si el PDF no existe o la ruta devuelve HTML por fallback de la app, los botones de CV no deben iniciar una descarga falsa. Deben mostrarse como estado pendiente hasta que exista un archivo PDF real.

### Hero

- Nombre: Nahuel Dario Vargas.
- Rol profesional: Desarrollador de software en formacion.
- Presentacion breve: estudiante avanzado de Tecnicatura Universitaria en Desarrollo de Software, con experiencia de pasantias en ULP y M Studio, orientado a JavaScript, React, backend/frontend web y trabajo con metodologias agiles. El mensaje principal debe estar orientado a busqueda laboral.
- CTA: `Ver portfolio`, `Descargar CV` y `Contactarme`.
- Enlaces a GitHub y LinkedIn.
- Imagen personal opcional: [PENDIENTE: agregar imagen].
- El titulo o subtitulo debe remarcar claramente `Desarrollo de Software` como eje principal del perfil.

### Sobre Mi

Contenido disponible desde CV, publicacion de LinkedIn y notas academicas:

- Estudiante activo de Tecnicatura Universitaria en Desarrollo de Software en Universidad de La Punta desde 2020.
- Carrera en tramo final bajo plan 2024 TUDS, luego de adaptacion al nuevo plan.
- Plan 2024 TUDS incorpora materias optativas y sistema SIU Guarani de autogestion para consultar notas e inscribirse a materias.
- Notas academicas deben mostrarse mediante capturas oficiales del plan de estudios, no como listado manual de calificaciones una por una.
- Capturas de notas disponibles: `/images/profile/plan_estudio1.jpg` y `/images/profile/plan_estudio2.jpg`.
- Las capturas deben poder abrirse en tamano completo en una pestana nueva para permitir zoom del navegador sin agregar modal ni JavaScript innecesario.
- Objetivo de especializarse en un area relacionada con JavaScript.
- Busqueda de oportunidad laboral formal dentro del desarrollo de software.
- Experiencia de pasantia en ULP durante 5 meses, digitalizando un juego educativo sobre la provincia de San Luis, sus departamentos y parajes. El juego quedo funcional y aprobado, pendiente de pulido para publicacion.
- Pasantia actual en M Studio desde hace casi un ano, trabajando en backend, ajustes frontend de una tienda digital, proyectos internos, metodologias agiles, Jira, ClickUp, SDD asistido por IA y Pull Requests en Git.

### Habilidades

Conocimientos informados en CV:

- HTML, CSS, JavaScript, Bootstrap, React JS, Pug.
- Java, Java orientado a objetos, Android Java, Android Studio.
- C#, .NET, API .NET, Node.js.
- C++, SQL, Ruby nivel bajo.
- GitHub, Pull Requests, Jira, ClickUp, SDD asistido por IA y metodologias agiles.

Pendiente:

- [PENDIENTE: confirmar nivel real por tecnologia].
- [PENDIENTE: confirmar tecnologias principales a destacar].

### Proyectos

Debe mostrar entre 3 y 6 proyectos destacados cuando existan datos reales. Los destacados se filtran con `featured`.

Reglas:

- No inventar proyectos.
- No presentar proyectos de terceros como propios.
- No mostrar botones con enlaces vacios.
- No mostrar repositorios privados.

Proyectos conocidos para maqueta inicial:

- Juego educativo sobre San Luis desarrollado en pasantia ULP 2025/2026. [PENDIENTE: agregar detalles, tecnologias, imagen, URL y repositorio si corresponde].
- Apps desarrolladas o mantenidas en pasantia M Studio. [PENDIENTE: confirmar si pueden publicarse y que informacion es publica].
- Florearte primera version: `https://florearte-primera-version.vercel.app/`. Catalogo web de ceramicas publicado con frontend en Vercel, servicio en Render y base de datos en MongoDB Atlas.
- Comarcas San Luis: `https://comarcas-san-luis.vercel.app/login`. Juego educativo web sobre la provincia de San Luis, sus departamentos y sus parajes, con inicio de sesion, acceso de invitado, HTML, CSS, JavaScript, Bootstrap, jQuery y Toastr visibles en el sitio publicado.
- Fotaza2 Web 2026: `https://fotaza2-web2-2026.vercel.app/`. Aplicacion web publicada en Vercel para crear y explorar publicaciones de fotos, con HTML, CSS, JavaScript y variables de entorno documentadas.

Imagenes disponibles:

- Perfil: `/images/profile/fotoPerfilNahu.webp`.
- Florearte: `/images/projects/florearte.png`.
- Comarcas San Luis: `/images/projects/comarcas.png`.
- Fotaza2 Web 2026: `/images/projects/fotaza.png`.

Decision de presentacion:

- Las cards de proyectos solo deben mostrar el enlace al portfolio/despliegue.
- No mostrar enlace, boton ni texto de GitHub dentro de cada card de proyecto.
- Si alguien quiere codigo, puede solicitarlo por contacto o revisar los links profesionales del sitio.
- Florearte debe mencionar el proceso de despliegue con Render y MongoDB Atlas, ademas de las variables de entorno necesarias.
- Fotaza2 debe mencionar despliegue en Vercel y configuracion de variables de entorno.
- No inventar procesos de despliegue para proyectos donde Nahuel no los haya confirmado.
- La interfaz publica no debe mostrar frases de control interno, dudas de rol, placeholders o lenguaje que parezca generado por IA. Si falta un dato, se omite o se muestra de forma simple con informacion publica confirmada.

### Contacto

- LinkedIn: `https://www.linkedin.com/in/nahuel-vargas-96a9271a8/`.
- GitHub: `https://github.com/Nahuelitho`.
- Correo: [PENDIENTE: confirmar si el correo del CV puede publicarse en el sitio].
- En la seccion visual de contacto, alinear `Descargar CV`, `LinkedIn` y `GitHub` en una fila principal y dejar el correo en una fila inferior para que no corte la lectura de los links profesionales.

No publicar numero de telefono ni fecha de nacimiento por defecto. Solo agregarlos si Nahuel lo aprueba explicitamente para el sitio publico.

El CV puede contener datos sensibles si Nahuel decide publicarlos, pero se recomienda usar una version publica orientada a busqueda laboral sin fecha de nacimiento y sin celular personal, salvo aprobacion explicita.

No simular envio exitoso de formularios si no existe un mecanismo real de envio.

### Demo Android

- Preparar una seccion de demo para una app Android grabada por Nahuel.
- El video debe guardarse en `public/videos/android-app-demo.mp4` cuando este disponible.
- Mientras no exista el archivo confirmado, mostrar un espacio informativo sin renderizar un reproductor roto.
- No inventar nombre, funcionalidades ni tecnologias de la app Android hasta que Nahuel confirme los datos.

## Modelo de Datos de Proyectos

Crear `src/data/projects.js` con estructura similar a:

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
- No mostrar URL de repositorio si `repositoryPublic` es `false`.
- No mostrar botones cuyo enlace este vacio.
- El detalle debe buscar el proyecto mediante `slug`.
- Si el `slug` no existe, mostrar la pagina 404.

## Componentes Previstos

- `Header`.
- `Navigation`.
- `MobileMenu`.
- `ThemeToggle`.
- `SectionTitle`.
- `ProjectCard`.
- `ProjectGrid`.
- `TechnologyTag`.
- `SocialLinks`.
- `ButtonLink`.
- `Footer`.
- `ScrollToTop`.
- `EmptyState`.
- `ErrorBoundary`.

No crear componentes que solo envuelvan una etiqueta sin comportamiento o reutilizacion real.

## SEO

Configurar titulo general, titulo por pagina, meta description, Open Graph basico, `html lang="es"`, favicon, canonical si corresponde, `robots.txt` y `sitemap.xml` cuando las rutas esten definidas.

No prometer posicionamiento SEO por tratarse de una SPA.

## Manejo de Errores

La aplicacion debe manejar proyectos inexistentes, mostrar pagina 404, no romperse por imagenes faltantes, ocultar enlaces vacios, tener estados vacios claros, incluir `ErrorBoundary` y no mostrar errores tecnicos directamente al usuario final.

## Informacion Personal Pendiente

- [PENDIENTE: confirmar si el rol profesional principal debe mostrarse como Desarrollador Frontend, Backend, Full Stack o Software Developer].
- [PENDIENTE: confirmar correo publico de contacto].
- [PENDIENTE: agregar CV PDF final].
- [PENDIENTE: agregar foto de perfil optimizada].
- [PENDIENTE: listar proyectos propios con datos completos].
- [PENDIENTE: definir licencia].
