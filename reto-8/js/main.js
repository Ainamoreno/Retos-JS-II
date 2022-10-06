const arrayNumero = () => {
    let arrayNumeros = [];
    for (let i = 1; i <= 10; i++) {
        let numeros = parseInt(prompt("Introduce un número"));
        arrayNumeros.push(numeros)
        
    }
    console.log(arrayNumeros);

    arrayNumeros.forEach((numero, indice) => {
        console.log(`El índice es ${numero} y su valor es ${indice}`)
    })
}

arrayNumero()

// const mostrarValores = () => {
//     arrayNumeros.forEach((indice, numero ) =>{
//        console.log(indice, numero )
//     })

    
// }

// mostrarValores()