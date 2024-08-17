let edades = [46, 45, 14, 16];
let nombres = ["Martin", "Cinthia", "Lorenzo", "Lautaro"];
let combinados = ['Martin', 46, 26673164, 'Empleado'];

//
for (i = 0; i < edades.length; i++) {
    console.log(edades[i])
}

// Algoritmos más comunes

let numeros = [10, 20, 30, 40, 50]

// Cambiar el contenido del arreglo
console.log('Lista de números: ', numeros)
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] + 2
}
console.log(`Lista de números modificado: ${numeros}`)

// Agregar elementos a un arreglo
let notas = [8, 4, 10, 6];
console.log(`Notas: ${notas}`);
notas.push(10)
console.log(`Notas: ${notas}`)
notas[notas.length] = 7
console.log(`Notas: ${notas}`)

// Operaciones algebraicas
let numero = [10, 20, 30, 40, 50]
let sumaElementos = 0;
for (i = 0; i < numero.length; i++) {
    sumaElementos += numero[i]
}
console.log(`La suma de los elementos es de: ${sumaElementos} `)


// Encontrar el número menor o menor valor
let numMenor = [10, 4, 15, 20, 3];

let menor = numMenor[0];

for (i = 0; i < numMenor.length; i++) {
    if (numMenor[i] < menor) {
        menor = numMenor[i]

    }
}
console.log(menor)

// Métodos de los arrays
let colores = ['rojo', 'naranja', 'azul'];

// Push
colores.push('verde')
console.log(colores)
colores.push('gris', 'dorado')
console.log(colores)

// Pop

let colorEliminado = colores.pop()
console.log(`Color eliminado de la lista: ${colorEliminado}`)

// Shift elimina el primer elemento del arreglo

let elementoEliminadoInicio = colores.shift()
console.log(`El primer elemento que se eliminó era: ${elementoEliminadoInicio}`)

// UnShift agrega elementos desde el inicio
colores.unshift('morado', 'amarillo')
console.log(`Se agregaron los siguientes elementos desde el inicio del arreglo:\n${colores}`);

// JOIN

let dias = ['Lunes', 'Martes', 'Miércoles'];

let semana = dias.join("-");

//IndexOF

let indiceElemento = dias.indexOf('Martes')
console.log(indiceElemento)
console.log(dias.indexOf('Domingo'))

//lastIndexOf
console.log(dias.lastIndexOf('Lunes'))

//Includes
console.log(dias.includes('Martes'))

// Propiedades de los Strings

let cadena = 'Hola Martin'

// Length
console.log(cadena.length)

// Slice

console.log(cadena.slice(3))
console.log(cadena.slice(5, 8))

// Trim
let nombreCompleto = "   Martin    "
console.log(nombreCompleto.trim()) // Quita los espacios al principio y al final de la cadena

//Split
console.log(cadena.split(' '))

//Ejemplo: contar palabras
console.log(cadena.split(' ').length)

//Replace
let frase = 'Me encanta React'
console.log(frase.replace('React', 'Python'))

