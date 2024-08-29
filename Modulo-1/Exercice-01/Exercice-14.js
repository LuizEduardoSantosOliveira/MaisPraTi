/*14-Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/
const prompt = require('prompt-sync') ();

function factorial(){
let num = Number(prompt("Digite um número: "));
let result = 1;
for (let i = 1; i <= num; i++) {
  result *= i;
}
console.log(`O fatorial de ${num}; é ${result}.`) ;

}