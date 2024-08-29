/*15-Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/
const prompt = require('prompt-sync') ();

for (let i = 2; i < 10; i++) {
    bonacciSequence.push(
    fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
}

console.log(fibonacciSequence);