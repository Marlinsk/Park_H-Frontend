import { templateCard } from "../../components/templatecard.js";
import { obter } from "../../services/serviceGarage.js";

import { obter2 } from "../../services/servicePay.js";

obter().then(data => {
  const renderCards = document.querySelector("#cardtemplate");
  renderCards.innerHTML = data.map(item => {
    return templateCard(item)
  }).join('');
});

/*
obter2().then(data => {
  const renderCards = document.querySelector("#cardtemplate");
  renderCards.innerHTML = data.map(item => {
    return templateCard(item)
  }).join('');
});
*/