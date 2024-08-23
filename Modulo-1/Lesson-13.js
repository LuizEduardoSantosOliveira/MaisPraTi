const prompt = require('prompt-sync') ();
/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média 
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 3.0 como média).
*/
let professor = {

    nome : "Jaques",
    disciplina :  "Prog",
    grades: {
        student1: 5.0,
        student2: 5.0,
        student3: 5.0
    }


}

let somaDasNotas = 0;
let quantidadeDeAlunos = 0
//let avg = (grade) /3 ;

for(let key in professor.grades){
   somaDasNotas += professor.grades[key];
   quantidadeDeAlunos++;
}

let media = somaDasNotas / quantidadeDeAlunos;

if(media > 6.0){
    console.log(`com a media ${media}, os alunos ${professor.nome} estao aprovados`);
}else{
    console.log("Abaixo da media");
}

/*Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.*/


    const library = [
        { title: "O Hobbit", author: "J. R. R. Tolkien", year:1925},
        { title: "Monogatari", author: "Nissio issin", year:2012},
        { title: "As montanhas do buda", author: "J. R. R. Tolkien", year:2018},
    ]
    
  for( let book of library){
    if(book.year > 2000){
        console.log(`o livro ${book.title},escrito por ${book.author}, com ano de lançamento: ${book.year}`);
    }
    
  }

  /*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada jogos, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const jogos = [
    { title: "Pokemon Fire Red", editora: "Nintendo", year:2004, genero:"rpg"},
    { title: "Genshin impact", editora: "hoyoverse", year:2020, genero: "gacha"},
    { title: "League of legends", editora: "Riot game", year:2018, genero: "moba"},
]

let generoCount = {};

jogos.forEach(jogo => {
    if(generoCount[jogo.genero]){
        generoCount[jogo.genero]++;

    }else {
        generoCount[jogo.genero] = 1;
    }
});

for(let genero in generoCount){
    console.log(`Existem ${generoCount[genero]} filmes do genero ${genero}`);   
}