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

    // Dados anuncio
    adData.operatingdays = document.querySelectorAll('.form-check-input.week');
    adData.surveillanceresources = document.querySelectorAll('.form-check-input.vigilancia');
    adData.openinghours = document.querySelector('.form-check-input.horas').value;
    adData.concierge = document.querySelector('.form-check-input.porteiro').value

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
    payment.paymentchannels = document.querySelectorAll(".form-check-input.pagamento");

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
      preco: parseFloat(payment.price),
      horarioFuncionamento: adData.openinghours,

      diasDaSemana: Array.from(adData.operatingdays).filter(a => a.checked).map(b => b.value),
      vigilancia: Array.from(adData.surveillanceresources).filter(a => a.checked).map(b => b.value),
      payment: Array.from(payment.paymentchannels).filter(a => a.checked).map(b => b.value)
      
    }
    
    resolve(data)
  });
}

export { getData }