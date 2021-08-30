const baseUrl = "http://localhost:8907/park-api/cadastrar-aluguel/";

function objectRequest(typeRequest, data) {
  return {
    method: typeRequest,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
}

export { baseUrl, objectRequest };