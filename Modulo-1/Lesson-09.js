//1 Soma dos elementos de um array

let numeros = []

numeros[0] = [1];
numeros[1] = [2];
numeros[2] = [3]; 
numeros[3] = [4];

sum = 0

for(let i = 0; i < numeros.length; i++){
    sum += numeros[i];
    
}

console.log(sum);

//maior numero do array

//let max = numeros[0];

/*for(let i = 0; i < numeros.length; i++){
    
   if(numeros[i]> max ) {
     max = numeros[i];
   }
}*

console.log(max); */

//reverter o array
/*let reverse =  [];

for(let k = numeros.length -1; k >= 0; k--){
    reverse.push(numeros[k]);
}
  
console.log(reverse);*/

//crie um novo array contendo so os pares
/*let numeros = [0,2,5,7,4,6,8];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 0){
        numeros.push(numeros[i]);
    }
}

console.log(numeros);*/