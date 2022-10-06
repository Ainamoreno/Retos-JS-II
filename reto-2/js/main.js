numerosEnteros = (min, max) => {
return Math.floor((Math.random() * (max-min)) + min);
};

let min = prompt("introduce el número mínimo");
let max = prompt("Introduce el número máximo");

console.log(numerosEnteros(min,max))