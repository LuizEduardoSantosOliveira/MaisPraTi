/*
Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

const pedidos = [
    {cliente: "Lucas", produto: "Mouse Gamer", quantidade: 3},
    {cliente: "lilly", produto: "Monitor", quantidade: 1},
    {cliente: "manoel", produto: "Teclado Mecânico", quantidade: 3},
    {cliente: "Ana Zaira", produto: "Placa de Vídeo", quantidade: 1},
    {cliente: "Beatriz Yana", produto: "Playstation 5", quantidade: 2},
    {cliente: "Cecília xerces", produto: "Monitor", quantidade: 1},
    {cliente: "Luiz", produto: "Cadeira Gamer", quantidade: 1}
  ];
  
  
  let produtosTotalPorCliente = {};
  
  pedidos.forEach(pedido => {
    if (produtosTotalPorCliente[pedido.cliente]) {
      produtosTotalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      produtosTotalPorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  
  console.log(produtosTotalPorCliente);