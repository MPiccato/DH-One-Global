// Ejercicio 1
let array1 = [1, 2, 3, 4];
let array2 = ['Cinthia', 'Lautaro', 'Martin', 'Lorenzo'];

function unirArrays(primero, segundo) {
    let unidos = primero.concat(segundo);
    return unidos
}
console.log(unirArrays(array1, array2));

// Ejercicio 2

function eliminarPrimerElemento(elemento) {
    return elemento.shift();
};
console.log(eliminarPrimerElemento(['Sandro', 'Pedro', 'Anastacia']));

// Ejercicio 3

function convertirTextoMayusculas(cadena) {
    return (cadena.toUpperCase())

};
function convertirTextoMinusculas(cadena) {
    return (cadena.toLowerCase())

};

function convertirTexto(texto) {
    let textoMayuscula = convertirTextoMayusculas(texto);
    let textoMinuscula = convertirTextoMinusculas(texto);
    console.log(`Texto en mayúsculas: ${textoMayuscula}`)
    console.log(`Texto en minúsculas: ${textoMinuscula}`)

}


convertirTexto("Juan");

// Ejercicio 4
let persona = {
    nombre: "Martin",
    edad: 45,
    ocupacion: 'desarrollador',
    presentarse: function () {
        console.log(persona.nombre)
        console.log(persona.edad)
        console.log(persona.ocupacion)
        return `Hola, soy ${persona.nombre}, tengo ${persona.edad} años y trabajo como ${persona.ocupacion}`
    }

};


console.log(persona.presentarse());
persona.ocupacion = 'Periodista';
persona['habilidad'] = 'tenis';

console.log(persona.presentarse());

persona['ubicacion'] = {
    codigoPostal: 3700,
    ciudad: 'S. Peña',
    altura: 1750,
    calle: 'Laprida'

};
console.log(persona);

function eliminarPropiedad(objeto, propiedad) {
    switch (propiedad) {
        case 'nombre':
            delete objeto.nombre;
            break;
        case 'edad':
            delete objeto.edad;
            break;
        case 'ocupacion':
            delete objeto.ocupacion;
            break;
        case 'habilidad':
            delete objeto.habilidad;
            break;
        case 'ubicacion':
            delete objeto.ubicacion;
            break;
        default:
            console.log('Esa propiedad no existe en el objetov')



    }

    console.log(objeto)

}

eliminarPropiedad(persona, "ubicacion")
