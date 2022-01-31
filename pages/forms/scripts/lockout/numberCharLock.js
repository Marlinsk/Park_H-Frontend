const inputNumero = document.querySelector("#numero-residencia");
const inputCapacidade = document.querySelector("#capacidade");

inputNumero.addEventListener("keypress", function (e) {
    if (!checkCharNumber(e)) {
        e.preventDefault();
    }
});

capacidade.addEventListener("keypress", function (e) {
    if (!checkNumber(e)) {
        e.preventDefault();
    }
});

function checkNumber(e) {
    var char = String.fromCharCode(e.keyCode);

    console.log(char);
    var pattern = '[A-Z0-9 ]';
    if (char.match(pattern)) {
        return true;
    }
}

function checkCharNumber(e) {
    var char = String.fromCharCode(e.keyCode);

    console.log(char);
    var pattern = '[A-Z0-9 ]';
    if (char.match(pattern)) {
        return true;
    }
}