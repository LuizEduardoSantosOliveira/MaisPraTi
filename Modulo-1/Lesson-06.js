/*console.log(10 > 5);
console.log(10 < 5);
console.log(10 == '10');
console.log(10 === '10');*/
//console.log(10 != '10')

const { Console } = require('console');
const { rmSync } = require('fs');

//operadores logicos

//console.log((10 < 5) && (10 > 2));

//console.log((10 > 5) || (10 > 2));

//console.log((10 > 5) || !(10 > 2));

//let user =  "Luiz";
//let password = "123";

//console.log(user =="Luiz") && (password =="123");

//console.log(user =="Luiz" && (password =="124"));

//ou

//let autentication = user=="Luiz" && password == "123"

//console.log(autentication);

const grade = 60;

if(grade >= 60){
  
    console.log("Aprovado")

}   

else {
    console.log("Reprovado");
}

let age = "17";

if((age >= 18) && (age <= 32 )){
    console.log("Apto a participar");
}

else{
    console.log("Nao apto");
}
// condiçao ? <verdadeiro> : <falso>
let ternaryResult = (10 < 100) ? 'Verdadeira' : 'False'

let number1 = 3;
let number2 = 4;
let number3 = 6;
//Questao 1 numero par ou impar
if(number1 %2 === 0)
{
    console.log("Par");
}
else{
    console.log("impar");
}

if(number2 %2 === 0)
    {
        console.log("Par");
    }
else{
        console.log("impar");
    }
//Questao 2 comparaçao entre 3 numeros
/*if((number1 > number2) &&(number1 > number3)){
    console.log (number1);
}
if((number2 > number1 ) && (number2 > number3)){
    console.log(number2);
}
if((number3 > number2 ) && (number3 > number1)){
    console.log(number3);
}

let soma = (number1 + number2);
let subtracao = (number1 - number2);
let multiplicacao = (number1 * number2);
let divisao = (number1 / number2);

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);*/

const prompt = require('prompt-sync') ();

let num1 = Number(prompt("Insira o primeiro valor"));
let num2 = Number(prompt("Insira o primeiro valor"));

let operation = prompt("Informe a opereçao desejada(+, - , *, /):");
let result = 0;

if(operation === "+"){
    result = num1 + num2;
} else if(operation === "-"){
    result = num1 - num2;
}
else if(operation === "*"){
    result = num1 * num2;
}
else if(operation === "/"){
    if(num2 !==0){
        result = num1 / num2;
    }
    else{
        console.log("Erro: divisao por zero");
        result = undefined;
    }
    
    
   
}else{
     console.log("Operaçao invalida")
     result = undefined;
}

if(result !== undefined){
    console.log("Resultado", result);
}

let option = 1;
switch(option){

    case 1:
    Console.log("Voce selicionou a primeira opção")
    break

    case 2: 
    Console.log("Voce selicionou a segunda opção")
    break

    default:
        console.log("Voce nao escolheu nenhuma opçao")
        break
}


/*Exercício 1: Verifiquem o dia da semana com a estrutura switch-case

Exercício 2: Calcular o número de dias em um mês.

- Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
- Os meses 4, 6, 9 e 11 tem 30 dias 
- Mês 2 tem 28 dias*/

