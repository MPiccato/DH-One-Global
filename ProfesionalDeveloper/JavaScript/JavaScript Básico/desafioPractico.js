// Ejercicio 1: Validador de contraseña
let contrasenia = "Lautaro2008"

function validarContrasenia(dato) {
    if (dato === contrasenia) {
        console.log('Contraseña OK')
    }
    else {
        console.log('Contraseña incorrecta')
    }
}
validarContrasenia("Lorenzo2010")

// Ejercicio 2: Calculadora de Indice Masa Corporal

function calculadoraIMC(peso, altura) {
    let imc = peso / (altura * altura)
    if (imc <= 18.5) {
        console.log(`Indice bajo, tu IMC es de ${imc}`)

    } else if (imc > 19 && imc < 25) {
        console.log(`Tienes el IMC correcto, es de ${imc}`)
    }
    else if (imc > 25) {
        console.log('Tienes sobrepeso')
    }
}

calculadoraIMC(116, 1.86)

// Ejercicio 3: Convertidor de Monedas

function convertirMoneda(cantidad, monedaDestino) {
    let cantidadConvertida;

    switch (monedaDestino) {
        case 'USD':
            cantidadConvertida = cantidad * 1280;

            break;
        case 'REAL':
            cantidadConvertida = cantidad * 650;

            break;
        case 'EURO':
            cantidadConvertida = cantidad * 1800;

            break;

        default:
            console.log('Debes elegir cantidad y moneda de destino');
            break;
    }
    return cantidadConvertida
}
console.log(convertirMoneda(100, "REAL"))

// Ejercicio 4: Rangos de edad

const rangoEdad = (edad) => {
    if (edad < 12) {
        console.log('Niño')
    } else if (edad < 18) {
        console.log('Adolescente')
    } else if (edad < 35) {
        console.log('adulto joven')
    } else {
        console.log('adulto mayor')
    }

}
rangoEdad(40)

// Ejercicio 5: 

const mensajePersonalizado = (nombre, momentoDia) => {
    let mensajePersonalizado = (momentoDia == 'mañana') ? `Hola ${nombre}, buenos días` : `Buenas tardes, ${nombre}`
    return mensajePersonalizado

}
console.log(mensajePersonalizado('Lautaro', 'mañana'))

