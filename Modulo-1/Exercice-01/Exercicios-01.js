/*Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

const prompt = require('prompt-sync') ();


let num = Number(prompt("Informe um numero: "));

if(num %1 === 0 ){
    if(num %2 === 0){
        onsole.log("Numero par");
    }
        
    if(num %2 !== 0){
        console.log("Numero impar");
    }
}

 if(num %1 !== 0){
     console.log("O número nao é inteiro, digite novamente: ") ;
}
