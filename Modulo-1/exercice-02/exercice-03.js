/*
- Filtrando Propriedades de Objetos
Dado um objeto produto com várias propriedades, crie uma função que retorna um novo
objeto contendo apenas as propriedades cujo valor seja maior que um valor específico.
Use for in para filtrar as propriedades.
*/

const produto = {
    nome: "caderno",
    preco: 10.99,
    estoque: 70,
    descricao: "um caderno da marca tilibra",
  };
  const valor = 20;
  
  const filtrodoProduto = {};
  for (const key in produto) {
    if (produto[key] > valor) {
      filtrodoProduto[key] = produto[key];
    }
  }
  
  console.log(filtrodoProduto);