export async function personagensFavoritosPage() {
    const app = document.querySelector('#app');

    app.innerHTML = `<h1 class="fw-bold text-primary">⭐ Personagens</h1>
    ${spinnerCarregamento()}
    <div class="row mt-4 d-none" id="lista-personagens"></div>
    <div id="paginacao"></div>`
}