//Objetos

    let anime = {
    nome: "Monogatari",
    genero:"Slice of life,ecchi,drama",
    nrTemporadas: 8,
    classificacao:16,
    status: "em andamento",
    nrepisodios:{
        temp1: 10,
        temp2: 10,
        temp3: 27,
    },
    mostrarCaracteristicas: function(){
    return(`O nome da serie é : ${this.nome} e sua classificaçao é + ${this.classificacao}`);
    }
}



//console.log(anime);

//console.log(anime.mostrarCaracteristicas());

let livro = {
    titulo:"O Hobbit",
    autor:"J.R.R. Tolkiem",
    ano:1925,
    mostrarCaracteristicas: function(){
        return(this.titulo +  " foi escrito por" + this.autor)
    }
}


//console.log(livro.mostrarCaracteristicas());

let motor = "1000";
let nome = "bmw s1000rr";
let tipo = " Esportiva";

let moto ={
    nome: nome,
    tipo: tipo,
    motor: motor
}

//console.log(moto);

let atleta = {
    nome: "Rayssa Leal",
    esporte: "Skate Street",
    idade: 16
}

atleta.nacionalidade = "Brasil";
atleta.medalhas = {
    ouro: 10,
    prata: 5,
    bronze: 3
}

atleta.celebrarVitoria =  function() {return "Ganhei"}

//console.log(atleta);
//console.log(atleta.celebrarVitoria);

let obj1 = {
    nome:"Bruce",
    profissao: "Batman"
}


let obj2 = obj1;

obj2.companheiro = "Robin";

//console.log(obj1);
//console.log(obj2);

//funçao construtora

function computador(processador, gpu, ram, armazenamento){

this.processador = processador
this.gpu = gpu
this.ram = ram
this.armazenamento = armazenamento

this.turnOn = function(){
    //console.log(`o ${this.processador} esta funcionando`)
}

this.mostrarEspecificacoes = function(){
   return`processador: ${this.processador}
          gpu: ${this.gpu}
          ram: ${this.ram}
          armazenamento: ${this.armazenamento}`
}

}

let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD");

//console.log(pc.mostrarEspecificacoes());

function jogos(titulo, genero,anoLancamento, desenvolvedora, jogar){
    return {
        titulo,
        genero,
        anoLancamento,
        desenvolvedora,
        jogar
        

        }
    
}

let jogo1 = jogos ("Final Fantasy", "RPG", "1997", "Square Soft",() => console.log("Jogando"));

//console.log(jogo1.jogar);

for(let key in jogo1){ //interar entre propriedades enumeraveis
    //console.log(`${key}: ${jogo1}`);
}

const jogadores = ["Pelé", "Cr7", "Messi"]; 

for(let jogador of jogadores){ //intertar, depende de ser interavel
    console.log(jogador)
}


for(let key in livro ){
    console.log(livro);
}
