---
name: revisar-pr
description: Revisa un pull request con el checklist del equipo. Usar cuando se pida revisar un PR, unos cambios o un diff.
---

# Revisión de pull request

1. Leer la descripción del PR y comprobar que hay una issue enlazada.
2. Revisar contra checklist.md, en ese orden.
3. Clasificar cada hallazgo: bloqueante, recomendable o nota.
4. No comentar estilo: de eso ya se encarga el formateador.
5. No cambiar nada durante la revisión. Al terminar, proponer una lista numerada de commits, uno por hallazgo, con esta tabla: número, mensaje del commit y qué archivos cambia. Ordenarla de bloqueante a nota, e indicar las dependencias entre commits que toquen los mismos archivos.
6. Preguntar al usuario cuáles quiere hacer (selección múltiple, usando AskUserQuestion si está disponible; si no, que responda con los números). Hacer solo los elegidos, un commit por cada uno y en orden. Los no elegidos se dejan sin tocar y se mencionan al final.
7. Nombrar cada commit según los cambios realmente hechos, no según el mensaje propuesto en la lista. Antes de commitear, revisar `git diff --staged` y escribir el mensaje a partir de él: en español, en imperativo, de 72 caracteres como máximo y sin punto final, y que diga qué cambia (por ejemplo `Usar signal para el nombre en App`). Si el cambio real difiere de lo propuesto, usar el mensaje que lo describa. Si el commit mezcla cambios de varios hallazgos, separarlo en commits distintos.
8. No hacer `git push` salvo que el usuario lo pida expresamente.
