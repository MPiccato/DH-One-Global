// Simulador de calculadora
const prompt = require('prompt-sync')({ sigint: true });
let a = 2;
let b = '3'
console.log(a + b)
let num = 5;
function test() {
    if (true) {
        let num = 10
    }
    return num
}
let day = 'Martes';
let message = "";
switch (day) {
    case 'Lunes':
        message = 'Es Lunes.';
    case "Martes":
        message = "Es Martes."

}
console.log(message)


test()
console.log(num)

console.log(11 % 2)
const suma = (num1, num2) => {
    return num1 + num2
}
const resta = (num1, num2) => {
    return num1 - num2
}
const multiplicar = (num1, num2) => {
    return num1 * num2
}
const dividir = (num1, num2) => {
    if (num2 == 0) { return 'No se puede dividir por 0' }
    return num1 / num2
}

function cargaDatos() {
    let num1 = parseInt(prompt('Ingrese el primer dato: '))
    let num2 = parseInt(prompt('Ingrese el segundo dato: '))
    let lista = []
    lista.push(num1)
    lista.push(num2)
    return lista
}

console.log("Indica la operación a realizar:\n 1.SUMA\n2.RESTA\n3.MULTIPLICAR\n4.DIVIDIR")
let numero = parseInt(prompt('=>'))
switch (numero) {
    case 1:
        console.log(suma(...cargaDatos()))
        break;
    case 2:
        console.log(resta(...cargaDatos()))
        break;
    case 3:
        console.log(multiplicar(...cargaDatos()))
        break;
    case 4:
        console.log(dividir(...cargaDatos()))
        break;

    default:
        break;
}
