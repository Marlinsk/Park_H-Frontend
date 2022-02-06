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