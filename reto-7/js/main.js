let cantidad = parseInt(prompt("Introduce la cantidad de euros"));
let moneda = prompt("Introduzca a la moneda que quiere cambiar");

const cambioMonedas = (cantidad, moneda) => {
    switch (moneda) {
        case "libras":
            let resultadoLibras = cantidad * 0.86;
            console.log(`El resultado es ${resultadoLibras} libras`);
            break;
        case "dolares":
            let resultadoDolares = cantidad * 1.28611;
            console.log(`El resultado es ${resultadoDolares} libras`);
            break;
        case "yenes":
            let resultadoYenes = cantidad * 129.852;
            console.log(`El resultado es ${resultadoYenes} libras`);
            break;
        default:
            alert('Introduce libras, dolares o yenes')


    }
}

cambioMonedas(cantidad, moneda)