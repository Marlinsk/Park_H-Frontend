import { baseUrl, objectRequest } from "../../../../services/api.js";
import { postGarage } from "../../../../services/service.js";
import { getData } from "../getdata/script.js";

document.querySelector(".btn.btn-primary.anunciar").addEventListener("click", (e) => {
  e.preventDefault();
    // if (document.getElementById("tituloanucio", "inlineRadio1", "inlineRadio2", "FormControlTextarea", "cep", "uf", "localidade", "bairro", "logradouro", "numero-residencia", "tipo-de-branca", "preco").value.length != 0) {
    //   getData().then(data => postGarage(baseUrl, objectRequest("POST", data)));
    //   alert("Anúncio publicado com sucesso!");
    // } else {
    //   alert("O formulário não está completamente preenchido.");
    // }

    getData().then(res => console.log(res))
  }
);