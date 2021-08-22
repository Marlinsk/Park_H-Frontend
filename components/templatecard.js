const templateCard = (item) => {
  return `
  <div class="col-md-7 mx-auto">
  

  <div class="card mb-4">
  <h4 class="card-header text-center">${item?.tituloAnuncio}</h4>
  <div class="card-body text-dark">
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
        aria-labelledby="pills-home-tab">
        <h5 class="card-title">Tipo de Garagem</h5>
        <p class="card-text mb-3">Estacionamento Comercial / Garagem Residencial</p>
        <h5 class="card-title">Descrição</h5>
        <p class="card-text">${item?.descricaoLocal}</p>
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel"
        aria-labelledby="pills-profile-tab">
        <div class="mb-3">
          <div class="row justify-content-start">
            <div class="col-4">
              <h5 class="card-title">Cidade</h5>
              <p class="card-text">${item?.cidade}</p>
            </div>
            <div class="col-3">
              <h5 class="card-title">Estado</h5>
              <p class="card-text">${item?.estado}</p>
            </div>
            <div class="col-3">
              <h5 class="card-title">Bairro</h5>
              <p class="card-text">${item?.bairro}</p>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="row justify-content-start">
            <div class="col-4">
              <h5 class="card-title">Rua</h5>
              <p class="card-text">${item?.rua}</p>
            </div>
            <div class="col-3">
              <h5 class="card-title">Número</h5>
              <p class="card-text">${item?.numero}</p>
            </div>
            <div class="col-3">
              <h5 class="card-title">CEP</h5>
              <p class="card-text">${item?.cep}</p>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="row justify-content-start">
            <div class="col-4">
              <h5 class="card-title">Complemento</h5>
              <p class="card-text">${item?.complementoLocal}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel"
        aria-labelledby="pills-contact-tab">
        <div class="row">
          <div class="col">
            <h5 class="card-title">Tipo de Cobrança</h5>
            <p class="card-text">Tipo de Cobrança</p>
          </div>
          <div class="col">
            <h5 class="card-title">Preço do Aluguel</h5>
            <p class="card-text">Preço do Aluguel</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link btn-outline-primary" id="pills-home-tab" data-bs-toggle="pill"
          data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
          aria-selected="false">Sobre</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link btn-outline-primary" id="pills-profile-tab"
          data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
          aria-controls="pills-profile" aria-selected="false">Endereço</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link btn-outline-primary" id="pills-contact-tab"
          data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
          aria-controls="pills-contact" aria-selected="false">Preço</button>
      </li>
      <li class="dropdown">
        <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-three-dots" viewBox="0 0 16 16">
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </button>
        <ul class="dropdown-menu">
          <li>
            <button type="button" class="dropdown-item" data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1">
              Editar Anúncio
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item" data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2">
              Excluir Anúncio
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  </div>
</div>
  `
}

export { templateCard };