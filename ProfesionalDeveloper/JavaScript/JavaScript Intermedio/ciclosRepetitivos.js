const prompt = require('prompt-sync')({ sigint: true });

// While

let contar = 0;
while (contar < 10) {
    console.log(contar);
    contar++;
}

// DO-WHILE

let i = 1;
do {
    console.log(i)
    i++

} while (i < 10);


// FOR
console.log('Iterando con el For')
for (let i = 0; i < 10; i += 2) {
    console.log(`sumando con el for: ${i}`)

}