package main

import "fmt"

func main() {
	var nombre string = "Martin"            // Declaración de variable con tipo de dato
	var apellido = "Piccato"                // Declaración de variable sin tipo de dato
	edad := 46                              // Declaración de variable con tipo de dato implícito
	fmt.Println("Hola, " + nombre)          // Concatenación que requiere el espacio en el string
	fmt.Println("Mi apeliddo es", apellido) // Concatenación que no requiere el espacio en el string
	fmt.Println("Tengo", edad, "años")      // Concatenación que no requiere el espacio en el string
}
