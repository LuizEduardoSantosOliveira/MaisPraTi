/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/
const prompt = require('prompt-sync') ();


let num = Number(prompt("Insira o primeiro numero: "));
let counter = 0;
let sum = 0;

while(num !==0){
    sum += num;
    counter++;
    num = Number(prompt("Insira outro numero: "));
}

 console.log("A media aritmetica é", sum/counter) ;


