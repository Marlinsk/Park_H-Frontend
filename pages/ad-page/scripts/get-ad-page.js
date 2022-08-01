import { templateLoading } from "../../../components/template-loading.js";
import { baseUrl } from "../../../services/api.js";
import { pesquisarAnuncio } from "../../../services/service.js";
import { templateCheckIcon } from "../../../components/template-adventedlist.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const renderLoading = document.querySelector("#template-loading");
const editarCampos = document.querySelector("#editar-campos");
editarCampos.href += `?id=${id}`;

renderLoading.innerHTML = templateLoading();
pesquisarAnuncio(baseUrl, id)
  .then((data) => {
    document.querySelector("#tituloAnuncio").textContent = data.tituloAnuncio;
    document.querySelector("#tipoLogradouroString").textContent =
      data.tipoLogradouroString;
    document.querySelector(
      "#endereco"
    ).textContent = `${data?.rua}, ${data?.numero} - ${data?.bairro}, ${data?.cidade} - ${data?.estado}, ${data?.cep}`;
    document.querySelector("#descricao").textContent = data.descricao;
    document.querySelector("#tamanhoLocal").textContent = data.tamanhoLocal;
    document.querySelector("#tipo-veiculo").textContent = data.tipoVeiculo;
    document.querySelector("#numeroVagas").textContent = data.vagas;
    document.querySelector("#complemento").textContent = data.complementoLocal;
    // document.querySelector("#recursosVigilancia").innerHTML =
    //   data.recursosVigilancia.map((item) => templateCheckIcon(item)).join("");

    document.querySelector("#recursosVigilanciaColunaEsquerda").innerHTML =
      data.recursosVigilancia
        .slice(0, 3)
        .map((item) => templateCheckIcon(item))
        .join("");

    document.querySelector("#recursosVigilanciaColunaDireita").innerHTML =
      data.recursosVigilancia
        .slice(3, 6)
        .map((item) => templateCheckIcon(item))
        .join("");

    document.querySelector("#diasdaSemanaColunaEsquerda").innerHTML =
      data.diasdaSemana
        .slice(0, 4) // 0, 1, 2, 3, 4, 5, 6
        .map((item) => templateCheckIcon(item))
        .join("");
    document.querySelector("#diasdaSemanaColunaDireita").innerHTML =
      data.diasdaSemana
        .slice(4, 7)
        .map((item) => templateCheckIcon(item))
        .join("");

    document.querySelector("#horarioFuncionamento").innerHTML =
      data.horarioFuncionamento;
    document.querySelector("#tipoPagamento").innerHTML = data.tipoPagamento;
    document.querySelector("#preco").innerHTML = data.preco.toFixed(2);
    document.querySelector("#iptu").innerHTML = data.temIPTU;
    document.querySelector("#tipo-pagamento").innerHTML = data.canaisPagamento
      .map((item) => templateCheckIcon(item))
      .join("");
  })
  .finally(() => (renderLoading.innerHTML = ""));
