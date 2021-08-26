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

async function postGarage(url, object) {
  const search = await fetch(`${url}`, object);
  const result = await search.json();

  return result;
}

async function deleteGarage(url, id, object) {
  const search = await fetch(`${url}${id}`, object);
  const result = await search.json();

  return result;
}


export { getGarage, postGarage, updateGarage };
