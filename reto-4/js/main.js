let numero = parseInt(prompt("Introduzca el número"));

const factorial = (num) => {
    let multiplicador = 1;
    for (let i = num; i > 0; i--) {
        multiplicador *= i;
        
    }
    console.log(multiplicador)
}

factorial(numero)