import { apagarAnuncio } from "../../../services/service.js";
import { baseUrl, objectRequest } from "../../../services/api.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function deleteAd (e) {
  e.preventDefault();
  apagarAnuncio(baseUrl, id, objectRequest('DELETE'))
    .finally(() => window.location.href = "../feed/Feed.html")
}


const excluirAction = document.querySelector(".delete");
excluirAction.addEventListener('click', deleteAd);