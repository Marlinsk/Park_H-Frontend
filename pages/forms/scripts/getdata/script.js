const profile = {
  name: "",
  cpfcnpj: "",
  email: "",
  cellphonenumber: "",
  telephonenumber: ""
}

const bankdata = {
  bankname: "",
  banknumber: "",
  agency: "",
  checkingaccount: "",
  pixkey: ""
}

const adData = {
  title: "",
  garageType: "",
  locationsize: "",
  vehicletype: "",
  capacity: "",
  openinghours: "",
  operatingdays: [],
  description: "",
  concierge: "",
  surveillanceresources: []
}

const address = {
  cep: "",
  state: "",
  city: "",
  neighborhood: "",
  street: "",
  number: "",
  complement: ""
}

const payment = {
  typePayment: "",
  price: "",
  iptu: "",
  paymentchannels: []
}

function getData() {
  
  return new Promise((resolve) => {
    
    // Profile
    profile.name = document.querySelector("#nome-completo").value;
    profile.cpfcnpj = document.querySelector("#CPF-CNPJ").value;
    profile.email = document.querySelector("#email").value;
    profile.cellphonenumber = document.querySelector("#telefone-celular").value;
    profile.telephonenumber = document.querySelector("#telefone-fixo").value;

    // Bank data
    bankdata.bankname = document.querySelector("#nome-do-banco").value;
    bankdata.banknumber = document.querySelector("#numero-do-banco").value;
    bankdata.agency = document.querySelector("#agencia").value;
    bankdata.checkingaccount = document.querySelector("#conta-corrente").value;
    bankdata.pixkey = document.querySelector("#chave-pix").value;

    // Ad Data
    adData.title = document.querySelector("#titulo-anuncio").value;
    document.getElementsByName('TipoGaragem').forEach(item => {
      if (item.checked) {
        adData.garageType = item.value;
      }
    });
    adData.description = document.getElementById("descricao").value;

    // Address
    address.cep = document.querySelector("#cep").value;
    address.state = document.querySelector("#estado").value;
    address.city = document.querySelector("#nome-da-cidade").value;
    address.neighborhood = document.querySelector("#bairro").value;
    address.street = document.querySelector("#nome-da-rua").value;
    address.number = document.querySelector("#numero-residencia").value;
    address.complement = document.querySelector("#complemento").value;

    // Payment
    payment.price = document.querySelector("#preco").value;
    payment.typePayment = document.querySelector("#tipo-de-cobranca").value;

    const data = {
      tituloAnuncio: adData.title,
      tipoLogradouroString: adData.tipoGarage,
      descricaoLocal: adData.description,
      cep: address.cep,
      estado: address.state,
      cidade: address.city,
      bairro: address.neighborhood,
      rua: address.street,
      numero: address.number, 
      complementoLocal: address.complement,
      tipoPagamento: payment.typePayment,
      preco: parseFloat(payment.price)
    }
    
    console.log(data) 
    
    resolve(data)
  });
}

export { getData }