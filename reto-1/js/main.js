let figura = prompt("Introduzca la figura que desea calcular");

switch (figura) {
    case "círculo":
        let pi= Math.PI
        let radio = parseInt(prompt("Introduxca el radio del círculo"));
        let resultadoCirculo = (radio**2)*pi;
        console.log(resultadoCirculo);
        break;
    case "triángulo":
        let base = parseInt(prompt("Introduzca la base del triangulo"));
        let altura = parseInt(prompt("Introduzca la altura del triangulo"));
        let resultadoTriangulo = (base * altura) / 2
        console.log(resultadoTriangulo);
        break;
    case "cuadrado":
        let lado = parseInt(prompt("Introduzca el valor del lado del cuadrado"));
        let resultadoCuadrado = lado * lado;
        console.log(resultadoCuadrado);
        break;
        default:
            alert("Introduzca una figura correcta");

};