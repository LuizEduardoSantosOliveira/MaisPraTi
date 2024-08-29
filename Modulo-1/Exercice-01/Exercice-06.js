/*6-Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/
const prompt = require('prompt-sync') ();

let sideA = Number(prompt("\nInforme o valor para o primeiro lado: "));
let sideB = Number(prompt("Informe o valor para o segundo lado: "));
let sideC = Number(prompt("Informe o valor para o terceiro lado: "));

if(sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB){
    if (sideA === sideB && sideB === sideC) {
        console.log("é triangulo e é:Equilátero")  ;
    }else if (sideA ===sideB ||sideB ===sideC ||sideA === sideC) {
        console.log("é triangulo e é:Isoceles")  ;
    } 
    else {
        console.log("é triangulo e é:Escaleno")  ;
    }
}else{
    console.log("Nao é um triangulo") ;
}
    



