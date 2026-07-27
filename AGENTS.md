# AGENTS.md

Reglas permanentes para trabajar en este proyecto.

## Metodologia

- Leer primero los documentos de `docs/specifications`.
- No implementar funcionalidades que no esten documentadas.
- Cuando aparezca una nueva necesidad, actualizar primero la especificacion correspondiente.
- Actualizar `docs/tasks/implementation-plan.md` antes de implementar cambios relevantes.
- Actualizar `docs/project-status.md` al cerrar una etapa.
- Implementar una tarea pequena por vez.
- Ejecutar pruebas antes de considerar completa una tarea.
- Ejecutar `npm run build` antes de cerrar una etapa.

## Arquitectura

- No modificar arquitectura sin documentar la decision en `docs/decisions/architecture-decisions.md`.
- No agregar backend, base de datos, autenticacion o blog en version 1.
- No usar dependencias innecesarias.
- Antes de agregar una dependencia, documentar problema, alternativas e impacto.
- Mantener componentes enfocados en una responsabilidad.
- No crear componentes gigantes.
- No duplicar logica.
- No duplicar estilos.
- Usar nombres descriptivos.

## Contenido Personal

- No inventar informacion personal, experiencia o proyectos.
- Usar placeholders claramente identificados cuando falten datos.
- No presentar proyectos de terceros como propios.
- No publicar datos sensibles sin aprobacion explicita.
- No incluir claves, tokens, correos privados ni secretos.
- No guardar informacion sensible dentro de `src`.

Placeholders permitidos:

- `[PENDIENTE: agregar descripcion personal]`.
- `[PENDIENTE: agregar URL del proyecto]`.
- `[PENDIENTE: agregar repositorio]`.
- `[PENDIENTE: agregar imagen]`.

## Entorno y Secretos

- No subir archivos `.env`.
- Mantener actualizado `.env.example` si se incorpora un servicio externo.
- Verificar que `.env` este en `.gitignore` antes de usar variables de entorno.
- No escribir valores reales de variables sensibles en documentacion, codigo ni tests.

## Codigo

- Priorizar HTML semantico.
- Mantener navegacion por teclado.
- Agregar textos alternativos a imagenes.
- No usar botones `div`.
- No usar enlaces vacios.
- Evitar estilos inline.
- No dejar `console.log`.
- No dejar codigo comentado sin justificacion.
- No silenciar errores de lint sin explicar el motivo.
- No modificar archivos ajenos a la tarea actual.
- No realizar refactors grandes durante una tarea pequena.

## Estilos

- Usar CSS tradicional organizado por archivos.
- Usar CSS Variables para colores, espaciado, tipografias, sombras y bordes.
- Evitar valores arbitrarios repetidos.
- Mantener modo claro y oscuro con variables.
- Respetar `prefers-reduced-motion`.

## Accesibilidad

- Usar un solo `h1` principal por pagina.
- Mantener jerarquia correcta de encabezados.
- Mantener focus visible.
- Usar labels asociados a inputs.
- Usar `aria-label` solo cuando sea necesario.
- Usar botones reales para acciones.
- Usar enlaces reales para navegacion.
- Menu movil operable con teclado.
- Menu movil debe cerrar con `Escape`.
- Evitar depender exclusivamente del color.

## Validacion

- Ejecutar `npm run lint` antes de sugerir commits o cerrar etapas.
- Ejecutar `npm run test:run` cuando los tests esten configurados.
- Ejecutar `npm run build` antes de cerrar una etapa.
- Informar claramente que archivos fueron creados o modificados.

## Git

- Usar commits pequenos y descriptivos cuando el usuario lo pida.
- No ejecutar `git push` automaticamente.
- No revertir cambios ajenos sin aprobacion explicita.
- No mezclar multiples funcionalidades grandes en un solo commit.
