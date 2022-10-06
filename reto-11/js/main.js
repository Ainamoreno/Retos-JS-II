let tamaño = parseInt(prompt("Introduce el tamaño del array"));
let arrayUno = [];

for(let i = 1; i <= tamaño; i++ ) {
    let numero = Math.floor(Math.random() * 100)
   arrayUno.push(numero);  
}
let arrayDos = [...arrayUno];

let nuevoArrayDos = arrayDos.map(numero => parseInt(numero * Math.random()))

let arrayFinal = [];
for (let i= 0; i < tamaño; i++) {
    arrayFinal.push(arrayUno[i]* nuevoArrayDos[i])
}
console.log(arrayUno)
console.log(nuevoArrayDos);
console.log(arrayFinal);
