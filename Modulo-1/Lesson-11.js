const prompt = require('prompt-sync') ();

/*let teste = function(){
    console.log("Ola mundo");
}

teste();*/

/*function showFunction(sucessaCallback, erroCallback){
    if(false){
        sucessaCallback("Requisição bem sucedida");
    }
    else{
        erroCallback("Erro na requisição");
    }
}

let sucessaCallback = function(message){
    console.log(message);
}

let erroCallbackCallback = () => {
    console.log(message);
}
showFunction(sucessaCallback, erroCallbackCallback);*/


/*function somaElementosArray(array){
let sum = 0

for(let i = 0; i < array.length; i++){
    sum += array[i];
    
    
}
return sum;
}



console.log(somaElementosArray([10,20,30,40,50]));


//maior numero do array


function maiorNumeroArray(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
    
        if(array[i]> max ) {
          max = array[i];
        }
     }
     return max;
}

console.log(maiorNumeroArray([5,3,4,6]));

//reverter o array
let reverse =  [];

function reverseArray(array){
    for(let k = array.length -1; k >= 0; k--){
        reverse.push(array[k]);
    }
    return reverse;
}

console.log(reverseArray([1,4,5,6]));

//crie um novo array contendo so os pares

function novoArray(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 0){
            array.push(array[i]);
        }
    }
    
    return array;
}

console.log(novoArray([ 1,2,3,4,5,6])); */

/*let name = "Equipe olimpica";
console.log("Luiz".length);//tamanho da string
console.log("Luiz".charAt(0));//o primeiro caractere
console.log(name.indexOf("l"));//posiçao da letra

//console.log(name.replace("luiz", "Lucas")); //alterar o nome

console.log(name.substr(7, 8)); //apartir do 7 pegar os 8 caracteres
console.log(name.toUpperCase());//colocar em maiusculo
console.log(name.toLowerCase());//colocar em minusculo*

console.log("-" + name.trim() + "-");//tirar o espaço em branco das extremidades*/

//metodos matematicos

/*console.log(Math.ceil(100.76));//arrendonda pra cima
console.log(Math.floor(100.76));//arredonda pra baixo
console.log(Math.round(100.76));//arrendoda de forma inteligente pra cima se for 0,5, pra baixo se for < 0,5
console.log(Math.sqrt(100)); //raiz quadrada
console.log(Math.pow(100,2)) //potencia
console.log(Math.cbrt(100)); //raiz cubica
console.log(Math.random());//numero aleatorio*/

//datas

/*let date = new Date();

console.log(date.getDate());

console.log(date.getMonth() + 1);

console.log(date.getFullYear());

console.log(date.getDate() + 765);

console.log(date.toString());

date.setDate(date.getDate() + 678);

console.log(date.toString());

let date1 = new Date(2024,7, 6);
let date2 = new Date(2023,7, 6);
console.log(date1.toString());

console.log(date1.getTime( ));
console.log(date2.getTime( ));

let milisseconds_between_dates = Math.abs(date1.getTime() - date2.getTime());

let milisseconds_per_days = (1 * 24 * 60 * 60 * 1000);
console.log(`Um dia tem ${milisseconds_per_days} milisegundos` );
console.log(`A diferença entre as datas é de ${Math.ceil(milisseconds_between_dates/milisseconds_per_days)} dias`);*/

//Inverter uma string
function reverseString(){

}

//Contar vogais
//Gerar número aleatório
//Dias entre duas datas
//Formatar data