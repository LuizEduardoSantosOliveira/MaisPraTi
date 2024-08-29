/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10)
 utilizando um loop for.*/
 const prompt = require('prompt-sync') ();
 
 let num1 = Number(prompt("Digite um número de 1 a 10 que queira saber a tabuada: "));
 let result = 0;
 for (let i = 1; i <= 10; i++) {
     result = num1 * i;
     console.log(`${num1} x ${i} = ${result}`);
  };
 
  
     