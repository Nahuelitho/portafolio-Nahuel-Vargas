# Especificacion de Accesibilidad

## Estado

- Version: 0.1.0
- Fecha: 2026-07-25
- Estado: borrador inicial

## Objetivo

El portfolio debe ser accesible para usuarios que navegan con teclado, lectores de pantalla, dispositivos moviles y preferencias de reduccion de movimiento.

## Requisitos Generales

- Usar HTML semantico.
- Mantener un solo `h1` principal por pagina.
- Usar jerarquia correcta de encabezados.
- Garantizar navegacion por teclado.
- Mantener focus visible.
- Asegurar contraste suficiente.
- Agregar textos alternativos a imagenes informativas.
- Usar `alt=""` para imagenes decorativas.
- Asociar `label` a inputs.
- Usar `aria-label` solo cuando sea necesario.
- Usar botones reales para acciones.
- Usar enlaces reales para navegacion.
- Respetar `prefers-reduced-motion`.
- Evitar depender exclusivamente del color.

## Estructura Semantica

La aplicacion debe usar `header`, `nav`, `main`, `section`, `article` cuando corresponda y `footer`.

Cada pagina debe tener titulo principal claro y metadatos asociados.

## Navegacion por Teclado

- Todos los enlaces y botones deben ser alcanzables con `Tab`.
- El orden de tabulacion debe seguir el orden visual.
- El menu movil debe abrirse, recorrerse y cerrarse con teclado.
- El menu movil debe cerrar con `Escape`.
- El foco debe gestionarse correctamente al abrir y cerrar el menu movil.
- No usar `div` o `span` como botones.

## Focus Visible

Todo control interactivo debe tener foco visible: enlaces, botones, boton de tema, boton de menu movil, campos de formulario y tarjetas con enlaces.

No eliminar `outline` sin reemplazo equivalente.

## Contraste

Verificar texto secundario, estados hover, estados focus, botones sobre fondos de color y modo oscuro.

## Imagenes

- Imagen de perfil informativa: `alt="Nahuel Dario Vargas"` o descripcion equivalente.
- Imagen decorativa: `alt=""`.
- Capturas de proyectos: `alt` descriptivo con nombre del proyecto y contexto.
- No usar texto importante solo dentro de imagenes.

## Formularios

Si se agrega formulario de contacto, cada campo debe tener `label`, se debe informar claramente si no envia mensajes reales y no se debe simular envio exitoso sin backend o servicio externo real.

## Enlaces y Botones

- No renderizar enlaces vacios.
- No usar `href="#"` para acciones falsas.
- Usar `button` para acciones como abrir menu o cambiar tema.
- Usar `a` para navegacion o enlaces externos.

## Menu Movil

- Boton con texto accesible.
- Estado expandido indicado con `aria-expanded`.
- Asociacion con el panel mediante `aria-controls` cuando corresponda.
- Cierre con `Escape`.
- Cierre al seleccionar una ruta.

## Modo Claro y Oscuro

El boton debe comunicar el tema que se activara, por ejemplo `Cambiar a modo oscuro` o `Cambiar a modo claro`.

## Movimiento Reducido

Incluir una regla global que respete `prefers-reduced-motion` y reduzca animaciones/transiciones cuando el usuario lo solicite.

## Validacion Manual Minima

Validar navegacion completa con teclado, focus visible, menu movil con teclado y Escape, rutas inexistentes, enlaces vacios ocultos, `alt` correcto y contraste basico en modo claro y oscuro.

Tests automatizados futuros, cuando el front este mas estable:

- Navegacion principal.
- Texto accesible de `ThemeToggle`.
- `ProjectCard` oculta enlaces vacios o privados.
- Proyecto inexistente muestra 404.

## Pendientes

- [PENDIENTE: validar contraste de la paleta final].
- [PENDIENTE: validar navegacion por teclado cuando exista la interfaz].
- [PENDIENTE: revisar textos alternativos cuando se agreguen imagenes reales].
