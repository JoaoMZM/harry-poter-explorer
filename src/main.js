import criarNavBar, {ativarMenu} from "./components/layout/navbar.component.js";
import { personagensPage } from "./pages/personagens/personagens.page.js";
import { personagensFavoritosPage } from "./pages/personagens/favoritos.page.js";

criarNavBar();
personagensPage();

const btnHome = document.querySelector('#btn-home');
const btnFavoritos = document.querySelector('#btnFavoritos');

btnHome.addEventListener('click', ()=> {
  ativarMenu(btnHome);
  personagensPage();
});

btnFavoritos.addEventListener('click', ()=> {
  ativarMenu(btnFavoritos);
  personagensPage();
});
