import { baseUrl2 } from "./baseUrl.js";

async function getPay(url) {
    const search = await fetch(url);
    const result = await search.json();

    return result;
}

async function getOnePay(url, id) {
    const search = await fetch(`${url}${id}`);
    const result = await search.json();

    return result;
}

async function updatePay(url, id, object) {
    const search = await fetch(`${url}${id}`, object);
    const result = await search.json();

    return result;
}

async function postPay(url, object) {
    const search = await fetch(`${url}`, object);
    const result = await search.json();

    return result;
}

async function deletePay(url, id, object) {
    const search = await fetch(`${url}${id}`, object);
    const result = await search.json();

    return result;
}


const obter2 = async () => {
    const result = await getPay(baseUrl2);
    return result
};

export { obter2, postPay };
