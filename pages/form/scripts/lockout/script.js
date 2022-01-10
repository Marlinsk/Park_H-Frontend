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