/*
Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico
*/
const funcionarios = [
    {nome: "Lucas", cargo: "Assistente Administrativo",salario: 1500},
    {nome: "Maria", cargo: "Analista de Suporte Técnico",salario: 7400},
    {nome: "Carla", cargo: "Assessor de Marketing",salario: 2200},
    {nome: "Ana Clara", cargo: "Chefe de Cozinha",salario: 9600},
    {nome: "Emanoel", cargo: "Coordenador de Business Intelligence",salario: 43000}
  ]
  
  
  const salarioMinimo = 3050;
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
  }