#!/bin/bash

ls -la
resultado=$(ls -l)
variable=$(date)

echo "Esto es un script creado por MPiccato"

echo date

echo "Muestro el resultado de la una variable guardada en memoria"

echo "$resultado"
echo "$variable"
exit 0