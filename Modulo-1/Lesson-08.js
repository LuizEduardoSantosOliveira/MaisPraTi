const prompt = require('prompt-sync') ();
//Exercicio 1 Verifique se um número é positivo, negativo ou zero

//const num1 = Number(prompt("Digite um numero:"));

/*if(num1 > 0){
    console.log("Numero positivo");
} else if (num1 < 0){
    console.log("Numero negativo");
} else if(num1 === 0){
    console.log("numero zero");
} else{
    console.log("Erro informe um número valido");
}*/

// 2 Verifique se um ano é bissexto

/*const year = Number(prompt("Informe um ano: "));

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(`O ano ${year} é bissexto`);
} else{
    console.log(`${year} nao é um ano bissexto`);
}*/

//3 - Calcule a média de três números e determine o conceito

/*let grade1 = Number(prompt("Informe a primeira nota: "));
let grade2 = Number(prompt("Informe a segunda nota: "));
let grade3 = Number(prompt("Informe a terceira nota: "));

let avg = (grade1 + grade2 + grade3) /3 ;
let concept = "";

if(avg >= 90){
    console.log(`A media é ${avg.toFixed(2)}`);
    concept = "A";
} else if (avg <= 80){
    console.log(`A media é ${avg.toFixed(2)}`);
    concept = "B";
} else {
    console.log("é outra nota");
}
console.log("O conceito é " + concept);*/

//9 - Verifique a faixa etária de uma pessoa'

/*let age = Number(prompt("Informe a idade"))



let ageRange = "";

if(age >= 0 && age <= 12){
    ageRange = "Criança";
} else if(age >= 13 && age <= 17){
    ageRange = "Adolescente";
}
else if(age >= 18 && age <= 60){
    ageRange = "Adulto";
}else{
    ageRange = "Idade invalida";
}

switch(ageRange){
    case "Criança":
        console.log("Voce é uma criança");
        break;
    case "Adolescente":
        console.log("Voce é um adolescente");
        break;
    case "Adulto":
        console.log("Voce é um adulto");
    default:
        console.log("Idade invalida");
}*/

//10 Encontre o maior divisor comum (MDC) de dois números

/*let num1 = Number(prompt("Informe o primeiro numero "));
let num2 = Number(prompt("Informe o segundo numero "));

let a = num1;
let b = num2;

do{
    let temp = b;
    b = a % b;
    a = temp;
}while(b !== 0){

}

const mdc = a;

console.log(`o maior divisor comum de ${num1} e ${num2} é ${mdc}`);*/

//Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.

/*let prime = Number(prompt("qual numero que desejaverificar"));

for( let i = 1; i < prime; i++){
    if((prime % i === 0) && (I !== 1)){
        console.log("Nao e primo");
        break;
    }

    if(i === (prime - 1)){
        console.log("É primo");
    }

}*/

/*let count = 0;
let num = 101;
do{
    let primo = 0;
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            primo++;
        }
    }

    if(primo === 2 ){
        console.log(num);
        count++
    }

    num++
}while(count < 50)*/

//array

let carros = Array()
//array em js pode td, nao precisa especificar o tamanho    

carros[0] = "Civic";
carros[1] = 10;
carros[2] = true;
carros["Hyago"] = "10";

let motos = Array("cbr", "ninja", 10);
console.log(motos);

let livros = ["Senhor dos aneis", "O hobbit", "Harry Potter"];

console.log(livros);

//livros.push("Sherlock Holmes");//adiciona no fim
//livros.unshift("1984");//adiciona no inicio
//livros.pop()//remove do fim
//livros.shift();//remove do inicio

livros.splice(2, 0, "Montanhas do Buda");//posiçao 2, nao deletar, inserir na posiçao 2 a string
console.log(livros);