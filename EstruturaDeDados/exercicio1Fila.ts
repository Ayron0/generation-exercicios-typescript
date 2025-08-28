// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// ● 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// ● 2: Listar todos os Clientes na fila
// ● 3: Chamar (retirar) uma pessoa da fila
// ● 0: O programa deve ser finalizado.
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.

import { Queue } from "../queue";
import leia = require("readline-sync");

const fila = new Queue<string>()
let continuar: boolean = true;
let opcao: number;

//Como o  menu vai se repetir se usa o DoWhile
do{
    console.log("*************************************************");
    console.log("");
    console.log("      1 - Adicionar Cliente na Fila");
    console.log("      2 - Listar todos os Clientes");
    console.log("      3 - Retirar Cliente da Fila");
    console.log("      0 - Sair");
    console.log("");
    console.log("*************************************************");
    console.log("");
    console.log("Entre com a opção desejada: ");

    opcao = leia.questionInt()

    switch(opcao) {
        case 1:
            let nome: string = leia.question('Digite o nome da pessoa: ');
            fila.enqueue(nome);
            console.log('Cliente adicionado!');
            break;
        
        case 2:
            fila.printQueue();
            break;

        case 3:
            if(fila.isEmpty() == true){
                console.log('A fila esta vazia!');
            }else{
                fila.dequeue();
                console.log('Fila: \n')
                fila.printQueue();
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