# Auditoría de contenido para la nueva web

Fecha de auditoría: 18 de julio de 2026.

## Alcance

Esta auditoría contempla únicamente el contenido público destinado a la nueva web:

- Talleres, seminarios, residencias, convocatorias y actividades.
- Información editorial estructurada de cada actividad.
- Imágenes y documentos vinculados a esas actividades.

Las páginas institucionales y los artículos de Enchastre se conservaron como backup para Obsidian y no forman parte de esta migración. La tienda, WooCommerce, usuarios, plugins y layout de WordPress están excluidos.

## Resultado general

| Elemento | Resultado |
| --- | ---: |
| URLs `portfolio` publicadas por WordPress | 556 |
| Fichas con contenido editorial real | 50 |
| Fragmentos técnicos vacíos o de galería | 506 |
| Imágenes únicas referenciadas por las 50 fichas | 617 |
| Coincidencias exactas en `fresco_uploads-clean` | 605 |
| Coincidencias mediante otra resolución del mismo archivo | 12 |
| Imágenes referenciadas faltantes | 0 |
| PDF enlazados directamente desde las fichas | 1 |
| PDF enlazados faltantes | 0 |

El PDF utilizado por una ficha es:

- `2025/09/Open-Call-BROTA-25-26-Bases_ampliacion.pdf`

## Fichas públicas reales detectadas

1. Ampparito
2. Ana Bustelo
3. Ana Cano Brookbank
4. Taller Rayogramas — Ana Paes
5. Bendita la mesa
6. Brota 25–26 — Open Call
7. Carla Souto
8. Catalina Romero
9. Eloy Arribas
10. Guido Sarli
11. Ignacio Rivas
12. Jan Monclús
13. Javier Ruiz — edición 1
14. Javier Ruiz — edición 2
15. Joyería en cerámica
16. Juan Narowé
17. Julio Galindo — edición 1
18. Julio Galindo — edición 2
19. Justine Menard — edición 1
20. Justine Menard — edición 2
21. Laura López Balza
22. Lola Erhart
23. Los Bravú
24. Lumbre — Nico Romero
25. Marta Lapeña
26. Mercedes Bellido
27. Miguel Gómez Losada — edición 1
28. Miguel Gómez Losada — edición 2
29. Movimiento, cuerpo y pintura
30. Movimiento, cuerpo y pintura — Edición II
31. Serigrafía contemporánea / Multiple Editions
32. Nacho Martín Silva
33. Nicolás Romero Escalada
34. Open Studio
35. Pablo Merchante — edición 1
36. Pablo Merchante — edición 2
37. Paula Cid Cerezo
38. Residencia artística con Pablo Merchante
39. Retiro Málaga / Santiago Picatoste
40. Rosh
41. Santiago Picatoste
42. Seminario Ana Bustelo
43. Seminario En obra
44. Seminario Nacho Martín Silva
45. Sophie Aguilera — edición 1
46. Sophie Aguilera — edición Flores
47. SRGER
48. Taller Cecilia Czornogas
49. Taller de laboratorio de arcillas — Luka Andeyro
50. Taller histórico adicional de Santiago Picatoste

Las ediciones con el mismo artista se conservarán como actividades independientes cuando presenten fechas, programa o material diferentes.

## Estado de `fresco_uploads-clean`

La carpeta contiene:

| Tipo | Cantidad |
| --- | ---: |
| Archivos totales | 4.834 |
| Tamaño total | 6,8 GB |
| JPG | 3.179 |
| JPEG | 870 |
| PNG | 695 |
| WebP | 36 |
| HEIC | 24 |
| GIF | 8 |
| PDF | 12 |
| Archivo Pages | 1 |
| `.DS_Store` | 9 |

Aunque la carpeta tiene todo el material necesario, todavía conserva muchas resoluciones generadas por WordPress:

- Aproximadamente 2.287 grupos de imagen lógicos.
- 2.246 grupos contienen más de una variante.
- 4.771 archivos pertenecen a grupos con variantes.

No se eliminará ningún archivo durante la preparación. Se generará un manifiesto que seleccione una fuente por imagen y mantenga la relación con las URLs históricas.

Los 24 HEIC tienen versiones JPG generadas dentro de sus respectivos grupos, por lo que no bloquean el uso web.

## Modelo de contenido propuesto

Cada actividad se normalizará con los siguientes campos:

- Identificador interno.
- Slug nuevo.
- URL o URLs históricas.
- Título.
- Edición.
- Tipo de actividad.
- Estado: próxima, vigente, finalizada o histórica.
- Resumen.
- Cuerpo editorial por secciones.
- Artista o artistas.
- Biografía y enlaces del artista.
- Fecha de inicio y finalización.
- Horarios.
- Duración.
- Lugar y ciudad.
- Precio histórico o vigente.
- Público destinatario.
- Programa.
- Materiales y requisitos.
- Llamada a la acción.
- Imagen principal.
- Galería ordenada.
- PDF o documento asociado.
- Créditos y textos alternativos.

## Trabajo pendiente antes de construir las vistas

1. Convertir las 50 fichas HTML en contenido estructurado y revisar las ediciones repetidas.
2. Generar un manifiesto de medios que relacione cada URL antigua con el mejor archivo local.
3. Seleccionar y copiar únicamente los 617 recursos utilizados a la zona de assets de la nueva web.
4. Completar textos alternativos y créditos: de 769 apariciones de imágenes, 288 no tienen `alt` y los textos existentes se repiten mucho.
5. Clasificar actividades por tipo, estado y fecha.
6. Definir la arquitectura de navegación y el diseño de referencia.
7. Crear el mapa de redirecciones para las URLs históricas que deban conservar tráfico.

## Decisiones que no bloquean la extracción

La normalización del contenido y el manifiesto de medios pueden comenzar antes de recibir el diseño. La referencia visual será necesaria para decidir componentes, jerarquía de las páginas y tratamientos de galería, pero no para preservar los datos.
