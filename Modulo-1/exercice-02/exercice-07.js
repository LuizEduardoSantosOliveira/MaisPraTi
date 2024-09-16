/*
Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/
desconto_produtos = 0.1

const produtos =[
  {nome:"MonitorMonitor Gamer AOC Hero 27 165Hz", preco: 899, desconto: desconto_produtos},
  {nome:"Cadeira Gamer", preco: 600, desconto: desconto_produtos},
  {nome:"Teclado Gamer Mecanico Sem Fio RGB Attack Shark K86 ", preco: 429, desconto: desconto_produtos},
  {nome:"Placa de video RTX 4090", preco: 12559, desconto: desconto_produtos},
  {nome:"Playstation 5", preco: 3533, desconto: desconto_produtos},

]

produtos.forEach(produto => {
  let precoNovo = produto.preco * (1 - produto.desconto);
  console.log(`Produto: ${produto.nome}, Preço original: R$${produto.preco}, Novo preço: R$${precoNovo.toFixed(2)}`);
});