const templateCard = (item) => {
  return `
  <div class="col-lg-6 mx-auto">
    <div class="card text-white bg-dark mb-4" style="max-width: 56rem;">
        <div class="card-header bg-transparent border-secondary text-center">${item?.tituloAnuncio}</div>
        <div class="card-body">
            <h5 class="card-title">${item?.cidade} - ${item?.estado}</h5>
            <p class="card-text">Rua: ${item?.rua} - Bairro: ${item?.bairro} - Nº: ${item?.numero} - CEP: ${item?.cep} </p>
        </div>
        <div class="card-footer bg-transparent border-secondary fw-bolder">Tipo da Cobrança: ${item?.tipoPagamento} / Preço: ${item?.preco}</div>
    </div>
  </div>
`
}

export { templateCard };