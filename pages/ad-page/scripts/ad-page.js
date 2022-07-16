import { templateLoading } from "../../../components/template-loading.js";
import { baseUrl } from "../../../services/api.js";
import { pesquisarAnuncio } from "../../../services/service.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const renderLoading = document.querySelector("#template-loading");

renderLoading.innerHTML = templateLoading();
pesquisarAnuncio(baseUrl, id).then((data) => {
  console.log(data);
})
  .finally(() => renderLoading.innerHTML = '');