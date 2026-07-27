# Plan de Implementacion

## Estado General

- Version: 0.1.0
- Fecha: 2026-07-25
- Metodologia: Spec-Driven Development
- Estado general: fase 2 iniciada con primera maqueta frontend

## Convenciones de Estado

- Pendiente: no iniciado.
- En progreso: tarea activa.
- Bloqueada: requiere informacion o decision.
- Completada: implementada y validada.

## Fase 1: Documentacion y Configuracion

### Tarea 1.1: Crear documentacion SDD inicial

Objetivo: crear especificaciones, decisiones, plan, estado, AGENTS y README iniciales.

Archivos afectados: `docs/specifications/portfolio-spec.md`, `docs/specifications/design-spec.md`, `docs/specifications/accessibility-spec.md`, `docs/decisions/architecture-decisions.md`, `docs/tasks/implementation-plan.md`, `docs/project-status.md`, `AGENTS.md`, `README.md`.

Criterios de aceptacion: los documentos existen, la metodologia SDD queda explicada, el alcance de version 1 queda definido, la informacion faltante queda marcada con placeholders y no se implementa interfaz.

Dependencias: especificacion inicial provista por Nahuel.

Pasos de validacion: revisar archivos creados, confirmar que no se modifico la interfaz, ejecutar `npm run lint`, ejecutar `npm run build` y esperar aprobacion antes de avanzar. `npm run test:run` queda pendiente porque Vitest aun no esta configurado.

Estado: completada.

### Tarea 1.2: Configurar Prettier

Objetivo: agregar configuracion y scripts de formato.

Archivos afectados: `package.json`, `.prettierrc` o equivalente, `.prettierignore` si corresponde.

Criterios de aceptacion: `npm run format` y `npm run format:check` funcionan.

Dependencias: aprobacion de la tarea 1.1.

Pasos de validacion: ejecutar `npm run format:check`.

Estado: completada.

### Tarea 1.3: Configurar Vitest y React Testing Library

Objetivo: preparar entorno de pruebas para componentes React.

Archivos afectados: `package.json`, `vite.config.js`, `src/tests`, setup de tests si corresponde.

Criterios de aceptacion: `npm run test` y `npm run test:run` funcionan cuando existan componentes y flujos estables para validar.

Dependencias: aprobacion de la tarea 1.1.

Pasos de validacion: ejecutar `npm run test:run`.

Estado: bloqueada por decision de proyecto; no se configurara por ahora.

### Tarea 1.4: Revisar ESLint/Oxlint

Objetivo: confirmar estrategia de lint y ajustar scripts si hace falta.

Archivos afectados: `package.json`, `.oxlintrc.json`, configuracion adicional solo si se justifica.

Criterios de aceptacion: `npm run lint` finaliza sin errores y no se silencian reglas sin motivo documentado.

Dependencias: aprobacion de la tarea 1.1.

Pasos de validacion: ejecutar `npm run lint`.

Estado: completada.

### Tarea 1.5: Limpiar plantilla inicial de Vite

Objetivo: reemplazar contenido demo por estructura base del portfolio.

Archivos afectados: `src/App.jsx`, `src/App.css`, `src/index.css`, `src/assets`, `index.html`.

Criterios de aceptacion: no quedan textos demo de Vite, no se rompe la aplicacion y `html lang` se actualiza a `es`.

Dependencias: aprobacion de la tarea 1.1.

Pasos de validacion: ejecutar `npm run lint` y `npm run build`.

Estado: completada.

## Fase 2: Sistema Visual

### Tarea 2.1: Crear variables CSS y estilos globales

Objetivo: definir base visual, temas, tipografia, reset y utilidades minimas.

Archivos afectados: `src/styles/variables.css`, `src/styles/globals.css`, `src/styles/utilities.css`, `src/main.jsx`.

Criterios de aceptacion: variables principales definidas, modo claro y oscuro con tokens propios y sin valores repetidos innecesariamente.

Dependencias: fase 1.

