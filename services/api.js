const baseUrl = "http://localhost:8902/garagem-api/cadastro-garagem/";

const baseUrl2 = "http://localhost:8901/pagamentos-api/formas-de-pagamento/";

function objectRequest(typeRequest, data) {
  return {
    method: typeRequest,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
}

export { baseUrl, baseUrl2, objectRequest };