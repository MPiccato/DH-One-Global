import { Persona } from "./interface/persona";

const saludo = 'Hola Mundo';
console.log(saludo);

// Tipos de Datos
let nombre: string = 'Francisco';
let num: number = 0;
let bool: boolean = true;
let array: number[] = [1,2,3,4];
let arrayString: string[] = ['Cinthia','Lautaro','Lorenzo','Martin']

enum DiasSemana {
    'Lunes', 'Martes','Miércoles','Jueves', 'Viernes',
    'Sábado', 'Domingo'
}

let hoy:DiasSemana = DiasSemana.Sábado;

// Funciones con tipos y parámetros

function saludar(nombre:string): string {
    return `Hola ${nombre}`;
}

function saludar2(nombre:string): void {
    console.log(`Hola ${nombre}`);
}

// Clases con propiedad y métodos tipados
class Producto {
    constructor(public nombre: string, public precio: number) {}
    mostrarDetalles(): void {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }

}

type Color = 'Rojo' | 'Verde' | 'Amarillo';

let semaforo: Color = 'Verde';

// Funciones Genéricas (sin un tipo de datos definido)
function duplicar<T>(valor: T): T {
    return valor
}
let numeroDuplicado = duplicar(5);
let textoDuplicado = duplicar('Hola Martin');

// Interfaces



const persona: Persona = {
    nombre: 'Martin',
    edad: 46
}

interface Animal {
    nombre: string,
    raza: string,
}

interface Perro extends Animal {
    especie: string;
}

const Gabo: Perro = {
    nombre: 'Gabo',
    raza: 'Golden Retriever',
    especie: 'Dorado'
}