Pasos de validacion: ejecutar `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 2.2: Crear componentes comunes iniciales

Objetivo: crear componentes reutilizables base.

Archivos afectados: `src/components/common/ButtonLink.jsx`, `src/components/common/SectionTitle.jsx`, `src/components/common/TechnologyTag.jsx`, `src/components/common/EmptyState.jsx`, `src/components/common/ErrorBoundary.jsx`.

Criterios de aceptacion: componentes pequenos, enfocados, sin estilos inline y sin enlaces vacios renderizados.

Dependencias: tarea 2.1.

Pasos de validacion: ejecutar `npm run lint` y agregar tests cuando aplique.

Estado: completada parcialmente; maqueta inicial implementada sin componentes separados definitivos.

### Tarea 2.3: Implementar modo claro y oscuro

Objetivo: permitir alternar tema respetando `localStorage` y `prefers-color-scheme`.

Archivos afectados: `src/hooks/useTheme.js`, `src/components/common/ThemeToggle.jsx`, `src/styles/variables.css`, `index.html` si se agrega script anti parpadeo.

Criterios de aceptacion: lee preferencia guardada, respeta sistema, guarda seleccion manual y el boton tiene texto accesible.

Dependencias: tarea 2.1.

Pasos de validacion: ejecutar lint, validacion manual de tema y build.

Estado: completada parcialmente; modo claro/oscuro funcional en maqueta inicial.

## Fase 3: Navegacion

### Tarea 3.1: Configurar router

Objetivo: crear rutas principales y fallback 404.

Archivos afectados: `src/routes`, `src/App.jsx`, `src/pages`, `vercel.json` si corresponde.

Criterios de aceptacion: `/`, `/projects`, `/projects/:slug`, `/404` y rutas desconocidas funcionan; recarga en rutas internas funciona en Vercel.

Dependencias: fase 2 basica.

Pasos de validacion: lint, validacion manual de rutas y build.

Estado: pendiente; la maqueta actual usa navegacion por anclas y el router queda para una tarea posterior.

### Tarea 3.2: Crear Header, Navigation y MobileMenu

Objetivo: implementar navegacion responsive accesible.

Archivos afectados: `src/components/layout/Header.jsx`, `src/components/navigation/Navigation.jsx`, `src/components/navigation/MobileMenu.jsx`.

Criterios de aceptacion: menu movil accesible, cierra con Escape, no hay enlaces vacios e incluye CV solo si existe archivo o placeholder controlado.

Dependencias: tarea 3.1.

Pasos de validacion: prueba manual con teclado, lint y build.

Estado: completada parcialmente; header responsive inicial implementado, menu movil dedicado queda pendiente.

### Tarea 3.3: Crear Footer y pagina 404

Objetivo: cerrar estructura global de navegacion.

Archivos afectados: `src/components/layout/Footer.jsx`, `src/pages/NotFoundPage`.

Criterios de aceptacion: footer muestra ano actual dinamico y 404 tiene mensaje claro con enlace de retorno.

Dependencias: tarea 3.1.

Pasos de validacion: validacion manual de 404 y lint.

Estado: completada parcialmente; footer inicial implementado, pagina 404 queda pendiente.

## Fase 4: Pagina Principal

### Tarea 4.1: Crear Hero y Sobre Mi

Objetivo: presentar perfil inicial con contenido confirmado o placeholders.

Archivos afectados: `src/pages/HomePage` y componentes de seccion necesarios.

Criterios de aceptacion: no se inventan datos, CTA funcionan e imagen opcional tiene `alt` correcto si existe.

Dependencias: fase 3.

Pasos de validacion: lint y prueba responsive basica.

Estado: completada.

### Tarea 4.2: Crear Habilidades y Experiencia/Educacion

Objetivo: mostrar habilidades, formacion y experiencia del CV con redaccion profesional.

Archivos afectados: `src/data/skills.js`, `src/pages/HomePage`.

Criterios de aceptacion: tecnologias agrupadas por categoria, niveles no inventados y experiencia no relacionada a desarrollo tratada con aprobacion.

Dependencias: confirmacion de contenido.

Pasos de validacion: revision manual de contenido y lint.

Estado: completada.

### Tarea 4.3: Crear Contacto

Objetivo: mostrar canales profesionales sin simular formularios.

Archivos afectados: `src/data/socialLinks.js`, `src/pages/HomePage`.

Criterios de aceptacion: GitHub y LinkedIn visibles, correo solo si se aprueba publicar y no hay formulario falso.

Dependencias: confirmacion de correo publico.

Pasos de validacion: lint y prueba manual de enlaces.

Estado: completada.

### Tarea 4.4: Actualizar contenido academico y profesional

Objetivo: mejorar textos del portfolio con la publicacion de LinkedIn y notas academicas aportadas por Nahuel, manteniendo una redaccion profesional orientada a busqueda laboral.

Archivos afectados: `docs/specifications/portfolio-spec.md`, `src/App.jsx`, `src/data/skills.js`, `docs/project-status.md`.

Criterios de aceptacion: no se inventa informacion personal, se evita publicar datos sensibles, se actualiza la situacion academica sin afirmar cantidad exacta de materias pendientes si no corresponde al nuevo plan, y los textos quedan enfocados en oportunidad laboral.

Dependencias: contenido confirmado por Nahuel en publicacion y notas academicas.

Pasos de validacion: revision manual de contenido, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.5: Agregar descarga de CV y espacio para demo Android

Objetivo: permitir descarga de CV desde el portfolio, remarcar Desarrollo de Software como foco principal y preparar una seccion para publicar el video de una app Android.

Archivos afectados: `docs/specifications/portfolio-spec.md`, `src/App.jsx`, `src/App.css`, `public/videos/.gitkeep`, `docs/project-status.md`.

Criterios de aceptacion: el boton de CV apunta a `/cv/nahuel-vargas-cv.pdf`, no se publican fecha de nacimiento ni celular en el contenido visible, el hero remarca Desarrollo de Software y la seccion de video no muestra reproductores rotos si el archivo aun no fue cargado.

Dependencias: Nahuel debe agregar el PDF final en `public/cv/nahuel-vargas-cv.pdf` y el video en `public/videos/android-app-demo.mp4` cuando esten listos.

Pasos de validacion: revision manual de enlaces, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.6: Ubicar descarga de CV en tarjeta de perfil

Objetivo: mantener el modelo de hero existente y ubicar la accion `Descargar CV` debajo de la foto y el texto de la tarjeta de perfil.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.jsx`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: el CV queda como CTA dentro de la tarjeta de perfil, debajo de la foto y el resumen; el header mantiene la navegacion del modelo anterior; se mantiene accesibilidad basica y responsive.

