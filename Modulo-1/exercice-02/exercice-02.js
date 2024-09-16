/*
- Verificando Propriedades
Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. 
Verifique se a propriedade editora existe no objeto usando for in.
Se não existir, adicione essa propriedade ao objeto.
*/

const livro = {
    titulo: "Montanhas do Buda",
    autor: "Javier Moro ",
    anoPublicacao: 2010,
    genero: "Biografia",
  };
  
  const buscaPropriedade = "editora";
  let existePropriedade = false;
  
  for (let key in livro) {
    if (key === existePropriedade) {
      existePropriedade = true;
    }
  }
  
  if (!existePropriedade){
      livro.editora = "Planeta;";
  }
  console.log(livro);