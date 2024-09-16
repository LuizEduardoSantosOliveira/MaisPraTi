/*
Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

const clientes = [
    {nome: "Ana Zaira", idade: 20, cidade: "Arapiraca"},
    {nome: "Pedro", idade: 24, cidade: "São Paulo"},
    {nome: "Zé Ivaldo", idade: 27, cidade: "Belo Horizonte"},
    {nome: "Matheus Pereira", idade: 28, cidade: "Belo Horizonte"},
    {nome: "Cássio", idade: 37, cidade: "Belo Horizonte"}
  ];
  
  let clientesMaisDe30 = 0;
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      clientesMaisDe30++;
    }
  });
  
  console.log(`Quantidade de clientes com mais de 30 anos: ${clientesMaisDe30}`);