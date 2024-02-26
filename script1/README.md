Este codigo lo que hace es generar 10 contenedores con un tamaño de "100" y les agrega un color aleatorio

Primero lo que hago es seleccionar un elemento body y los almacena en si mismo, como lo vimos en la clase
const body = document.querySelector('body')
Despues declare un arreglo donde se contiene colores
const colores = 
['pink', 'yellow', 'red', 'blue']

El bluque for for (let i=0 ; i<10 ; i++), en donde se iniciara un bloque se se inicia 10 veces
for (let i=0 ; i<10 ; i++) {
    const div = document.createElement('div')

Creo el elemento div y le ajusto el tamaño a "100px"
div.style.height = '100px'

Para crear el color aleatorio, se utiliza Math.floor, lo que hace el .floor es redondear un valor hacia bajo, por ejemplo:
si tenemos 5.6, el numero redondeado sera 5.
Y el math.random genera valores random del 0 al 1 y se multiplica por la longitud del arreglo
 div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)]

Y por ultimo, se agrega el div al final
    body.appendChild(div)
}

RESULTADO:
<img width="923" alt="image" src="https://github.com/CoralCastillo/Topicos/assets/158122504/f56aab00-4dd3-425d-8a30-dba753a0f558">




