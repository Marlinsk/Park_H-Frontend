import { baseUrl } from "../../../services/api.js";
import { templateCard } from "../../../components/templatecard.js";
import { pesquisarAnuncio } from "../../../services/service.js";
import { templateLoading } from "../../../components/template-loading.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id === null) {
  window.location.href = "../../pages/feed/Feed.html";
}
const renderLoading = document.querySelector("#template-loading");
// const editarCampos = document.querySelector("#editar-campos");
// editarCampos.href += `?id=${id}`

// renderLoading.innerHTML = templateLoading();
pesquisarAnuncio(baseUrl, id).then((data) => {
  document.querySelector('#titulo-anuncio').value = data.tituloAnuncio;
  document.getElementById("descricao").value = data.descricao;

  var tipoGarage = document.getElementsByName("TipoGaragem");
  for (var i = 0; i <= tipoGarage.length; i++) {
    if (tipoGarage[i]?.value === data?.tipoLogradouro) {
      tipoGarage[i].checked = true;
    }
  }
  document.querySelector("#tamanho-do-local").value = data.tamanhoLocal;
  document.querySelectorAll("#tipo-de-veiculo option").forEach(item => {
    if (item.value === data.tipoVeiculo) {
      item.selected = true;
    }
  })

  document.querySelector("#vagas").value = data.vagas;

  var horarioFuncionamento = document.getElementsByName("HorarioFuncionamento");
  for (var i = 0; i <= horarioFuncionamento.length; i++) {
    if (horarioFuncionamento[i]?.value === data?.horarioFuncionamento) {
      horarioFuncionamento[i].checked = true;
    }
  }

  document.querySelectorAll("input[name='dias-semana']").forEach(item => {
    let encontrou = data.diasdaSemana.find(dia => dia === item.value);
    if (encontrou) {
      item.checked = true;
    }
  })

  var portaria = document.getElementsByName("flexRadioPortaria");
  for (var i = 0; i <= portaria.length; i++) {
    if (portaria[i]?.value === data?.portaria) {
      portaria[i].checked = true;
    }
  }

  document.querySelectorAll("input[name='vigilancia']").forEach(item => {
    let encontrou = data.recursosVigilancia.find(dia => dia === item.value);
    if (encontrou) {
      item.checked = true;
    }
  })

  document.querySelector("#cep").value = data.cep;
  document.querySelector("#estado").value = data.estado;
  document.querySelector("#nome-da-cidade").value = data.cidade;
  document.querySelector("#bairro").value = data.bairro;
  document.querySelector("#nome-da-rua").value = data.rua;
  document.querySelector("#numero-residencia").value = data.numero;
  document.querySelector("#complemento").value = data.complemento;
  
  document.querySelectorAll("#tipo-de-cobranca option").forEach(item => {
    if (item.value === data.tipoPagamento) {
      item.selected = true;
    }
  })

  document.querySelector("#preco").value = data.preco;

  var horarioFuncionamento = document.getElementsByName("inlineRadioOptionsIPTU");
  for (var i = 0; i <= horarioFuncionamento.length; i++) {
    if (horarioFuncionamento[i]?.value === data?.temIPTU) {
      horarioFuncionamento[i].checked = true;
    }
  }

  document.querySelectorAll("input[name='pagamento']").forEach(item => {
    let encontrou = data.canaisPagamento.find(canais => canais === item.value);
    if (encontrou) {
      item.checked = true;
    }
  })

})
  .finally(() => renderLoading.innerHTML = '');