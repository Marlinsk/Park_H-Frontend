const baseUrl = "http://localhost:2200/park-h/";

function objectRequest(typeRequest, data) {
  return {
    method: typeRequest,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

export { baseUrl, objectRequest };
