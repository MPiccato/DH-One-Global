let persona = {
    nombre: 'Martin',
    apellido: 'Piccato',
    edad: 46,
    deportes: ['Golf', 'Tenis'],
    hobbys: { 'música': 'tocar guitarra', 'programar': ['Python', 'JavaScript'] },
    presentarse: function () {
        return `Hola, soy ${persona.nombre} y tengo ${persona.edad}`
    }

}
console.log(persona['apellido'])
console.log(persona.deportes)
console.log(persona.hobbys['programar'])

//Agregar una propiedad
persona['trabajo'] = ['desarrollador', 'periodista económico']
console.log(persona)

// Eliminar una propiedad
delete (persona.trabajo)
console.log(persona)

//Acceder a la función
console.log(persona.presentarse())