/*11-Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/
const prompt = require('prompt-sync') ();
 
let sum = 0;
for(let i = 1; i <= 5; i++){
    let num = Number(prompt(`Escreva o ${i} número: `));
    sum += num;
}

console.log(sum) ;

    