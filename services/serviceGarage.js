const baseUrl2 = "http://localhost:8902/garagem-api/cadastro-garagem/";

function objectRequest(typeRequest, data) {
  return {
    method: typeRequest,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
}

const dataCreate = [{
  id: "7de2c407-bde5-421b-a005-26edb1e45075",
  bairro: "Tupi A",
  cep: "string",
  cidade: "string",
  complementoLocal: "string",
  descricaoLocal: "string",
  estado: "string",
  numero: "string",
  rua: "string",
  tipoLogradouroString: "string",
  tituloAnuncio: "string"
}
]

async function getGarage(url) {
  const search = await fetch(url);
  const result = await search.json();

  return result;
}

async function getOneGarage(url, id) {
  const search = await fetch(`${url}${id}`);
  const result = await search.json();

  return result;
}

async function updateGarage(url, id, object) {
  const search = await fetch(`${url}${id}`, object);
  const result = await search.json();

  return result;
}

async function postGarage(url, id, object) {
  const search = await fetch(`${url}`, object);
  const result = await search.json();

  return result;
}

async function deleteGarage(url, id, object) {
  const search = await fetch(`${url}${id}`, object);
  const result = await search.json();

  return result;
}

const obter = async () => {
  const buscar = await getGarage(baseUrl2)

  const result = await buscar;

  return result
};

const dadosObtidos = obter();
console.log(dadosObtidos)

const templatecard = document.querySelector("#cardtemplate");

templatecard.innerHTML = data.map(item => {
  return `
    <div class="card mb-4">

    <h4 class="card-header text-center">${item.tituloAnuncio}</h4>

    <div class="card-body text-dark">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
          aria-labelledby="pills-home-tab">
          <h5 class="card-title">Tipo de Garagem</h5>
          <p class="card-text mb-3">Estacionamento Comercial / Garagem Residencial</p>

          <h5 class="card-title">Descrição</h5>
          <p class="card-text">${item.descricaoLocal}</p>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
          aria-labelledby="pills-profile-tab">
          <div class="mb-3">
            <div class="row justify-content-start">
              <div class="col-4">
                <h5 class="card-title">Cidade</h5>
                <p class="card-text">${item.cidade}</p>
              </div>
              <div class="col-3">
                <h5 class="card-title">Estado</h5>
                <p class="card-text">${item.estado}</p>
              </div>

              <div class="col-3">
                <h5 class="card-title">Bairro</h5>
                <p class="card-text">${item.bairro}</p>
              </div>

            </div>
          </div>

          <div class="mb-3">
            <div class="row justify-content-start">
              <div class="col-4">
                <h5 class="card-title">Rua</h5>
                <p class="card-text">${item.rua}</p>
              </div>

              <div class="col-3">
                <h5 class="card-title">Número</h5>
                <p class="card-text">${item.numero}</p>
              </div>

              <div class="col-3">
                <h5 class="card-title">CEP</h5>
                <p class="card-text">${item.cep}</p>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="row justify-content-start">
              <div class="col-4">
                <h5 class="card-title">Complemento</h5>
                <p class="card-text">${item.complementoLocal}</p>
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

  `
}).join('');
