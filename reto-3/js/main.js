let numeroPedido = parseInt(prompt("Introduzca un número"))
switch(numeroPedido){
    case 1:
    case 3:
    case 7:
    case 9:
        alert(`${numeroPedido} es un numero primo`)
    break;
    default:
        if (numeroPedido%2!=0 && numeroPedido%3!=0 && numeroPedido%4!=0 && numeroPedido%5!=0 && numeroPedido%6!=0 && numeroPedido%7!=0 && numeroPedido%8!=0 && numeroPedido%9!=0 ){
            alert(`${numeroPedido} es un número primo`)
        } else{
            alert(`${numeroPedido} no es un número primo`)
        }
    break;
}