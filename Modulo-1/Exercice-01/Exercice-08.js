/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/
const prompt = require('prompt-sync') ();


let num1 = Number(prompt("Informe numero 1: "));
let num2 = Number(prompt("Informe o número 2: "));
let numOrderCrescent = [];
    
if(num1 === num2){
    console.log("Numero iguais, digite numeros diferentes:");
    numOrderCrescent = 0;
       
} 
if(num1 > num2){
    numOrderCrescent = [num1, num2];
}else if(num2 > num1){
    numOrderCrescent = [num2, num1];
}
