$("#tamanho-do-local").mask("#####0,0 m", { reverse: true });

$("#tamanho-do-local").on("keyup", function () {
  if ($(this).val().length > 3) {
    mascara = "####00,00 m";
  } else {
    mascara = "####0,0 m";
  }

  $("#tamanho-do-local").mask(mascara, { reverse: true });
});

$("#cep").mask("00000-000");
