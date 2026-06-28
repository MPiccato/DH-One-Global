"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saludo = 'Hola Mundo';
console.log(saludo);
// Tipos de Datos
let nombre = 'Francisco';
let num = 0;
let bool = true;
let array = [1, 2, 3, 4];
let arrayString = ['Cinthia', 'Lautaro', 'Lorenzo', 'Martin'];
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
let hoy = DiasSemana.Sábado;
// Funciones con tipos y parámetros
function saludar(nombre) {
    return `Hola ${nombre}`;
}
function saludar2(nombre) {
    console.log(`Hola ${nombre}`);
}
// Clases con propiedad y métodos tipados
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}
let semaforo = 'Verde';
// Funciones Genéricas (sin un tipo de datos definido)
function duplicar(valor) {
    return valor;
}
let numeroDuplicado = duplicar(5);
let textoDuplicado = duplicar('Hola Martin');
// Interfaces
const persona = {
    nombre: 'Martin',
    edad: 46
};
const Gabo = {
    nombre: 'Gabo',
    raza: 'Golden Retriever',
    especie: 'Dorado'
};
