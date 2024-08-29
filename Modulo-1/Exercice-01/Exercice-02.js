/*2-Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/
const prompt = require('prompt-sync') ();

let age = Number(prompt("Informe a idade: "))
let ageRange = "";
    
if(age >= 0 && age <= 12){
     ageRange = "Criança";
    console.log(ageRange) ;
}else if(age >= 13 && age <= 17){
     ageRange = "Adolescente";
     console.log(ageRange) ;
}else if(age >= 18 && age <= 60){
    ageRange = "Adulto";
    console.log(ageRange) ;
}else if(age >= 60 && age <= 100){
    ageRange = "Idoso";
    console.log(ageRange) ;
}else{
    ageRange = "Idade invalida";
    console.log(ageRange) ;
}