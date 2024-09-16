/*
Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

const carrinho = {
    itens: [
      { nome: "Monitor Gamer AOC Hero 27 165Hz Gamer AOC Hero 27 165Hz", quantidade: 2, precoUnitario: 1900 },
      { nome: "Cadeira Gamer", quantidade: 1, precoUnitario: 700 },
      { nome: "Teclado Gamer Mecanico Sem Fio RGB Attack Shark K86", quantidade: 3, precoUnitario: 340 },
      { nome: "Placa de video RTX 4090", quantidade: 1, precoUnitario: 12000 },
      { nome: "Processador Ryzen 5700x", quantidade: 2, precoUnitario: 1500 },
    ],
  };
  
  
  let valorTotalCarrinho = 0;
  
  carrinho.itens.forEach((item) => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario;
  });
  
  console.log(`O valor total vendido no carrinho foi: R$${valorTotalCarrinho.toFixed(2)}`);