$("#CPF-CNPJ").keydown(function(){
    try {
        $("#CPF-CNPJ").unmask();
    } catch (e) {}

    var tamanho = $("#CPF-CNPJ").val().length;

    if(tamanho < 11){
        $("#CPF-CNPJ").mask("999.999.999-99");
    } else {
        $("#CPF-CNPJ").mask("99.999.999/9999-99");
    }

    // ajustando foco
    var elem = this;
    setTimeout(function(){
        // mudo a posição do seletor
        elem.selectionStart = elem.selectionEnd = 10000;
    }, 0);
    // reaplico o valor para mudar o foco
    var currentValue = $(this).val();
    $(this).val('');
    $(this).val(currentValue);
});

$("#telefone-celular").mask("+00 (00) 0 0000-0000");
$("#telefone-fixo").mask("+00 (00) 0000-0000");
$("#cep").mask("00000-000");
$("#numero-do-banco").mask("000");
$("#agencia").mask("0000");
$("#conta-corrente").mask("0000000-0");