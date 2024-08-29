/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/
const prompt = require('prompt-sync') ();


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

console.log(`O numero de maçãs compradas foram ${numApple} custando ${sumApple}R$`)
                                                    
    
   
