const prompt = require('prompt-sync') ();

//Colocar tudo em função

//let num = Number(prompt("Informe um numero: "));

/*if(num %1 === 0 ){
    if(num %2 === 0){
        console.log("Numero par")
    }
    
    if(num %2 !== 0){
        console.log("Numero impar");
    }
}

if(num %1 !== 0){
    console.log("O número nao é inteiro, digite novamente: ");
}*/


/*let age = Number(prompt("Informe a idade: "))

let ageRange = "";

if(age >= 0 && age <= 12){
    ageRange = "Criança";
    console.log(ageRange);
} else if(age >= 13 && age <= 17){
    ageRange = "Adolescente";
    console.log(ageRange);
}
else if(age >= 18 && age <= 60){
    ageRange = "Adulto";
    console.log(ageRange)
}else if(age >= 60 && age <= 100){
    ageRange = "Idoso";
    console.log(ageRange)
}else{
    ageRange = "Idade invalida";
    console.log(ageRange);
}*/

/*let grade = Number("Informe sua nota de 0 a 10: ");

if(grade < 0  || grade > 10 ){
    console.log("Numero invalido, digite novamente");
}

if(grade >= 6){
    console.log("Aprovado");
}else if(grade > 3 && grade < 6){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}*/

/*let escolha = Number"Escolha um filme: 1-Como treinar seu dragão 2-Tropa de Elite 3-Detetive Pikachu: " );

switch(escolha){
    case 1:
    console.log("Escolha:1-Como treinar seu dragão");
    break;

    case 2:
    console.log("Escolha:2-Tropa de Elite");
    break;

    case 3:
    console.log("Escolha:3-Detetive Pikachu");
    break;

    default:
    console.log("Escolha invadlida");
    
}*/


/*let sideA = Number(prompt("Informe o valor para o primeiro lado: "))
let sideB = Number(prompt("Informe o valor para o segundo lado: "))
let sideC = Number(prompt("Informe o valor para o terceiro lado: "))

if(sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB){
    if (sideA === sideB && sideB === sideC) {
        console.log("é triangulo e é:Equilátero") ;
    } 
    else if (sideA ===sideB ||sideB ===sideC ||sideA === sideC) {
        console.log("é triangulo e é:Isoceles") ;
    } 
    else {
        console.log("é triangulo e é:Escaleno") ;
    }
}else{
    console.log("Nao é um triangulo");
}*/


/*function addApple(){
    let numApple = Number(prompt("digite a quantidade de maçãs:"));
    let sumApple = 0;
    if(numApple < 12){
        for(let i = 0; i <= numApple; i++){
            sumApple = i * 0.30;
        }
    }else if(numApple >= 12){
        for(let i = 0; i <= numApple; i++){
            sumApple = i * 0.25;
        }
    }   

    return `O numero de maçãs compradas foram ${numApple} custando ${sumApple}R$`

    
   
}

console.log(addApple());*/

/*function orderCrescent(){
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

    return numOrderCrescent;
}

console.log(orderCrescent());*/


 /*let counter = 0;

 for(let i  = 10; i > counter; i--){
        console.log(`Contagem regressiva em ${i}`);
     }*/



  /*  let num = Number(prompt("Informe um numero"));

    if(num %1 !== 0){
        console.log("O número precisa ser inteiro");
    }

    for(let i = 0; i < 10; i++){
        console.log(num);
    }*/
 
/*function sumAll(){
    
    let sum = 0;
    for(let i = 1; i <= 5; i++){
        let num = Number(prompt(`Escreva o ${i} número: `));
        sum += num;
    }

    return sum;
}
    

console.log(sumAll());*/

/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10)
 utilizando um loop for.*/
 
/*let num = Number(prompt("Digite um número de 1 a 10 que queira saber a tabuada: "));
let result = 0;
for (let i = 1; i <= 10; i++) {
    result = num * i;
    console.log(`${num} x ${i} = ${result}`);
 };*/

 
    /*function  arithmeticAverage(){
        let num = Number(prompt("Insira o primeiro numero: "));
        let counter = 0
        let sum = 0;
    
        while(num !==0){
            sum += num;
            counter++;
            num = Number(prompt("Insira outro numero: "))
        }
    
       return "A media aritmetica é", sum/counter
    }
    
    console.log(arithmeticAverage());*/

/*function factorial(){
let num = Number(prompt("Digite um número: "));
let result = 1;
for (let i = 1; i <= num; i++) {
  result *= i;
}
return `O fatorial de ${num}; é ${result}.`

}

console.log(factorial());*/

function fibonacciSequence(){
    let fibonacciSequence = [0, 1];
    for (let i = 2; i < 10; i++) {
        bonacciSequence.push(
        fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
    );
    }

    return sequenciaFibonacci;
}
console.log(fibonacciSequence());
 




