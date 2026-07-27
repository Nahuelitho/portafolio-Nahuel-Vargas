# Especificacion de Diseno

## Estado

- Version: 0.1.0
- Fecha: 2026-07-25
- Estado: borrador inicial

## Objetivo Visual

El portfolio debe verse profesional, moderno, limpio y legible. Debe evitar apariencia generica de plantilla y comunicar perfil de desarrollador de software.

## Principios

- Mobile first.
- Contenido antes que decoracion.
- Contraste suficiente.
- Espaciado consistente.
- Componentes reutilizables.
- Animaciones sutiles y opcionales.
- Sin estilos inline salvo excepcion justificada.
- Sin valores arbitrarios repetidos cuando puedan ser variables CSS.

## Paleta de Colores

Paleta definida por Nahuel:

- Azul marino como base principal.
- Gris grafito para superficies y textos fuertes.
- Acentos sutiles en verde pastel.
- Acentos secundarios en violeta pastel.

Modo claro propuesto, sin blanco puro dominante:

- Fondo: `#d8dee8`.
- Superficie: `#e8ecf3`.
- Superficie fuerte: `#cdd6e4`.
- Texto principal: `#171b22`.
- Texto secundario: `#46505e`.
- Primario marino: `#14213d`.
- Primario hover: `#0f1a31`.
- Verde pastel: `#9fd8cb`.
- Violeta pastel: `#c9b8f2`.
- Borde: `#aab7c8`.

Modo oscuro propuesto:

- Fondo: `#07111f`.
- Superficie: `#101a29`.
- Superficie fuerte: `#172235`.
- Texto principal: `#eef3fb`.
- Texto secundario: `#b7c2d1`.
- Primario marino claro: `#7aa7d9`.
- Verde pastel: `#9fd8cb`.
- Violeta pastel: `#c9b8f2`.
- Borde: `#2b3e59`.

## Variables CSS Obligatorias

Crear `src/styles/variables.css` con variables como:

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-text-muted: #475569;
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-border: #dbe3ef;
  --shadow-small: 0 1px 2px rgba(15, 23, 42, 0.08);
  --shadow-medium: 0 12px 30px rgba(15, 23, 42, 0.12);
  --border-radius-small: 0.5rem;
  --border-radius-medium: 1rem;
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

## Tipografias

Usar fuentes del sistema para rendimiento y legibilidad:

- Texto: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Codigo: `ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace`.

Jerarquia inicial:

- `h1`: 2.25rem mobile, hasta 4rem desktop.
- `h2`: 1.75rem mobile, hasta 2.5rem desktop.
- `h3`: 1.25rem a 1.5rem.
- Texto base: 1rem.
- Texto pequeno: 0.875rem.

## Espaciado, Bordes y Sombras

Usar sistema base con `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`, `--spacing-2xl` y `--spacing-3xl`.

Las tarjetas y botones deben usar bordes suaves, sombras sutiles y estados hover/focus consistentes.

## Layout y Breakpoints

- Contenedor principal con ancho maximo entre `1120px` y `1200px`.
- Secciones con `padding-inline` consistente.
- Grids responsive para proyectos y habilidades.
- Verificar 320px, 375px, 768px, 1024px y 1440px.
- Breakpoints sugeridos: 480px, 768px, 1024px y 1280px.

## Responsive

Requisitos:

- Sin scroll horizontal.
- Menu movil accesible.
- Tarjetas adaptables.
- Imagenes responsivas.
- Textos legibles.
- Botones con superficie tactil suficiente.
- Contenedor con ancho maximo.
- Espaciados coherentes.

## Estados Interactivos

- Hover: cambios sutiles de color, borde o elevacion.
- Focus: usar `:focus-visible` con anillo visible.
- Active: feedback visual breve.
- Disabled: evitar botones deshabilitados si la accion no existe; preferir no renderizar enlaces vacios.

## Modo Oscuro

Comportamiento esperado:

1. Leer preferencia guardada en `localStorage`.
2. Si no existe, respetar `prefers-color-scheme`.
3. Permitir cambio manual.
4. Guardar seleccion.
5. Evitar parpadeos de tema cuando sea razonablemente posible.

El modo oscuro debe usar variables CSS y no duplicar estilos completos.

## Imagenes y Animaciones

- Usar WebP o AVIF cuando sea posible.
- Evitar imagenes enormes.
- Usar `loading="lazy"` fuera de la primera pantalla.
- Mantener dimensiones definidas para reducir layout shift.
- Respetar `prefers-reduced-motion`.
- Evitar animaciones pesadas o constantes.

## Pendientes de Decision Visual

- [PENDIENTE: confirmar foto de perfil].
- [PENDIENTE: confirmar capturas o imagenes de proyectos].

## Ajustes Visuales Solicitados

- Navbar con bordes redondeados y sin apariencia rectangular cortada.
- Modo claro menos blanco y mas descansado visualmente.
- Favicon/icono de navegador relacionado a PC o joystick.
- Seccion de tecnologias en dos columnas cuando el ancho lo permita.
- Cards de proyectos con espacio reservado para miniatura.
- Acciones de proyecto en vertical.
- Footer con cuatro links pequenos.
- Foto de perfil mas grande y cuadrada para mejorar reconocimiento.
- Separaciones de seccion full width con un solo sombreado suave por corte, evitando superposicion entre secciones.
- Footer con separador superior full width usando el mismo sombreado suave que las secciones.
- Mantener el modelo de hero existente con texto principal y tarjeta de perfil.
- Ubicar `Descargar CV` debajo de la foto y el resumen de la tarjeta de perfil.
- Remarcar `Desarrollo de Software` como foco visual principal sin cambiar la composicion general aprobada.
- Header mobile compacto: marca y boton de tema en la primera fila, navegacion debajo en dos columnas con menor altura y sin espacios excesivos.
- En mobile y anchos chicos, la marca `NV` debe quedar centrada para evitar que se vea pegada al borde izquierdo.
- En tablet y anchos menores a desktop, la marca `NV` tambien debe centrarse para evitar que se pegue a una orilla.
- Descartar la portada de LinkedIn como fondo del hero porque genera recortes o apariencia cuadrada.
- Simular un efecto de programacion en el hero con CSS: paneles tipo editor, lineas de codigo y snippets monoespaciados, sin imagen de fondo ni grilla tipo planilla.
- El efecto debe ser decorativo, no afectar legibilidad y no generar scroll horizontal.
- La grilla del hero debe ser pareja, sin una linea vertical central marcada que distraiga del contenido.
- Secciones, cards y elementos encuadrados deben tener hover suave con sensacion de flotacion. Los contenedores grandes pueden moverse apenas mas que pills/tags/botones internos.
- Los hovers deben respetar `prefers-reduced-motion` evitando desplazamientos cuando el usuario reduce movimiento.
- Los separadores entre secciones deben mantenerse estaticos; el efecto de flotacion debe aplicarse a los contenedores/cards de cada seccion, no al brillo separador.
- El hover de secciones debe ser simple y a ancho completo: cambiar suavemente el color de fondo de la seccion, sin encuadrar el contenedor ni agregar borde/glow.
- La flotacion queda para cards, botones y bloques encuadrados internos; las secciones completas solo cambian de color.
- En secciones que tambien son `.container`, el hover debe seguir viendose full width y no limitado/cortado por el ancho del contenedor.
- El sistema de hover debe quedar estable y ordenado con tokens reutilizables: secciones con cambio de color full width, cards con flotacion, y variantes mas claras en fondos oscuros.
