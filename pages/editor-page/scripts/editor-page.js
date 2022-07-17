import { baseUrl } from "../../../services/api.js";
import { templateCard } from "../../../components/templatecard.js";
import { pesquisarAnuncio } from "../../../services/service.js";
import { templateLoading } from "../../../components/template-loading.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const renderLoading = document.querySelector("#template-loading");
// const editarCampos = document.querySelector("#editar-campos");
// editarCampos.href += `?id=${id}`

// renderLoading.innerHTML = templateLoading();
pesquisarAnuncio(baseUrl, id).then((data) => {
  document.querySelector('#titulo-anuncio').value = data.tituloAnuncio;
  document.getElementById("descricao").value = data.descricao;
  
  var tipoGarage = document.getElementsByName("TipoGaragem");
  for (var i = 0; i <= tipoGarage.length; i++) {
    if (tipoGarage[i].value === data.tipoLogradouro) {
      tipoGarage[i].checked = true;
    }
  }
  document.getElementById("#tamanho-do-local").value = data.tamanhoLocal;
})
  .finally(() => renderLoading.innerHTML = '');