Dependencias: indicacion visual aportada por Nahuel.

Pasos de validacion: revision manual responsive, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.7: Ajustar contacto y sumar notas academicas

Objetivo: mover el correo a una fila inferior en contacto para alinear CV, LinkedIn y GitHub, y sumar un resumen de notas academicas confirmadas del plan 2024 TUDS.

Archivos afectados: `docs/specifications/portfolio-spec.md`, `src/App.jsx`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: el correo queda debajo de las acciones profesionales principales, no se publica legajo ni datos sensibles de las capturas, y las notas se muestran como resumen academico verificable sin exagerar el estado de la carrera.

Dependencias: notas academicas aportadas por Nahuel.

Pasos de validacion: revision manual de contenido, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.8: Mostrar notas academicas como capturas

Objetivo: reemplazar la lista manual de notas por capturas oficiales del plan de estudios cargadas en `public`.

Archivos afectados: `docs/specifications/portfolio-spec.md`, `src/App.jsx`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: no se listan calificaciones una por una, se muestran las capturas `plan_estudio1.jpg` y `plan_estudio2.jpg` con textos alternativos descriptivos, y se mantiene el texto sobre plan 2024, optativas y SIU Guarani.

Dependencias: capturas aportadas por Nahuel en `public/images/profile/`.

