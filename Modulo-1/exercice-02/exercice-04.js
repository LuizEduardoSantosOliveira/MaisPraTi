/*
- Iterando Sobre Arrays de Objetos
Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome,
idade, e cidade. Use for of para exibir as informações de cada pessoa no console.
*/
const pessoas = [
    { nome: "Lucas", idade: 25, cidade: "Xique-Xique" },
    { nome: "Carlos", idade: 33, cidade: "Juiz de Fora" },
    { nome: "Talita", idade: 22, cidade: "Belo Horizonte" },
  ];

  let num = 1
  for(let pessoa of pessoas){
      console.log(`--- Pessoa Número ${num} ---`);
      console.log(`Nome:${pessoa.nome}\nIdade:${pessoa.idade}\nCidade:${pessoa.cidade}\n`)
      num++
  }
  console.log('--- Lista Encerrada ---')