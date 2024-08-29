/*10-Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
const prompt = require('prompt-sync') ();

let num = Number(prompt("Informe um numero"));

if(num %1 !== 0){
    console.log("O número precisa ser inteiro");
}

for(let i = 0; i < 10; i++){
    console.log(num);
}