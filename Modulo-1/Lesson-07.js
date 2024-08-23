//Variavel; <condiçao>; incremento;
const prompt = require('prompt-sync') ();

//let multiplier = Number(prompt('Informe o numero que você quer saber da tabuada: '));

/*for(let counter = 0; counter <= 10; counter++){
    console.log(`${multiplier} * ${  counter} =`, multiplier * counter);
}

//Imprimir valores pares entre 1 e 20
for(let i = 0; i <= 20; i += 2){
    console.log(i);
}
*/
//calcular a soma dos numeros de 1 a 100

/*let sum = 0

for(let counter1 = 1; counter1 <= 100; counter1++){
 sum += counter1
}

console.log(sum);

for(let counter2 = 10; counter2 >=1; counter2 --){
    console.log(counter2)
   }*/

    let i = 10;
    let sum = 0
    while(i > 0){
        console.log(i);
        i--;
    }

    let a = 0;
    while(i <= 100){
        sum += i;
        i++;
        ;
    }
    console.log(sum);

    //fazer um algoritimo para receber numeros decimais ate que o usuario digite 0 e fazer
    //a media aritmetica desses numeros 

    /*let num1 = Number(prompt("Insira o primeiro numero: "));
    let contador = 0
    let soma = 0;
    
    while(num1 !==0){
        soma += num1;
        contador++;
        num1= Number(prompt("Digite outro numero:"))
    }

    console.log("A media aritmetica é", soma/contador);*/


    //Solicitar numeros ate que ele insira um valor negativo

    let num1 = 0
    do{
         num1 = Number(prompt("Ditgite outro numero"));
        
    }
    
    while(num1 >= 0){

    }
