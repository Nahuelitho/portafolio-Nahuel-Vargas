# Estado del Proyecto

## Resumen

- Proyecto: Portfolio personal de Nahuel Dario Vargas.
- Metodologia: Spec-Driven Development.
- Stack: React JS, Vite, JavaScript, CSS tradicional.
- Estado actual: primera maqueta frontend implementada con textos academicos/profesionales actualizados, descarga de CV preparada y espacio para demo Android.
- Proxima decision: confirmar datos de proyectos y avanzar con rutas/componentes separados.

## Repositorio Actual

Estructura detectada:

- `.git/` presente.
- `package.json` presente.
- `package-lock.json` presente.
- `vite.config.js` presente.
- `.oxlintrc.json` presente.
- `.gitignore` presente.
- `index.html` presente.
- `public/` presente.
- `src/` presente.
- `readme.md` de plantilla detectado antes de reemplazarlo.
- `node_modules/` presente.

Archivos de plantilla Vite detectados:

- `src/App.jsx` con contenido demo.
- `src/App.css` con estilos demo.
- `src/index.css` con estilos demo.
- `src/assets/react.svg`.
- `src/assets/vite.svg`.
- `src/assets/hero.png`.
- `public/icons.svg`.

La plantilla de Vite fue reemplazada por una primera maqueta del portfolio.

## `package.json` Actual

Scripts detectados:

- `npm run dev`: `vite`.
- `npm run build`: `vite build`.
- `npm run lint`: `oxlint`.
- `npm run preview`: `vite preview`.

Dependencias detectadas:

- `lucide-react`.
- `react`.
- `react-dom`.
- `react-helmet-async`.
- `react-router-dom`.

Dev dependencies detectadas:

- `@types/react`.
- `@types/react-dom`.
- `@vitejs/plugin-react`.
- `oxlint`.
- `prettier`.
- `vite`.

Pendientes de configuracion:

- Vitest y React Testing Library quedan pospuestos por decision actual.
- Confirmar si se mantiene Oxlint como herramienta principal de lint o si se agrega ESLint tradicional.

Configuracion agregada:

- Scripts `format` y `format:check`.
- `.prettierrc`.
- `.prettierignore`.
- `.env.example`.
- `.gitignore` actualizado para no versionar `.env`.

## Informacion del CV Procesada

Datos profesionales disponibles:

- Nombre: Nahuel Dario Vargas.
- Formacion actual: Tecnicatura Universitaria en Desarrollo de Software en Universidad de La Punta, activa desde 2020.
- Estado academico: carrera en tramo final bajo plan 2024 TUDS, luego de adaptacion al nuevo plan.
- Objetivo: especializarse en un area relacionada con JavaScript y conseguir una oportunidad laboral formal en desarrollo de software.
- Experiencia como desarrollador: pasantia en ULP durante 5 meses, digitalizando un juego educativo sobre San Luis, sus departamentos y parajes. El juego quedo funcional y aprobado, pendiente de pulido para publicacion.
- Experiencia como desarrollador: pasantia actual en M Studio desde hace casi un ano, trabajando en backend, ajustes frontend de una tienda digital, proyectos internos, metodologias agiles, Jira, ClickUp, SDD asistido por IA y Pull Requests en Git.
- LinkedIn: `https://www.linkedin.com/in/nahuel-vargas-96a9271a8/`.
- GitHub: `https://github.com/Nahuelitho`.
- Correo publico de contacto incorporado: `nahuel11906@gmail.com`.

Conocimientos tecnicos informados:

- HTML, CSS, JavaScript, Bootstrap, React JS, Pug.
- Java, Android Java, Android Studio, Java orientado a objetos.
- C#, .NET, API .NET, Node.js.
- C++, SQL, Ruby nivel bajo.
- GitHub, Pull Requests, Jira, ClickUp, SDD asistido por IA y metodologias agiles.

Datos sensibles o no recomendados para publicar por defecto:

- Fecha de nacimiento.
- Numero de celular.

## Proyectos Agregados a la Maqueta

- Florearte: `https://florearte-primera-version.vercel.app/`.
- Comarcas San Luis: `https://comarcas-san-luis.vercel.app/login`.
- Fotaza2 Web 2026: `https://fotaza2-web2-2026.vercel.app/`.

Pendiente confirmar por proyecto:

- Rol desempenado.
- Tecnologias reales.
- Descripcion funcional.
- Repositorio publico, si corresponde.

Imagenes disponibles:

- Perfil: `/images/profile/fotoPerfilNahu.webp`.
- Florearte: `/images/projects/florearte.png`.
- Comarcas San Luis: `/images/projects/comarcas.png`.
- Fotaza2 Web 2026: `/images/projects/fotaza.png`.

