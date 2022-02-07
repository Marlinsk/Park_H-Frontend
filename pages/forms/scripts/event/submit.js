import { baseUrl, objectRequest } from "../../../../services/api.js";
import { postGarage } from "../../../../services/service.js";
import { getData } from "../getdata/script.js";

document.querySelector(".btn.btn-primary.anunciar").addEventListener("click", (e) => {
  e.preventDefault();
    getData().then(res => {
      let camposPreenchidos = []; 

      Object.keys(res).map(a => { 
        if(res[a] === '' || res[a] === [] || res[a] === undefined || res[a] === NaN) {
         camposPreenchidos.push(a)
        }
      })

      if(camposPreenchidos.length > 0) { 
        alert(`Os campos listados abaixo ainda não foram preenchidos:\n${camposPreenchidos.map(res => res).join(', \n')}`)
      } else {
        getData()
          .then(data => postGarage(baseUrl, objectRequest("POST", data)))
            .then(() =>  alert('Formulário salvo'));
      }
    })
  }
);