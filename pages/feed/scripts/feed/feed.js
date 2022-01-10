import { baseUrl } from "../../../../services/api.js";
import { templateCard } from "../../../../components/templatecard.js";
import { getGarage } from "../../../../services/service.js";

getGarage(baseUrl).then(data => {
  const renderCards = document.querySelector("#cardtemplate");
  renderCards.innerHTML = data.map(item => {
    if(item.preco) {
      item.preco = "R$ " + item.preco.toFixed(2)
    }
    return templateCard(item)
  }).join('');
});
