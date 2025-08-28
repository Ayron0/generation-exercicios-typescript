// 2)Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// ● 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// ● 2: Listar todos os livros da Pilha
// ● 3: Retirar um livro da pilha
// ● 0: O programa deve ser finalizado.
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.

import leia = require("readline-sync");
import { Stack } from '../stack';

const pilha = new Stack<string>()
let continuar: boolean = true;
let opcao: number;

do{
    console.log("*************************************************");
    console.log("");
    console.log("      1 - Adicionar livros na pilha");
    console.log("      2 - Listar todos os Livros");
    console.log("      3 - Retirar livro da pilha");
    console.log("      0 - Sair");
    console.log("");
    console.log("*************************************************");
    console.log("");
    console.log("Entre com a opção desejada: ");

    opcao = leia.questionInt()

    switch(opcao) {
        case 1:
            let nome: string = leia.question('Digite o nome do livro: ');
            pilha.push(nome);
            console.log('Livro adicionado!');
            break;
        
        case 2:
            pilha.printStack();
            break;

        case 3:
            if(pilha.isEmpty() == true){
                console.log('A Pilha esta vazia!');
            }else{
                pilha.pop();
                console.log('Pilha: \n')
                pilha.printStack();
            }
            break;
        
        case 0:
            continuar = false;
            break;
        default:
            console.log('Opção invalida!');
    }
    console.log(opcao)

}while(continuar)