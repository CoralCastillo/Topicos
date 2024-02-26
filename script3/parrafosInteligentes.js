
const palabrasRandom = ['perro', 'gato', 'donde', 'niña', 'objeto', 'programacion', 'lapiz', 'computadora', 'carro', 'casa', 
'familia', 'caminar', 'lugar', 'fiesta', 'comida', 'bebe', 'toalla','television', 'bolsa', 'pijama', 'dormir',
'mochila', 'zapato', 'sueter', 'escuela', 'libro', 'licuadora', 'cobija', 'almohada',
'videojuego', 'hamburguesa', 'galletas', 'sabritas', 'horario', 'patines', 'maleta', 'serie', 'pelicula',
'palabra', 'letra', 'cine', 'palomitas', 'ensenada', 'palaya', 'pescado', 'mapache', 
'dinosaurio', 'cojin', 'mesa', 'silla', 'pluma', 'borrador', 'carpeta', 'calcetin' ];

function crearParrafo() {
    return Array.from({length:50}, () => {
        return palabrasRandom[Math.abs(Math.round((Math.random() * palabrasRandom.length - 1)))]
   });
}

const parrafoContainer = document.getElementById('parrafo-container');

for (let j = 0; j < 5; j++) {
let str = '';
const palabras = crearParrafo();
for (let i = 0; i < palabras.length; i++) {
    str += palabras[i] + ' ';
}
const parrafo1 = document.createElement('p');
parrafo1.textContent = str;
parrafo1.style.backgroundColor = '#FCE6FB';
parrafoContainer.appendChild(parrafo1);
}