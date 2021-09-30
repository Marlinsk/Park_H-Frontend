import { baseUrl, objectRequest } from "../../services/api.js";
import { postGarage } from "../../services/service.js";

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

const title = document.querySelector("#tituloanucio");
title.addEventListener("keypress", function(e) {

  const inputLength = title.value.length;
  const maxChars = 35;
    
  if(inputLength >= maxChars){
    e.preventDefault(); 
  }

});

const desc = document.querySelector("#FormControlTextarea");
desc.addEventListener("keypress", function(e) {

  const inputLength = desc.value.length;
  const maxChars = 350;
    
  if(inputLength >= maxChars){
     e.preventDefault(); 
  }
   
});

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
      preco: parseFloat(charge.price),
      tipoPagamento: charge.typeCharge
    }
    
    console.log(data) 
    
    resolve(data)
  });
}

document.querySelector(".btn.btn-primary.anunciar")
  .addEventListener("click", () => {
    
    if(document.getElementById("tituloanucio", "inlineRadio1", "inlineRadio2", "FormControlTextarea", "cep", "uf", "localidade", "bairro", "logradouro", "numero-residencia", "tipo-de-branca", "preco").value.length != 0){
      getData().then(data => postGarage(baseUrl, objectRequest("POST", data)));
      alert("Anúncio publicado com sucesso!");
    }else{
      alert("O formulário não está completamente preenchido.");
    }
  }
);