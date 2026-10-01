# Checklist de revisión

1. **Corrección**: el código hace lo que dice la descripción y no rompe casos límite.
2. **Tests**: los cambios de comportamiento tienen tests y los existentes pasan.
3. **Seguridad**: sin secretos en el código, entradas validadas, sin datos sensibles en logs.
4. **Accesibilidad**: pasa AXE y cumple WCAG AA (foco, contraste, ARIA).
5. **Angular**: componentes standalone, signals, control flow nativo (`@if`, `@for`), `inject()`.
6. **Mantenibilidad**: componentes pequeños y con una sola responsabilidad, sin código muerto.
