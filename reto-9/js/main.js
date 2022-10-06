let tamaño = parseInt(prompt("Introduce el tamaño del array"));
let array = [];

for(let i = 1; i <= tamaño; i++ ) {
    let numero = Math.floor(Math.random() * 10)
   array.push(numero);
    
}
console.log(array);