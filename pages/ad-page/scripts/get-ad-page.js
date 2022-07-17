import { templateLoading } from "../../../components/template-loading.js";
import { baseUrl } from "../../../services/api.js";
import { pesquisarAnuncio } from "../../../services/service.js";
import { templateRecursoVigilancia } from "../../../components/template-adventedlist.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const renderLoading = document.querySelector("#template-loading");
const editarCampos = document.querySelector("#editar-campos");
editarCampos.href += `?id=${id}`

renderLoading.innerHTML = templateLoading();
pesquisarAnuncio(baseUrl, id).then((data) => {
  document.querySelector('#tituloAnuncio').textContent = data.tituloAnuncio;
  document.querySelector('#tipoLogradouroString').textContent = data.tipoLogradouroString;
  document.querySelector('#endereco').textContent = `${data?.rua}, ${data?.numero} - ${data?.bairro}, ${data?.cidade} - ${data?.estado}, ${data?.cep}`;
  document.querySelector('#descricao').textContent = data.descricao;
  document.querySelector('#tamanhoLocal').textContent = data.tamanhoLocal;
  document.querySelector('#recursosVigilancia').innerHTML = data.recursosVigilancia.map(item => templateRecursoVigilancia(item)).join("");
  document.querySelector('#diasdaSemana').innerHTML = data.diasdaSemana.map(item => templateRecursoVigilancia(item)).join("");
  document.querySelector('#horarioFuncionamento').innerHTML = data.horarioFuncionamento;
  document.querySelector('#tipoPagamento').innerHTML = data.tipoPagamento;
  document.querySelector('#preco').innerHTML = data.preco.toFixed(2);
  document.querySelector('#iptu').innerHTML = data.temIPTU;
  document.querySelector('#tipo-pagamento').innerHTML = data.canaisPagamento.map(item => templateRecursoVigilancia(item)).join("");
})
  .finally(() => renderLoading.innerHTML = '');