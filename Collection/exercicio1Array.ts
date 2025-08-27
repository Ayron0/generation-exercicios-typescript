import leia = require("readline-sync");

let cores: Array<string> = new Array<string>();
let i: number;
let cor: string;

for(i = 0; i < 5; i++){
    cor = leia.question('Digite uma cor: ');
    cores.push(cor)
}

console.log('\nListar todas as cores:\n');
for(cor of cores){
    console.log(cor)
}

console.log('\nOrdenar as cores:\n');
cores.sort()

for(cor of cores){
    console.log(cor)
}