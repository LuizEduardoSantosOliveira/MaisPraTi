/*
Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

const filmes = [
    {titulo: "Detetive Pikachu", diretor: "Rob Letterman", anoLancamento: 2019},
    {titulo: "Corra", diretor: "Jordan Peele", anoLancamento:2017},
    {titulo: "Como Treinar o Seu Dragão", diretor: "Dean DeBlois, Chris Sanders", anoLancamento: 2010},
    {titulo: "John Wick", diretor: "Chad Stahelski", anoLancamento: 2014},
    {titulo: "Tropa de Elite", diretor: "José Padilha", anoLancamento: 2007}
  ];
  const nomeDosFilmes = [];
  filmes.forEach(filme => {
    nomeDosFilmes.push(filme.titulo);
  });
  
  console.log(nomeDosFilmes);