Pasos de validacion: revision manual de contenido, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.9: Permitir ver capturas academicas en grande

Objetivo: hacer que las capturas de notas funcionen como miniaturas que abren la imagen original en una pestana nueva para poder hacer zoom.

Archivos afectados: `docs/specifications/portfolio-spec.md`, `src/App.jsx`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: cada captura tiene enlace a la imagen completa, texto visible `Ver grande`, texto alternativo descriptivo y no se agrega JavaScript o modal innecesario.

Dependencias: capturas existentes en `public/images/profile/`.

Pasos de validacion: revision manual de enlaces, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.10: Compactar header mobile

Objetivo: corregir la pantalla mobile del header para reducir altura, alinear `NV` con el boton de tema y ordenar la navegacion en dos columnas.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: en mobile el header no queda excesivamente alto, la marca y el boton de tema comparten primera fila, la navegacion queda compacta y los enlaces siguen siendo tactiles y accesibles.

Dependencias: captura mobile aportada por Nahuel.

Pasos de validacion: revision manual mobile, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.11: Centrar marca NV en mobile

Objetivo: ajustar el header en pantallas pequenas para que la marca `NV` quede centrada y no pegada al borde izquierdo.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: en mobile la marca queda centrada, la navegacion conserva grilla compacta, el boton de tema queda centrado y los controles siguen siendo tactiles.

Dependencias: captura mobile aportada por Nahuel.

Pasos de validacion: revision manual mobile, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.12: Agregar portada LinkedIn difuminada y centrar NV en tablet

Objetivo: incorporar la imagen de portada de LinkedIn como fondo difuminado del hero y centrar la marca `NV` tambien en medidas intermedias.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: la portada se ve como fondo suave sin tapar texto, no agrega scroll horizontal, `NV` queda centrado en breakpoints menores a desktop y la navegacion sigue usable.

Dependencias: imagen `public/images/profile/fotoDePortadaLinkedin2.png` aportada por Nahuel.

Pasos de validacion: revision manual de hero y header, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.13: Aumentar visibilidad de portada del hero

Objetivo: ajustar blur, opacidad y overlays de la portada de LinkedIn para que se perciba mejor como fondo del hero sin perder legibilidad.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: la imagen de portada se nota visualmente, el texto principal mantiene contraste suficiente y no aparece scroll horizontal.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual del hero, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.14: Ajustar encuadre de portada del hero

Objetivo: evitar que la portada de LinkedIn se recorte en los costados y bajarla dentro del hero para que no corte el nombre.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: la imagen se ve completa horizontalmente, queda ubicada mas abajo, no tapa el nombre ni el texto principal y no genera scroll horizontal.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual del hero, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.15: Extender portada del hero a ancho completo

Objetivo: hacer que la portada del hero ocupe el ancho real de la pantalla sin recortar sus costados y con mayor visibilidad.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: la portada usa `100vw`, no se recorta lateralmente, se percibe claramente y no genera scroll horizontal.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual del hero, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.16: Reemplazar portada por efecto de programacion

Objetivo: volver a un fondo sin imagen en el hero y simular una estetica de programacion con CSS para evitar recortes y bloques cuadrados.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: no se usa la portada de LinkedIn como background del hero, el fondo tiene efecto tecnico/programacion, no tapa contenido y no genera scroll horizontal.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual del hero, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.17: Suavizar grilla del fondo del hero

Objetivo: quitar la linea vertical central marcada del efecto de programacion para que la grilla se vea pareja.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: no hay una linea central destacada, el fondo sigue teniendo efecto tecnico sutil y no afecta legibilidad.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual del hero, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.18: Fondo tipo editor y hovers flotantes

Objetivo: reemplazar la grilla del hero por una estetica mas cercana a editor/codigo y agregar hovers suaves de flotacion a secciones, cards y elementos encuadrados.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: el hero no parece planilla, el efecto comunica programacion, las cards/secciones tienen hover suave, los elementos chicos tienen hover mas leve y se respeta `prefers-reduced-motion`.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual del hero y hovers, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.19: Agregar hover flotante a separadores

