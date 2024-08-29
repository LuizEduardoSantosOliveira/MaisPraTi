/*Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/
const prompt = require('prompt-sync') ();


let grade = Number("\nInforme sua nota de 0 a 10: ");

if(grade < 0  || grade > 10 ){
     console.log("Numero invalido, digite novamente") ;
 }

if(grade >= 6){
     console.log("Aprovado") ;
}else if(grade > 3 && grade < 6){
    console.log("Recuperação") ;
}else{
     console.log("Reprovado") ;
}
