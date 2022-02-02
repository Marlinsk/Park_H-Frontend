$("#nome-completo", "#titulo-anuncio", "#estado").on('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$("#nome-do-banco", "#descricao", "#nome-da-cidade", "#bairro", "#nome-da-rua", "#complemento").on('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇ0-9 ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$("#numero-residencia").on('keypress', function (event) {
  var regex = new RegExp("^[a-zA-Z0-9 ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$("#capacidade").on('keypress', function (event) {
  var regex = new RegExp("^[0-9 ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});