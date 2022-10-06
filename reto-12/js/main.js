let tamaño = parseInt(prompt("Introduce el tamaño del array"));
let arrayUno = [];
let arrayDos = [];
let digito = parseInt(prompt("Introduce el dígito"))

if(digito < 0 || digito >= 10) {
    alert("Introduce un numero entre 0 y 9 ")
} else {
    for (let i = 1; i <= tamaño; i++) {
    let numero = Math.floor(Math.random() * 301)
    arrayUno.push(numero);
}

arrayUno.forEach(numero => {

    let ultimoDigito = numero%10;

    if(ultimoDigito == digito){
        arrayDos.push(numero)
    }
    console.log(ultimoDigito)
  
})
console.log(arrayUno);
console.log(arrayDos)
}

