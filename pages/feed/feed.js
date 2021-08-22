import { templateCard } from "../../components/templatecard.js";
import { obter } from "../../services/serviceGarage.js";

obter().then(data => {
  const renderCards = document.querySelector("#cardtemplate");
  renderCards.innerHTML = data.map(item => {
    return templateCard(item)
  }).join('');
});