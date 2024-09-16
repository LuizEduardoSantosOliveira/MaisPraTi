/*
Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

const transacoes = [
    {tipo: "entrada", valor: 1500},
    {tipo: "saída", valor: 700},
    {tipo: "entrada", valor: 2500},
    {tipo: "saída", valor: 500},
    {tipo: "entrada", valor: 1400},
    {tipo: "saída", valor: 100},
    {tipo: "entrada", valor: 2000},
    {tipo: "saída", valor: 1500},
    {tipo: "entrada", valor: 7800}
  ];
  
  
  let saldoFinal = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
      saldoFinal += transacao.valor; // Somar entradas
    } else if (transacao.tipo === "saída") {
      saldoFinal -= transacao.valor; // Subtrair saídas
    }
  });
  
  console.log(`Seu saldo final foi: R$${saldoFinal.toFixed(2)}`);