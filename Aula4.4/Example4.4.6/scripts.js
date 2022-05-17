// Exercicio 4.4.6 Bloco 4.4
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: 
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
  };
  let title = leitor.livrosFavoritos;
  console.log("O livro favorito de " + leitor.nome + "" + leitor.sobrenome + " se chama " + title.titulo);
  console.log("O livro favorito de " + leitor.nome + "" + leitor.sobrenome + " se chama " + leitor.livrosFavoritos.titulo);
  console.log("O livro favorito de " + leitor.nome + "" + leitor.sobrenome + " se chama " + leitor.livrosFavoritos['titulo']);