Objetivo: sumar un efecto hover/focus-within a los separadores entre secciones para reforzar la separacion visual y la sensacion de flotacion.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: los separadores reaccionan suavemente al hover de cada seccion, no se agregan `div` innecesarios, no se tapa contenido y se respeta `prefers-reduced-motion`.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual de separadores, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.20: Quitar hover de separadores y mantener flotacion en contenedores

Objetivo: retirar el efecto hover del separador entre secciones y conservar la sensacion de flotacion solo en contenedores, cards y bloques encuadrados.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: los separadores quedan estaticos, al pasar el mouse por una seccion se levanta su contenedor, y `prefers-reduced-motion` sigue evitando desplazamientos.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual de secciones y separadores, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.21: Ajustar intensidad y contraste de hovers

Objetivo: aumentar apenas la flotacion de contenedores y diferenciar sombras/brillos entre modo claro y oscuro.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: el hover de secciones y cards se nota mas sin exagerar, los fondos oscuros usan glow claro sutil, los fondos claros usan sombra oscura controlada y se mantiene `prefers-reduced-motion`.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual en modo claro/oscuro, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.22: Aclarar hover de secciones oscuras

Objetivo: hacer mas perceptible el hover de contenedores sobre fondos oscuros agregando aclarado sutil de fondo, borde interno y glow moderado.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: en fondos oscuros el hover se nota con un aclarado suave, en fondos claros se mantiene sobrio, no se alteran separadores y se respeta `prefers-reduced-motion`.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual en modo oscuro y claro, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.23: Simplificar hover de secciones full-width

Objetivo: quitar el encuadre/glow del contenedor de seccion y dejar un cambio de color full-width al pasar el mouse.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: el contenedor interno no queda encuadrado, la seccion ocupa todo el ancho como antes, el hover solo cambia color de fondo y los hovers de cards/botones se mantienen.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual en modo oscuro y claro, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.24: Agregar separador superior al footer

Objetivo: sumar al footer la misma linea/sombra de separacion usada entre secciones.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: el footer tiene separador superior full width, se reutiliza el estilo visual existente, no se agrega markup innecesario y no se genera scroll horizontal.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual del footer, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.25: Corregir hover full-width en secciones con container

Objetivo: evitar que el color de hover de secciones que tambien usan `.container` quede cortado por el ancho del contenedor.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: el hover de color se ve a ancho completo en todas las secciones, no encuadra el contenido, no genera scroll horizontal y mantiene los separadores estaticos.

Dependencias: feedback visual de Nahuel.

Pasos de validacion: revision manual en secciones `Sobre mi` y `Experiencia/Formacion`, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.26: Ordenar sistema final de hovers

Objetivo: revisar y estabilizar hovers por tipo de elemento y contraste, manteniendo secciones full width por color y cards con flotacion.

Archivos afectados: `docs/specifications/design-spec.md`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: los hovers de seccion se notan en fondos oscuros y claros sin encuadrar, los hovers de cards se mantienen visibles, los valores quedan centralizados y se respeta `prefers-reduced-motion`.

Dependencias: feedback visual de Nahuel antes de preparar push.

Pasos de validacion: revision manual de todas las secciones, ejecutar `npm run format`, `npm run lint` y `npm run build`.

Estado: completada.

### Tarea 4.27: Proteger descarga de CV inexistente

Objetivo: evitar que los botones de CV descarguen el HTML de la app cuando `public/cv/nahuel-vargas-cv.pdf` aun no existe.

Archivos afectados: `docs/specifications/portfolio-spec.md`, `src/App.jsx`, `src/App.css`, `docs/project-status.md`.

Criterios de aceptacion: si la ruta del CV no responde un PDF real, los botones muestran estado pendiente y no descargan archivos `.htm`; si responde `application/pdf`, los botones descargan `/cv/nahuel-vargas-cv.pdf` normalmente.

