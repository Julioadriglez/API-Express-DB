# API-Express-DB

Semana 5 de LaunchX-InnovaccionVirtual Mission NodeJS: API-Express+DB

## Introducción 
En esta práctica se empleo la base de datos `Postgresql` para poder crear una API que muestre todos los usuarios de la tabla creada, un usuario por su id, crear un usuario, modificar usuario y eliminar con el uso de `Prisma DB`.  
## Tecnología usada
*`Express`: para desplegar en navegador y se instala con el siguiente comando `npm install express --save-dev `.
*`Prisma DB`: conexión con la base de datos y se instala con el siguiente comando ` npm install prisma --save-dev `.
*`Postgresql`: Base de Datos donde se crean las tablas y se meten los datos.
## Diseño



`Schema.prisma` aquí se crean las tablas dentro de la base de datos.

`seed.js` es el archivo donde se insertan datos de forma automatizada. 

`@prisma/client` es el generador de consultas hacia `Postgresql` y las envía a `server.js` que es el servidor.

`Postgresql` contiene la los datos y las tablas de Explorers y MC.

`server.js` contiene los endpoints para hacer peticiones de la web a la base de datos.
## API 
Para entrar a la Api en el navegador ponemos ` http://localhost:3000/ ` y nos dará la bienvenida.


Con estos endpoits ` http://localhost:3000/mc ` o con ` http://localhost:3000/explorers` muestran el contenido de todos los mission commanders en la primera ruta y en la segunda a todos los explorers.


En el endpoint ` http://localhost:3000/mc /:id` o ` http://localhost:3000/explorers/:id`  se muestra los datos asociados al id.


La creación de nuevos mission commanders o explorers usamos los endpoints ` http://localhost:3000/mc ` o con ` http://localhost:3000/explorers`.


Podemos actualizar los datos usando el id  con los siguientes endpoints ` http://localhost:3000/mc/:id ` o con ` http://localhost:3000/explorers/:id`.


Finalmente podemos eliminar mission commanders y ecplorers por medio del id con los siguientes endpoints ` http://localhost:3000/mc/:id ` o con ` http://localhost:3000/explorers/:id`.




