/*5-Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/
const prompt = require('prompt-sync') ();

let weight = Number(prompt("Digite o seu peso (em kg): "));
let height = Number(prompt("Digite a sua altura (em metros): "));
let imc = weight / (height * height);
if (imc < 18.5) {
  console.log("Você está abaixo do peso ideal.");
} else if (imc < 25) {
  console.log("Você está com peso normal.");
} else if (imc < 30) {
  console.log("Você está acima do peso ideal.");
} else {
  console.log("Você está com obesidade.");
}
console.log("Seu IMC é: " + imc.toFixed(2));