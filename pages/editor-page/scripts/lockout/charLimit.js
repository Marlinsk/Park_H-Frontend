const title = document.querySelector("#titulo-anuncio");
title.addEventListener("keypress", function(e) {
  const inputLength = title.value.length;
  const maxChars = 35;
  if(inputLength >= maxChars){
    e.preventDefault(); 
  }
});

const desc = document.querySelector("#descricao");
desc.addEventListener("keypress", function(e) {
  const inputLength = desc.value.length;
  const maxChars = 1500;
  if(inputLength >= maxChars){
     e.preventDefault(); 
  }
});