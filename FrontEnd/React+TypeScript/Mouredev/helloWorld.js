// Para que el programa corra correctamente se debe compilar con el comando:
// tsc helloWorld.ts
console.log('Hola TypeScript!');
// Variables
var myString = 'Cadena de texto';
console.log(myString);
var myStringTipado = 'Cadena de tipado fuerte';
console.log(myStringTipado);
var myNumber = 22;
console.log(myNumber);
console.log(myNumber + 5);
var myDecimal = myNumber + 0.4;
console.log(myDecimal);
var boolData = true;
console.log(boolData);
var listParientes = ['Lorenzo', 'Lautaro'];
console.log(listParientes);
// Los tipos de datos en TypeScript son:
// string, number, boolean, null, undefined, void, any, never
// Array, Tuple, Enum, Object, Interface, Function, Class, etc.    
// Controles de Flujo
if (myNumber == 10) {
    console.log('El número es 10');
}
else {
    console.log('El número no es 10');
}
