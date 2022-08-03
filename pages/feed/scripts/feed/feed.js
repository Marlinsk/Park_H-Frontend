import { baseUrl } from "../../../../services/api.js";
import { templateCard } from "../../../../components/templatecard.js";
import { buscarTodosAnuncios } from "../../../../services/service.js";
import { templateLoading } from "../../../../components/template-loading.js";

const renderCards = document.querySelector("#cardtemplate");
const renderNotFound = document.querySelector("#not-found");
const renderLoading = document.querySelector("#template-loading");

renderLoading.innerHTML = templateLoading();
buscarTodosAnuncios(baseUrl).then((data) => {
  if (data.length === 0) {
    renderNotFound.innerHTML = 'Nenhuma garagem foi encontrada';
    return;
  }
  renderCards.innerHTML = data
    .map((item) => {
      if (item.preco) {
        item.preco = "R$ " + item.preco.toFixed(2);
      }
      return templateCard(item);
    })
    .join("");

    console.log(data);

}).catch((err) => {
  renderNotFound.innerHTML = `Nenhuma garagem foi encontrada`;
  console.log(err);
}).finally(() => renderLoading.innerHTML = '');
