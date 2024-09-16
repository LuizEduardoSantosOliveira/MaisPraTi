/*
Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.

*/

const empresa = {
    departamentos: [
      {
        nome: "Recursos Humanos",
        funcionarios: [
          {nome: "Ana", cargo: "Gerente de RH", salario: 7000},
          {nome: "João", cargo: "Assistente de RH", salario: 2300}
        ]
      },
      {
        nome: "Tecnologia",
        funcionarios: [
          {nome: "Fred", cargo: "Desenvolvedor Front-end", salario: 4000},
          {nome: "Mario Sérgio", cargo: "Desenvolvedora Back-end", salario: 8500},
          {nome: "Laécio", cargo: "Desenvolvedora Full-Stack", salario: 9500}
        ]
      },
      {
        nome: "Financeiro",
        funcionarios: [
          {nome: "Deosvaldo", cargo: "Analista Financeiro", salario: 5500},
          {nome: "Luciene", cargo: "Contadora", salario: 7000}
        ]
      }
    ]
  };
  
  // Iterar sobre os departamentos e seus funcionários
  for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    
    for (const funcionario of departamento.funcionarios) {
      console.log(`- Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
    }
  }