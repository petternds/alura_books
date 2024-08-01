const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDelivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDelivrosDisponiveis.innerHTML = ''
  // let disponibilidade = verificarDisponibilidadeDoLivro(livro)
  // let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <img
          class="livro__imagens"
          src="${livro.imagem}"
          alt="${livro.alt}"
        />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
  });
};

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens'
//   } else {
//     return 'livro__imagens indisponivel'
//   }
// }