Dependencias: PDF final agregado por Nahuel y copiado al nombre canonico `public/cv/nahuel-vargas-cv.pdf`.

Pasos de validacion: confirmar que existe `public/cv/nahuel-vargas-cv.pdf`, ejecutar `npm run format`, `npm run lint` y `npm run build`, y confirmar que el build genera `dist/cv/nahuel-vargas-cv.pdf`.

Estado: completada.

## Fase 5: Proyectos

### Tarea 5.1: Crear modelo de datos de proyectos

Objetivo: crear `projects.js` con placeholders claros y estructura estable.

Archivos afectados: `src/data/projects.js`.

Criterios de aceptacion: estructura coincide con especificacion, placeholders identificados y no se inventan proyectos.

Dependencias: fase 2.

Pasos de validacion: validacion manual de filtrado de destacados y lint.

Estado: completada parcialmente; datos iniciales agregados con links aportados por Nahuel.

### Tarea 5.2: Crear ProjectCard y ProjectGrid

Objetivo: mostrar proyectos y ocultar enlaces invalidos.

Archivos afectados: `src/components/projects/ProjectCard.jsx`, `src/components/projects/ProjectGrid.jsx`.

Criterios de aceptacion: no muestra repositorio privado, no muestra links vacios e imagen tiene fallback razonable.

Dependencias: tarea 5.1.

Pasos de validacion: validacion manual de `ProjectCard` y lint.

Estado: completada parcialmente; tarjetas implementadas dentro de la maqueta inicial.

### Tarea 5.3: Crear listado y detalle de proyectos

Objetivo: implementar `/projects` y `/projects/:slug`.

Archivos afectados: `src/pages/ProjectsPage`, `src/pages/ProjectDetailPage`.

Criterios de aceptacion: listado carga desde datos, detalle busca por slug y slug inexistente muestra 404.

Dependencias: tarea 5.2.

Pasos de validacion: validacion manual de detalle, proyecto inexistente y build.

Estado: pendiente.

## Fase 6: Calidad

### Tarea 6.1: Tests automatizados futuros

Objetivo: cubrir comportamientos clave cuando la interfaz este mas estable.

Archivos afectados: `src/tests` o tests junto a componentes.

Criterios de aceptacion: tests de render, navegacion, `ProjectCard`, destacados, detalle por slug, proyecto inexistente, `ThemeToggle` y 404 cuando se decida incorporar testing.

Dependencias: fases 3, 4 y 5.

Pasos de validacion: ejecutar `npm run test:run` cuando exista el script.

Estado: bloqueada por decision de proyecto; no se implementa por ahora.

### Tarea 6.2: Accesibilidad, responsive y SEO

Objetivo: revisar requisitos transversales.

Archivos afectados: componentes, paginas, `index.html`, `public/robots.txt`, `public/sitemap.xml`.

Criterios de aceptacion: navegable con teclado, sin scroll horizontal, metadatos basicos y `html lang="es"`.

Dependencias: version funcional.

Pasos de validacion: probar 320, 375, 768, 1024 y 1440px; lint y build.

Estado: pendiente.

## Fase 7: Despliegue

### Tarea 7.1: Configurar Vercel

Objetivo: asegurar deploy correcto de SPA.

Archivos afectados: `vercel.json` si corresponde, `README.md`, `docs/project-status.md`.

Criterios de aceptacion: rutas internas recargan sin 404 y build de Vercel usa configuracion correcta.

Dependencias: version 1 validada localmente.

Pasos de validacion: ejecutar `npm run build` y probar deploy preview cuando exista.

Estado: pendiente.

### Tarea 7.2: Checklist final Version 1

Objetivo: validar criterios de aceptacion generales.

Archivos afectados: `docs/project-status.md`.

Criterios de aceptacion: lint y build correctos; README y documentacion actualizados; sin secretos versionados. Tests automatizados quedan fuera del cierre actual salvo nueva decision.

Dependencias: todas las fases anteriores.

Pasos de validacion: ejecutar comandos finales y documentar resultados.

Estado: pendiente.
