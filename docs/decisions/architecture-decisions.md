# Decisiones de Arquitectura

## Estado

- Version: 0.1.0
- Fecha: 2026-07-25
- Estado: borrador inicial

## ADR-001: React con Vite

Estado: aceptada.

Contexto: el repositorio ya esta creado con Vite y React. El objetivo es construir una SPA liviana, profesional y desplegable en Vercel.

Decision: usar React JS con Vite como base del proyecto.

Consecuencias: desarrollo local rapido, build simple y necesidad de configurar fallback para rutas internas.

## ADR-002: Sin Backend ni Base de Datos en Version 1

Estado: aceptada.

Contexto: el portfolio necesita mostrar contenido estatico.

Decision: no usar backend ni base de datos en la version 1. El contenido se administrara en `src/data` y archivos estaticos dentro de `public`.

Consecuencias: menor complejidad y cambios de contenido mediante archivos y redespliegue.

## ADR-003: CSS Tradicional con Variables

Estado: aceptada.

Contexto: la especificacion solicita CSS tradicional y no usar Tailwind CSS.

Decision: usar archivos CSS separados por responsabilidades y variables globales en `src/styles/variables.css`.

Consecuencias: control total del diseno y necesidad de disciplina para evitar duplicacion.

## ADR-004: Datos de Proyectos en `src/data/projects.js`

Estado: aceptada.

Contexto: los proyectos deben filtrarse, listarse y buscarse por `slug` sin base de datos.

Decision: crear `src/data/projects.js` como fuente unica para proyectos.

Consecuencias: mantenimiento simple y tests directos sobre filtrado y busqueda.

## ADR-005: SEO con React Helmet Async

Estado: aceptada.

Contexto: el proyecto ya incluye `react-helmet-async` y requiere SEO basico por pagina.

Decision: usar `react-helmet-async` para titulos, meta descriptions y Open Graph basico.

Consecuencias: metadatos administrables por pagina, sin prometer SEO equivalente a SSR/SSG.

## ADR-006: Tests con Vitest y React Testing Library

Estado: propuesta.

Contexto: la especificacion requiere tests esenciales orientados a comportamiento visible para el usuario.

Decision propuesta: configurar Vitest y React Testing Library en la fase 1.

Consecuencias: mayor confianza antes de build y deploy; requiere agregar dependencias de desarrollo y scripts.

## Decisiones Pendientes

- [PENDIENTE: confirmar identidad visual final].
- [PENDIENTE: confirmar si se publica correo del CV].
- [PENDIENTE: confirmar si se publica informacion de pasantias actuales].
- [PENDIENTE: definir licencia].
