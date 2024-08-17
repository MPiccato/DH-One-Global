
const prompt = require('prompt-sync')({ sigint: true });
// Array de tareas

let tareas = [];

// Función para agregar o crear una tarea
function crearTarea(tarea, fechaLimiteRba = null) {
    tareas.push({ concepto: tarea, completada: false, fechaLimite: fechaLimiteRba })
};

// Función para eliminar tarea
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        console.log('Tarea eliminada correctamente');
    } else {
        console.log('Indice de tarea inexistente')
    }

};

function tareaCompletada(indice, completada) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log('Tarea marcada como completada')
    } else {
        console.log('Tarea no encontrada')
    }

};

//Función para modificar tarea

function modificarTarea(indice, nuevoConcepto, nvaFecha = null) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice][concepto] = nuevoConcepto;
        if (nvaFecha !== null) {
            tareas[indice][fechaLimite] = nvaFecha;
        };
        console.log('Tarea modifica con éxito')

    } else {
        console.log('Indice de tarea incorrecto')
    }
};

// Función para mostrar menú de opciones
function mostrarMenu() {
    console.log('---------Menu----------')
    console.log('1. Agregar tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Modificar tarea');
    console.log('5. Mostrar todas las tareas');
    console.log('0. Salir del programa');
}

// Función para interactuar con usuario
function interactuarUsuario() {
    let opcion = -1;
    while (opcion !== 0) {
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese una opción: "));
        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt('Ingrese el concepto de la tarea: ')
                crearTarea(nombreTareaNueva)
                break;
            case 2:
                let eliminarTarea = parseInt(prompt('Ingrese el indice de la tarea a eliminar: '))
                eliminarTarea(eliminarTarea);
                break;
            case 3:
                let marcarTarea = parseInt(prompt('Ingrese el indice de la tarea a completar: '))
                tareaCompletada(marcarTarea);
                break;
            case 4:
                let indiceTarea = parseInt(prompt('Ingrese el indice de la tarea a modificar: '));
                let nuevoConcepto = prompt('Ingrese el concepto nuevo ');
                let cambiaFecha = prompt('Cambia fecha? Ingrese nueva en ese caso: ')

                modificarTarea(indiceTarea, nuevoConcepto, cambiaFecha);
                break;
            case 5:
                console.log('Lista de tareas');
                console.log(tareas);
                break;
            default:
                console.log('Elegiste salir o no elegiste bien');
        }

    };

}

interactuarUsuario()


