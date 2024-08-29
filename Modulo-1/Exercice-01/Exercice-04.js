/*4-Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
const prompt = require('prompt-sync') ();

let escolha = Number(prompt("Escolha um filme: 1-Como treinar seu dragão 2-Tropa de Elite 3-Detetive Pikachu: " ));

switch(escolha){
    case 1:
        console.log("Escolha:1-Como treinar seu dragão") ;
    break;
    
    case 2:
        console.log("Escolha:2-Tropa de Elite") ;
    break;
    
    case 3:
        console.log("Escolha:3-Detetive Pikachu") ;
    break;
    
    default:
        console.log("Escolha invadlida") ;
        
    }