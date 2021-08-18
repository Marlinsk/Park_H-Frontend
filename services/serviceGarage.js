const baseUrl = "http://localhost:8902/garagem-api/cadastro-garagem/";

function objectRequest(typeRequest, data) {
  return {
    method: typeRequest,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
}

const dataCreate = {
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
};

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

async function alefmito() {
  const garagens = await getGarage(baseUrl2);

  const garagensGetOne = await postGarage(
    baseUrl2,
    objectRequest("GET", dataCreate)
  );

  const garagensCreate = await postGarage(
    baseUrl2,
    objectRequest("GET", dataCreate)
  );

  const garagensUpdate = await updateGarage(
    baseUrl2,
    dataCreate.id,
    objectRequest("PUT", dataCreate)
  );

  const garagensDelete = await deleteGarage(
    baseUrl2,
    dataCreate.id,
    objectRequest("DELETE", dataCreate)
  );
}

alefmito();
