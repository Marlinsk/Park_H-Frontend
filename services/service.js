async function buscarTodosAnuncios(url) {
  const search = await fetch(url);
  const result = await search.json();

  return result;
}

async function pesquisarAnuncio(url, name) {
  const search = await fetch(`${url}${name}`);
  const result = await search.json();

  return result;
}

async function atualizarAnuncio(url, id, object) {
  const search = await fetch(`${url}${id}`, object);
  const result = await search.json();

  return result;
}

async function criarAnuncio(url, object) {
  const search = await fetch(`${url}`, object);
  const result = await search.json();

  return result;
}

async function apagarAnuncio(url, id, object) {
  const search = await fetch(`${url}${id}`, object);
  const result = await search.json();

  return result;
}

export {
  buscarTodosAnuncios,
  pesquisarAnuncio,
  criarAnuncio,
  atualizarAnuncio,
};
