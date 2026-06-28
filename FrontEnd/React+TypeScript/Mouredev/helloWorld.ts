// Para que el programa corra correctamente se debe compilar con el comando:
// tsc helloWorld.ts

console.log('Hola TypeScript!');

// Variables

let myString = 'Cadena de texto';
console.log(myString);

let myStringTipado: String = 'Cadena de tipado fuerte';
console.log(myStringTipado);

let myNumber: number =22;
console.log(myNumber);
console.log(myNumber +5)

let myDecimal = myNumber +0.4;
console.log(myDecimal);

let boolData: boolean = true;
console.log(boolData);

let listParientes: string[] = ['Lorenzo', 'Lautaro'];
console.log(listParientes);

// Los tipos de datos en TypeScript son:
// string, number, boolean, null, undefined, void, any, never
// Array, Tuple, Enum, Object, Interface, Function, Class, etc.    

// Controles de Flujo

if (myNumber == 10) {
    console.log('El número es 10');
} else {
    console.log('El número no es 10');
}