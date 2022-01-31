// const cep = document.querySelector("#cep");

// const showData = (result) =>{
//     for(const campo in result){
//         if(document.querySelector("#" + campo)){
//            document.querySelector("#" + campo).value = result[campo] 
//         }
//     }
// }

// cep.addEventListener("blur", (e) => {
//     let search = cep.value.replace("-", "")
//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
//     }

//     fetch(`https://viacep.com.br/ws/${search}/json/`, options)
//     .then(response => { response.json()
//         .then(data => showData(data))
//     }).catch(e => console.log('Deu erro: ' + e, message))

// })

$('#cep').blur(function () {
    $.getJSON("//viacep.com.br/ws/" + $('#cep').val() + "/json/", function (dados) {
        $('#estado').val(dados.uf);
        $('#nome-da-cidade').val(dados.localidade);
        $('#bairro').val(dados.bairro);
        $('#nome-da-rua').val(dados.logradouro);
        $('#comlemento').val(dados.complemento);
    })
})