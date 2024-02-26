// Crear y agregar 10 contenedores al div "contenedores"
for (let i = 0; i < 10; i++) { // aqu
    // Crear un div contenedor
    const container = document.createElement('div');
    container.style.height = '100px'; // Tamaño del contenedor
    
    // Generar un color aleatorio hexadecimal
    const colores = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Asignar el color aleatorio al contenedor
    container.style.backgroundColor = colores;
    
    // Agregar el contenedor al div con id "contenedores"
    document.getElementById('containers').appendChild(container);
}