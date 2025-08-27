// Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// ● Mostre na tela todos os elementos da Collection Set.
import leia = require("readline-sync");

let numeros: Set<number> = new Set<number>();
let i: number;
let j: number;
let num: number;

for(i = 0; i < 2; i++){
    for(j = 0; j < 10; j++){
        num = leia.questionInt('Digite um numero: ');
        numeros.add(num);
    }
  
    for(num of numeros){
        console.log(num)
    }
    numeros.clear() //Tem que limpar o Set numeros. 
}