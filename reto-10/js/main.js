let tamaño = parseInt(prompt("Introduce el tamaño del array"));

let array = [];

for (let i = 1; i <= tamaño; i++) {
    let numero = Math.floor(Math.random() * 40)
    switch (numero) {
        case 1:
        case 3:
        case 7:
        case 9:
            array.push(numero)
            break;
        default:
            if (numero % 2 != 0 && numero % 3 != 0 && numero % 4 != 0 && numero % 5 != 0 && numero % 6 != 0 && numero % 7 != 0 && numero % 8 != 0 && numero % 9 != 0) {
                array.push(numero)
            } else {
                console.log(`${numero} no es un número primo`)
            }
            break;
    }


}

let mayor = Math.max(...array);
console.log(mayor)
console.log(array)