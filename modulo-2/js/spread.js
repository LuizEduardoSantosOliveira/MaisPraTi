let numeros= [1,2,3];

let novoNumeros = [...numeros, 4, 5];

console.log(novoNumeros);

let pessoa = {nome:"Neymar", idade:30};

let novaPessoa = {...pessoa, cidade:"Santos"};

console.log(novaPessoa);

//function soma(a,b,c){
 //   return a + b + c;

//}

let numeros1 = [1,2,3];

//console.log(soma(...numeros1));


//Rest
function soma(...numeros){
    return numeros.reduce((total, numero) => total + numero)
}

console.log(soma(1,2,3));

const [primeiro,segundo, ...resto] = [1,2,3,4,5];

console.log(primeiro);
console.log(segundo)
console.log(resto);

const pessoas = {nome: "Cassio", idade:38, time: "Cabuloso"};

const {nome, ...outrasinfo} = pessoas;

console.log(nome);
console.log(outrasinfo);