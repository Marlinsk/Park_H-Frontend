import { templateCard } from "../../components/templatecard.js";
import { getGarage } from "../../services/serviceGarage.js";

getGarage().then(data => {
  const renderCards = document.querySelector("#cardtemplate");
  renderCards.innerHTML = data.map(item => {
    return templateCard(item)
  }).join('');
});
