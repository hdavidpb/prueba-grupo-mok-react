## Pasos para levantar el proyecto:

- Tener instalado Noje.js Version >= 14.
- Descargar las dependencias de React con el comando npm install dentro del proyecto.
- Levantar el proyecto con el comanado npm run dev.

## Puntos a cumplir y adicionales:

- Se completarón los 10 puntos de la prueba.

1. Fetch a 100 elementos usando la API.
2. Muestra la data en un formato &lt;table&gt; similar al ejemplo.
3. Crear un botón que permita añadir color a la tabla (líneas pares sombreadas con
   #112233 y pares #556677).
4. Crea un botón que permita ordenar alfabéticamente por país.
5. Por cada línea de la tabla habilita un botón que pueda eliminar una línea de la tabla.
6. Crea un botón que permita restaurar la información inicial de la tabla (recupere los
   registros borrados).
7. Corrige todos los bugs que consideres.
8. Crea un botón que permita filtrar la data por país.
9. Evita ordenar la data cada vez que filtro por país.
10. Ordena la data al clickear la columna header (titulo) de cada campo.

- Adicinalmente agregue:

1. Añadi una paginación para los 100 usuarios listandolos de a 20 usuarios por página.
2. Añadi un modal que aparece al darle click a la file de cualquier usuario en donde se ve la información un poco mas detallada y campos adicionales.
3. Agregue un componente con un mensaje de cargando usuarios.

## Consideraciones:

- Realice este proyecto utilizando vite con Typescript ya que me parece una alternativa muy buena para tipar los datos y desarrollar de manera mas eficiente disminuyendo errores en desarrollo.

- Para el proyecto utilice el contexto de React para mantener el estado organizado en un solo lugar y global, utilice hooks como useReducer , useContext, useState, useEffect para manejar la logica.

- Cree hooks perzonalizado para organizar mucho mejor la logica de la aplicación y separarla un poco de los componentes.
