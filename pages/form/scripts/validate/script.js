import { baseUrl, objectRequest } from "../../../../services/api.js";
import { postGarage } from "../../../../services/service.js";
import { getData } from "../getdata/script.js";

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

document.querySelector(".btn.btn-primary.anunciar").addEventListener("submit", () => {
    if (document.getElementById("tituloanucio", "inlineRadio1", "inlineRadio2", "FormControlTextarea", "cep", "uf", "localidade", "bairro", "logradouro", "numero-residencia", "tipo-de-branca", "preco").value.length != 0) {
      getData().then(data => postGarage(baseUrl, objectRequest("POST", data)));
      alert("Anúncio publicado com sucesso!");
    } else {
      alert("O formulário não está completamente preenchido.");
    }
  }
);