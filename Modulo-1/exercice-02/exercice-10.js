/*
Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.

*/
const vendas = [
    {nome: "Monitor", quantidade: 5, valor: 1800},
    {nome: "Cadeira Gamer", quantidade: 3, valor: 700},
    {nome: "Teclado Mecânico", quantidade: 7, valor: 420},
    {nome: "Placa de Vídeo", quantidade: 2, valor: 5000},
    {nome: "Playstation 5", quantidade: 9, valor: 3533},
    {nome: "Mouse Gamer", quantidade: 3, valor: 175},
    {nome: "Gabinete", quantidade: 5, valor: 350},
    {nome: "HeadSet", quantidade: 10, valor: 250}
  ];
  
  let valorTotalVendas = 0;
  vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
  });
  
  console.log(`O Valor total vendido foi: R$${valorTotalVendas.toFixed(2)}`);