Decision actual sobre repositorios:

- No mostrar enlaces ni placeholders de GitHub en las cards de proyectos.
- Mantener GitHub solo como link profesional general en el sitio.

Datos de despliegue confirmados por Nahuel:

- Florearte: uso de Render y MongoDB Atlas por base no relacional, con variables de entorno configuradas.
- Fotaza2: uso de Vercel y configuracion de variables de entorno.
- Comarcas San Luis: pendiente completar proceso de despliegue si se quiere mostrar detalle tecnico.

## Estructura Definitiva Propuesta

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
│   │   ├── portfolio-spec.md
│   │   ├── design-spec.md
│   │   └── accessibility-spec.md
│   ├── decisions/
│   │   └── architecture-decisions.md
│   ├── tasks/
│   │   └── implementation-plan.md
│   └── project-status.md
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── navigation/
│   │   └── projects/
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socialLinks.js
│   ├── hooks/
│   ├── pages/
│   │   ├── HomePage/
│   │   ├── ProjectsPage/
│   │   ├── ProjectDetailPage/
│   │   └── NotFoundPage/
│   ├── routes/
│   ├── styles/
│   │   ├── variables.css
│   │   ├── globals.css
│   │   └── utilities.css
│   ├── tests/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── AGENTS.md
├── README.md
├── package.json
└── vite.config.js
```

Estructura creada parcialmente:

- `src/data/projects.js`.
- `src/data/skills.js`.
- `src/data/socialLinks.js`.
- `src/styles/variables.css`.
- `src/styles/globals.css`.
- `src/styles/utilities.css`.
- `public/images/projects/`.
- `public/images/profile/`.
- `public/cv/`.

## Informacion Pendiente

- [PENDIENTE: confirmar si el rol profesional principal debe mostrarse como Desarrollador Frontend, Backend, Full Stack o Software Developer].
- CV PDF final agregado en `public/cv/nahuel-vargas-cv.pdf`.
- [PENDIENTE: agregar foto de perfil optimizada].
- [PENDIENTE: confirmar si se publicara informacion de M Studio].
- [PENDIENTE: completar proyectos con descripcion, tecnologias, estado, imagen, deploy y repositorio].
- [PENDIENTE: confirmar repositorios publicos que se pueden mostrar].
- [PENDIENTE: definir licencia].
- [PENDIENTE: confirmar dominio o URL final de Vercel].

## Ultima Actividad

- Se analizo la estructura actual del repositorio.
- Se reviso `package.json`.
- Se identifico contenido demo de Vite pendiente de limpiar.
- Se proceso el CV para extraer informacion utilizable sin inventar datos.
- Se creo documentacion inicial SDD.
- Se ejecuto `npm run lint` y finalizo sin errores.
- Se ejecuto `npm run build` y finalizo sin errores.
- Se decidio no configurar tests por ahora.
- Se reemplazo la plantilla de Vite por una primera maqueta frontend del portfolio.
- Se agregaron datos reales del CV sin publicar fecha de nacimiento ni telefono.
- Se agregaron los tres proyectos publicados aportados por Nahuel.
- Se ejecuto `npm run format`, `npm run format:check`, `npm run lint` y `npm run build` correctamente.
- Se recibio ajuste visual de paleta: azul marino, gris grafito, verde pastel y violeta pastel.
- Se solicito modo claro menos blanco, navbar mas redondeado, favicon tipo PC/joystick, skills en dos columnas, cards con miniatura, acciones verticales y footer con cuatro links chicos.
- Se actualizo la paleta visual en `src/styles/variables.css`.
- Se reemplazo `public/favicon.svg` por un icono tipo monitor/gamepad.
- Se ajusto el navbar con fondo, borde y radio mas redondeado.
- Se cambio la grilla de tecnologias a dos columnas en desktop.
- Se agrego espacio reservado para miniaturas en las cards de proyectos.
- Se dejaron las acciones de proyecto en vertical y el estado `GitHub pendiente` como texto no interactivo.
- Se agregaron cuatro links pequenos en el footer.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de los ajustes visuales.
- Se conecto la foto de perfil real en el hero.
- Se conectaron miniaturas reales para Florearte, Comarcas San Luis y Fotaza2.
- Se quitaron por completo las acciones de GitHub dentro de las cards de proyectos.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de conectar imagenes.
- Se solicito agrandar/cuadrar la foto de perfil y sumar separadores con brillo neon entre secciones.
- Se agrando la foto de perfil y se ajusto a formato cuadrado con bordes redondeados.
- Se agregaron separadores con brillo neon lateral entre secciones.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de los ajustes visuales.
- Se solicito corregir el separador neon para que el brillo sea horizontal y simetrico hacia arriba y hacia abajo.
- Se corrigio el separador neon como linea horizontal completa con sombra hacia arriba y hacia abajo.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de la correccion del separador.
- Se solicito suavizar el separador para que sea mas sombreado difuso y menos linea firme.
- Se reforzo el separador como banda de glow de un solo color, con altura y blur para que el sombreado sea visible.
- Se detecto que el separador se veia mas claro en el centro por estar limitado al contenedor y por superposicion de `::before` y `::after`.
- Se probo un separador full width con un solo pseudo-elemento por seccion para evitar doble sombreado.
- Se solicito reducir el tamano del nombre en desktop y mejorar el navbar mobile porque `NV` se veia chico.
- Se recibio publicacion de LinkedIn y notas academicas para mejorar textos orientados a busqueda laboral.
- Se actualizo la especificacion con datos confirmados de carrera desde 2020, plan 2024 TUDS, pasantia ULP, pasantia M Studio, SDD asistido por IA y Pull Requests.
- Se mejoraron textos de hero, sobre mi, portfolio, experiencia, formacion, contacto y herramientas visibles.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de actualizar contenidos.
- Se solicito agregar descarga de CV, remarcar Desarrollo de Software y preparar un espacio para un video de app Android.
- Se agrego el enlace de descarga de CV apuntando a `/cv/nahuel-vargas-cv.pdf`.
- Se remarco `Desarrollo de Software` como subtitulo principal del hero.
- Se creo la carpeta `public/videos/` con `.gitkeep` y una seccion de demo Android en estado pendiente de carga.
- Se definio que el video debe ubicarse en `public/videos/android-app-demo.mp4` cuando este disponible.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de agregar CV y demo Android.
- Se probo una variante de hero inspirada en la referencia visual enviada por Nahuel.
- Nahuel solicito volver al modelo anterior y ubicar `Descargar CV` debajo de la foto y el texto de la tarjeta de perfil.
- Se restauro la composicion anterior del hero y se dejo `Descargar CV` dentro de la tarjeta de perfil.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de restaurar el hero.
- Se solicito mover el correo a una fila inferior en contacto para alinear `Descargar CV`, `LinkedIn` y `GitHub`.
- Se agrego resumen academico con notas destacadas y optativas del plan 2024 TUDS, sin publicar legajo ni datos sensibles de las capturas.
- Se documento que el plan 2024 agrega optativas y SIU Guarani para consulta de notas e inscripcion a materias.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de actualizar contacto y formacion.
- Nahuel solicito no listar notas una por una y mostrar las capturas del plan de estudios cargadas en `public`.
- Se reemplazo la lista manual de notas por una galeria con `/images/profile/plan_estudio1.jpg` y `/images/profile/plan_estudio2.jpg`.
- Se mantuvo el texto sobre plan 2024, materias optativas y SIU Guarani.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de agregar la galeria de capturas academicas.
- Se solicito una forma de ver mejor las capturas porque las miniaturas quedaban chicas.
- Se convirtieron las capturas academicas en enlaces a la imagen original con texto `Ver grande`, abriendo en una pestana nueva para usar el zoom del navegador.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de agregar enlaces de ampliacion.
- Se solicito corregir la pantalla mobile del header porque quedaba demasiado alta y desordenada.
- Se compacto el header mobile: `NV` y boton de tema quedan en la primera fila, y la navegacion queda debajo en dos columnas.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues del ajuste mobile.
- Se solicito centrar el icono `NV` en mobile y en medidas pequenas.
- Se ajusto el header mobile a una columna para centrar `NV`, mantener la navegacion compacta y centrar el boton de tema.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de centrar la marca mobile.
- Se agrego la imagen `public/images/profile/fotoDePortadaLinkedin2.png` como fondo difuminado sutil del hero.
- Se centro la marca `NV` tambien en breakpoints intermedios menores a desktop.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de agregar el fondo del hero y ajustar el header tablet.
- Se solicito aumentar la visibilidad de la portada del hero porque estaba demasiado difuminada.
- Se redujo el blur, se aumento la opacidad y se suavizaron overlays para que la portada se perciba mejor sin tapar el texto.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de ajustar la visibilidad del fondo.
- Se solicito evitar que la portada del hero se recorte en los costados y bajarla para que no corte el nombre.
- Se cambio el fondo del hero a `contain`, ancho completo, posicion mas baja y overlays laterales suaves.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de ajustar el encuadre de la portada.
- Se solicito que la portada del hero ocupe todo el ancho y se note mas.
- Se extendio la portada a `100vw`, se uso `background-size: 100% auto`, se quito el blur y se aumento la opacidad.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de extender la portada a ancho completo.
- Se solicito volver a un fondo sin imagen porque la portada quedaba cuadrada o recortada.
- Se reemplazo la imagen de portada del hero por un efecto CSS abstracto de programacion con grilla, brillos y lineas tecnicas.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de reemplazar el fondo del hero.
- Se solicito que la linea vertical central del fondo del hero se vea como las demas y no marcada.
- Se quito la capa de gradiente que destacaba el centro, dejando solo la grilla pareja y los brillos decorativos.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de suavizar la grilla del hero.
- Se solicito reemplazar la grilla tipo planilla por un efecto mas cercano a programacion/editor.
- Se cambio el fondo del hero a paneles y snippets de codigo decorativos con CSS, sin imagen ni grilla tipo Excel.
- Se agregaron hovers suaves de flotacion a secciones, cards, botones, tags, pills, capturas academicas, footer y elementos encuadrados.
- Se agrego proteccion para `prefers-reduced-motion`, evitando desplazamientos en hovers cuando el usuario reduce movimiento.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de agregar el fondo tipo editor y hovers flotantes.
- Se solicito agregar hover flotante a los separadores entre secciones para reforzar la separacion visual.
- Se agrego efecto `hover` y `focus-within` al pseudo-elemento `.section::before`, aumentando brillo, blur y desplazamiento sutil sin agregar `div` extra.
- Se mantuvo compatibilidad con `prefers-reduced-motion` para evitar desplazamiento del separador cuando se reduce movimiento.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de agregar hover a separadores.
- Nahuel solicito quitar el hover de separadores y aplicar la flotacion a los contenedores de cada seccion.
- Se retiro el hover de `.section::before`, dejando los separadores estaticos.
- Se reforzo el hover de `.section > .container` y `.section.container` con elevacion y sombra suave.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de ajustar los hovers de seccion.
- Se solicito aumentar apenas la visibilidad de la flotacion y considerar diferencias entre fondos claros y oscuros.
- Se aumento la elevacion de contenedores y cards a `-5px` y se agregaron sombras diferenciadas por tema.
- En modo oscuro se agrego glow claro sutil; en modo claro se mantuvo sombra oscura controlada.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de ajustar contraste e intensidad de hovers.
- Se solicito que en secciones oscuras el hover sea mas claro para que se note mejor.
- Se agrego aclarado suave de fondo, borde interno y glow moderado al hover de contenedores en modo oscuro.
- En modo claro se mantuvo un efecto mas sobrio con sombra controlada.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de aclarar hovers en secciones oscuras.
- Se solicito quitar el encuadre/glow del contenedor de seccion y mantener un hover full-width simple.
- Se retiro el fondo, borde, glow, sombra y elevacion de `.section > .container`.
- Se agrego hover de color directo en `.section:hover` para que cambie el fondo de la seccion a ancho completo.
- Se limpio la regla `prefers-reduced-motion` relacionada con el hover de contenedores de seccion.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de simplificar el hover de secciones.
- Se solicito agregar al footer la misma linea de separacion visual usada entre secciones.
- Se agrego `.site-footer::before` reutilizando el separador full width con sombra suave.
- Se mantuvo el contenido del footer por encima del separador con `z-index`.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de agregar el separador al footer.
- Se detecto que el hover de secciones que tambien eran `.container` quedaba limitado y parecia cortado.
- Se movio el color de hover de seccion a una capa `.section::after` de `100vw` para que ocupe todo el ancho.
- Se mantuvo el contenido por encima de la capa de hover y los separadores estaticos.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de corregir el hover full-width.
- Se reviso el sistema final de hovers para ordenar responsabilidades: secciones con color full-width, cards/bloques con flotacion y tokens centralizados en `src/App.css`.
- Se aumento el contraste de hovers en modo oscuro sin volver a encuadrar los contenedores grandes.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de ordenar los hovers finales.
- Nahuel agrego el PDF `CVActualizado-NahuelVargas- ORIENTADO A PROGRAMACION V2.pdf` dentro de `public/cv`.
- Se copio el PDF al nombre canonico `public/cv/nahuel-vargas-cv.pdf`, que es la ruta usada por los botones de descarga.
- Se agrego verificacion de tipo `application/pdf` antes de habilitar los botones de CV, para evitar descargas `.htm` si el archivo falta o la ruta devuelve el HTML de la app.
- Se confirmo que el build contiene `dist/cv/nahuel-vargas-cv.pdf`.
- Se ejecuto `npm run format`, `npm run lint` y `npm run build` correctamente despues de corregir la descarga del CV.

## Proximo Paso

Agregar el video Android en `public/videos/android-app-demo.mp4` cuando este listo y ajustar textos/tecnologias reales de cada proyecto.
