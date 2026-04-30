export function listarFavoritos() {
  return JSON.parse(
    localStorage.getItem('favoritos') || '[]'
  );
}

export function salvarFavorito(personagem) {
    const favoritos = listarFavoritos();

    const jaExiste = favoritos.some(
        fav => fav.name === personagem.name
    );

    if (!jaExiste) {
        favoritos.push(personagem);

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
}

export function removerFavorito(personagem) {
    const favoritos = listarFavoritos();

    const favoritosAtualizados = favoritos.filter(
        fav => fav.name !== personagem.name
    );

    localStorage.setItem('favoritos', JSON.stringify(favoritosAtualizados));
}

export function ehFavorito(personagem) {
    const favoritos = listarFavoritos();
    favoritos.some(
        fav => fav.name === personagem.name
    );
}