/*
Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidade
*/

const estoque = [
    {produto: "Caneta", quantidade: 2, minimo: 5},
    {produto: "Caderno", quantidade: 1, minimo: 3},
    {produto: "Lápis", quantidade: 6, minimo: 4},
    {produto: "Apontador", quantidade: 1, minimo: 2},
    {produto: "Borracha", quantidade: 3, minimo: 4}
  ];
  
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2; 
    }
  });
  
  console.log(estoque);