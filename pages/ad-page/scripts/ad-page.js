import { templateLoading } from "../../../components/template-loading.js";
import { baseUrl } from "../../../services/api.js";
import { pesquisarAnuncio } from "../../../services/service.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const renderLoading = document.querySelector("#template-loading");

const templateRecursoVigilancia = (item) => `
  <p style="display: flex; align-items: center; margin: 0px; padding: 0px;">
    <img src="../../node_modules/bootstrap-icons/icons/check-all.svg" alt="Check" width="24px"
      height="24px">
    ${item}
  </p>
`

renderLoading.innerHTML = templateLoading();
pesquisarAnuncio(baseUrl, id).then((data) => {
  document.querySelector('#tituloAnuncio').textContent = data.tituloAnuncio;
  document.querySelector('#tipoLogradouroString').textContent = data.tipoLogradouroString;
  document.querySelector('#endereco').textContent = `${data?.rua}, ${data?.numero} - ${data?.bairro}, ${data?.cidade} - ${data?.estado}, ${data?.cep}`;
  document.querySelector('#descricao').textContent = data.descricao;
  document.querySelector('#tamanhoLocal').textContent = data.tamanhoLocal;
  document.querySelector('#recursosVigilancia').innerHTML = data.recursosVigilancia.map(item => templateRecursoVigilancia(item));
})
  .finally(() => renderLoading.innerHTML = '');