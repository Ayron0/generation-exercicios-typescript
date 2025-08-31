// 2) Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import leia = require("readline-sync");

let valores: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);
let i: number;
let j: number;
let valor: number;
let indice: number = 0


for(i = 0; i < 2;i++){
    valor = leia.questionInt("\nDigite o numero que voce deseja encontrar: ");
    if(valores.includes(valor) === true) {
        for( j = 0; j < valores.length; j++){
            if(valores[j] === valor){
                indice = j;
            }
        }
        console.log("O numero",valor, "esta localizado na posição", indice);
    }else{
        console.log("O numero", valor, "não foi encontrado");
    }   
}