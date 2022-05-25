# API-Express-DB

Semana 5 de LaunchX-InnovaccionVirtual Mission NodeJS: API-Express+DB

## Introducción 

En esta práctica se empleo la base de datos `Postgresql` para poder crear una API que muestre todos los usuarios de la tabla creada, un usuario por su id, crear un usuario, modificar usuario y eliminar con el uso de `Prisma DB`.  

## Tecnología usada

* `Express`: para desplegar en navegador y se instala con el siguiente comando `npm install express --save-dev `.
* `Prisma DB`: conexión con la base de datos y se instala con el siguiente comando ` npm install prisma --save-dev `.
* `Postgresql`: Base de Datos donde se crean las tablas y se meten los datos.

## Diseño

![Express-DB diseño](https://user-images.githubusercontent.com/99068430/170368673-03e7310b-48d5-45cb-b194-f3411e65d652.png)

* `Schema.prisma` aquí se crean las tablas dentro de la base de datos.

* `seed.js` es el archivo donde se insertan datos de forma automatizada. 

* `@prisma/client` es el generador de consultas hacia `Postgresql` y las envía a `server.js` que es el servidor.

* `Postgresql` contiene la los datos y las tablas de Explorers y MC.

* `server.js` contiene los endpoints para hacer peticiones de la web a la base de datos.

## API 

Para entrar a la Api en el navegador ponemos ` http://localhost:3000/ ` y nos dará la bienvenida.

![express-DB bienbenida](https://user-images.githubusercontent.com/99068430/170368741-68e469f0-a395-4767-a37e-ea5011ccab31.png)

Con estos endpoits ` http://localhost:3000/mc ` o con ` http://localhost:3000/explorers` muestran el contenido de todos los mission commanders en la primera ruta y en la segunda a todos los explorers.

![express-DB-mc](https://user-images.githubusercontent.com/99068430/170368824-91eebf0d-ef98-4e52-8a57-86ebab654bac.png)

![Sin títuloexpress-DB-explorers](https://user-images.githubusercontent.com/99068430/170368892-ab017e02-232b-4304-a383-ff6e0af9c1e5.png)

En el endpoint ` http://localhost:3000/mc/:id` o ` http://localhost:3000/explorers/:id`  se muestra los datos asociados al id.

![express-DB-mc-id](https://user-images.githubusercontent.com/99068430/170368961-a432fae1-fb65-45b9-8d03-d130346ea3a4.png)

![express-DB-explorers-id](https://user-images.githubusercontent.com/99068430/170368981-a10e5e33-25ea-4b42-8b0d-02279c2fea9e.png)

La creación de nuevos mission commanders o explorers usamos los endpoints ` http://localhost:3000/mc ` o con ` http://localhost:3000/explorers`.

![espress-DB-mc-crear](https://user-images.githubusercontent.com/99068430/170369109-781e6bf3-74fb-4622-8f59-7aab2470b46c.png)

Podemos actualizar los datos usando el id  con los siguientes endpoints ` http://localhost:3000/mc/:id ` o con ` http://localhost:3000/explorers/:id`.

![express-DB-mc-actualizar](https://user-images.githubusercontent.com/99068430/170369136-e48c8bfc-ae8c-41f6-b6ad-ea3c669851f4.png)

Finalmente podemos eliminar mission commanders y ecplorers por medio del id con los siguientes endpoints ` http://localhost:3000/mc/:id ` o con ` http://localhost:3000/explorers/:id`.

![express-DB-mc-eliminar](https://user-images.githubusercontent.com/99068430/170369172-e44c5e81-c112-40b4-be8a-8527aecdf0c3.png)
