// Crear una matriz
let matriz = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

console.table(matriz)

//Acceder a valores de las matrices
console.log(matriz[1][1])

//Modificar elementos
matriz[0][1] = 1;
console.table(matriz);

//Recorrer una fila en específicoñ
for (j = 0; j < matriz[0].length; j++) {
    console.log(matriz[0][j]);

};
//Recorrer una columna en específicoñ
for (j = 0; j < matriz.length; j++) {
    console.log(matriz[j][0]);

};