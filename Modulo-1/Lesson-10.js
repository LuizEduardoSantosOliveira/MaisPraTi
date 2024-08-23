const prompt = require('prompt-sync') ();

/*let thinglist = Array();

thinglist["Hardware"] = Array();
thinglist["fruits"] = Array();
thinglist["People"] = Array("Aristoteles", "Talkien");

thinglist["Hardware"][0] = "Notebook";
thinglist["fruits"][0] = "Laranja";

console.table(thinglist);*/

/*let fruitslist =  Array();

fruitslist[0] = "Maçã";
fruitslist[1] = "banana";
fruitslist[2] = "Melancia";
fruitslist[3] = "uva";
fruitslist[4] = "abacaxi";
fruitslist[5] = "morango";

console.log(fruitslist.indexOf("morango"));
let index = fruitslist.indexOf("morango");*/

/*if(index === -1){
    console.log("elemento nao existe")
}else{
    console.log(`O elemento existe e esta na posiçao: ${index} `);
}*/

let width = 10;
let height = 50;

function calculateLandArea(width, height){
    let area = width * height;
    return area; //precisa retornar algo
}


let area = calculateLandArea(width, height);
console.log(`a area possui ${area} metros`);

let fruitslist =  Array();

fruitslist[0] = "maçã";
fruitslist[1] = "banana";
fruitslist[2] = "melancia";
fruitslist[3] = "uva";
fruitslist[4] = "abacaxi";
fruitslist[5] = "morango";

function ordenarAlfabeticamente(arrayParaSerRetornado){
   
    return arrayParaSerRetornado.sort();
}


console.log(ordenarAlfabeticamente(fruitslist));

/*console.log(fruitslist.sort()); funçao para ordenar

let numberlist = [];

numberlist[0] = 10;
numberlist[1] = 12;
numberlist[2] = 18;
numberlist[3] = 16;
numberlist[4] = 24;

console.log(numberlist.sort((a,b) => a- b));*/ //funçao para ordenar

