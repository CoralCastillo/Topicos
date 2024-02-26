const body = document.querySelector('body');
let colores = ['pink', 'yellow', 'red', 'blue', "#9BC7F5", "#BB3CB6", "#BAF2F3", "AF9EFF", "#50BBAD",
"#62BB50", "#FFB17A", "#7AF5FF", "#642F61", "#2838D7", "#CA0E61", "#2AECB4", "#830022", 
"#0E4001", "#6A6A87", "#73A35F"];
function generarColorUnico() {
    let color;
    do {
        color = colores[Math.floor(Math.random() * colores.length)];
    } while (coloresUtilizados.includes(color));
    coloresUtilizados.push(color);
    return color;
}

const coloresUtilizados = [];

for (let i = 0; i < 20; i++) {
    const div = document.createElement('div');
    div.style.height = '100px';
    div.style.backgroundColor = generarColorUnico();
    body.appendChild(div);
}