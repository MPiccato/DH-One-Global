// Operador Ternario
let edad = 18;
let categoria;
let alcohol;

(edad >= 18) ? (mensaje = "Sos mayor\n", categoria = "adulto\n", alcohol = "SI\n") : ("sos menor");
console.log(mensaje, categoria, alcohol)


// Uso del Switch
let diaSemana = 5;
switch (diaSemana) {
    case 1:
        console.log("Lunes")

    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miércoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sábado")
        break;

    default:
        console.log("Domingo")
        break;
}