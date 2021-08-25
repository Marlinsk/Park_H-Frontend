import { baseUrl, baseUrl2 } from "../../services/baseUrl.js";
import { objectRequest, postGarage } from "../../services/serviceGarage.js";
import { postPay } from "../../services/servicePay.js";

const sobre = {
  title: "",
  tipoGarage: "",
  description: ""
}
const address = {
  cep: "",
  state: "",
  city: "",
  neighborhood: "",
  street: "",
  number: "",
  complement: ""
}
const charge = {
  price: "",
  typeCharge: ""
}

function getData() {
  return new Promise((resolve) => {
    // Sobre
    sobre.title = document.querySelector(".form-control.titleA").value;
    document.getElementsByName('inlineRadioOptions').forEach(item => {
      if (item.checked) {
        sobre.tipoGarage = item.value;
      }
    });
    sobre.description = document.getElementById("FormControlTextarea").value;

    // Address
    address.cep = document.querySelector("#cep").value;
    address.state = document.querySelector("#uf").value;
    address.city = document.querySelector("#localidade").value;
    address.neighborhood = document.querySelector("#bairro").value;
    address.street = document.querySelector("#logradouro").value;
    address.number = document.querySelector("#numero-residencia").value;
    address.complement = document.querySelector("#complemento").value;

    // charge
    charge.price = document.querySelector("#preco").value;
    charge.typeCharge = document.querySelector("#tipo-de-branca").value;

    const data = {
      bairro: address.neighborhood,
      cep: address.cep,
      cidade: address.city,
      complementoLocal: address.complement,
      descricaoLocal: sobre.description,
      estado: address.state,
      numero: address.number,
      rua: address.street,
      tipoLogradouroString: sobre.tipoGarage,
      tituloAnuncio: sobre.title,
      preco: charge.price,
      tipoCobranca: charge.typeCharge
    }

    resolve(data)
  });
}

document.querySelector(".btn.btn-primary.anunciar")
  .addEventListener("click", () => {
    getData().then(data => postGarage(baseUrl, objectRequest("POST", data)));
  });

document.querySelector(".btn.btn-primary.anunciar")
  .addEventListener("click", () => {
    getData().then(data => postPay(baseUrl2, objectRequest("POST", data)));
  });