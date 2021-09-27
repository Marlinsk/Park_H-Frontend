const templateCard = (item) => {
  return `
  <div class="col-lg-6 mx-auto">
    
    <div class="card mb-4">
      <div class="card-body">
        <div class="container">

          <a href="#" class="text-decoration-none">
            <h5 class="card-title">${item?.tituloAnuncio}</h5>
          </a>

          <div class="row justify-content-start mb-2">
            <div class="col-4">
              <p class="card-text">${item?.tipoPagamento}</p>
            </div>
            <div class="col-5">
              <p class="card-text">${item?.preco}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  
  </div>
`
}

export { templateCard };