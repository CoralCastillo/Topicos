Este codigo lo que hace es generar 10 contenedores con un tamaño de "100" y les agrega un color aleatorio

Primero lo que hago es seleccionar un elemento body y los almacena en si mismo
<img width="335" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/c2045ab7-0fe9-4544-ab04-9e6cdb4fe2f5">

Despues declare un arreglo donde se contiene colores
<img width="275" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/15ea070d-025c-4189-8f33-1a949e8d115e">


El bucle for for (let i=0 ; i<10 ; i++), en donde se iniciara un bloque se se inicia 10 veces
<img width="331" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/49e43945-ff10-4d6a-9468-6a3325955a27">


Creo el elemento div y le ajusto el tamaño a "100px"
<img width="188" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/87714f51-d629-4ead-97e7-ec1de30e2d88">


Para crear el color aleatorio, se utiliza Math.floor, lo que hace el .floor es redondear un valor hacia bajo, por ejemplo:
si tenemos 5.6, el numero redondeado sera 5.
Y el math.random genera valores random del 0 al 1 y se multiplica por la longitud del arreglo, esto para que nos genere el color random dentro de ese arrreglo 
<img width="476" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/2b0dbd4b-f149-4e9a-bb8e-9ad15cb2d88d">


Y por ultimo, se agrega el div al final para agregar el elemento
<img width="246" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/422ae9f6-bbcc-4691-a859-4c41f76e5bb7">

RESULTADO:
<img width="923" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/f56aab00-4dd3-425d-8a30-dba753a0f558">




