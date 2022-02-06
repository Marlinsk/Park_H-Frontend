const perfilAnunciante = {
  nome: "",
  cpfcnpj: "",
  email: "",
  contatoCelular: "",
  telefoneFixo: ""
}

const dadosBancarios = {
  nomeBanco: "",
  codigonumericoBanco: "",
  agencia: "",
  contaCorrente: "",
  chavePix: ""
}

const dadosAnuncio = {
  titulo: "",
  tipoGaragem: "",
  tamanhoLocal: "",
  tipoVeiculo: "",
  capacidade: "",
  horarioFuncionamento: "",
  diasFuncionamento: [],
  descricao: "",
  temPortaria: "",
  recursosVigilancia: []
}

const endereco = {
  cep: "",
  estado: "",
  cidade: "",
  bairro: "",
  rua: "",
  numero: "",
  complemento: ""
}

const dadosCobranca = {
  tipoCobranca: "",
  preco: "",
  iptu: "",
  canalPagamento: []
}

function getData() {
  
  return new Promise((resolve) => {
    
    // Perfil do Anunciante
    perfilAnunciante.nome = document.querySelector("#nome-completo")?.value;
    perfilAnunciante.cpfcnpj = document.querySelector("#CPF-CNPJ")?.value;
    perfilAnunciante.email = document.querySelector("#email")?.value;
    perfilAnunciante.contatoCelular = document.querySelector("#telefone-celular")?.value;
    perfilAnunciante.telefoneFixo = document.querySelector("#telefone-fixo")?.value;

    // Dados Bancários
    dadosBancarios.nomeBanco = document.querySelector("#nome-do-banco")?.value;
    dadosBancarios.codigonumericoBanco = document.querySelector("#numero-do-banco")?.value;
    dadosBancarios.agencia = document.querySelector("#agencia")?.value;
    dadosBancarios.contaCorrente = document.querySelector("#conta-corrente")?.value;
    dadosBancarios.chavePix = document.querySelector("#chave-pix")?.value;

    // Dados anuncio
    dadosAnuncio.diasFuncionamento = document.querySelectorAll('.form-check-input.week');
    dadosAnuncio.recursosVigilancia = document.querySelectorAll('.form-check-input.vigilancia');
    dadosAnuncio.horarioFuncionamento = document.querySelector('input[name="HorarioFuncionamento"]:checked')?.value;
    dadosAnuncio.temPortaria = document.querySelector('input[name="flexRadioPortaria"]:checked')?.value;
    dadosAnuncio.tipoVeiculo = document.querySelector('#tipo-de-veiculo')?.value;
    
    dadosAnuncio.titulo = document.querySelector("#titulo-anuncio")?.value;

    document.getElementsByName('TipoGaragem').forEach(item => {
      if (item.checked) {
        dadosAnuncio.tipoGaragem = item?.value;
      }
    });
    dadosAnuncio.descricao = document.getElementById("descricao")?.value;
    
    // Endereço
    endereco.cep = document.querySelector("#cep")?.value;
    endereco.estado = document.querySelector("#estado")?.value;
    endereco.cidade = document.querySelector("#nome-da-cidade")?.value;
    endereco.bairro = document.querySelector("#bairro")?.value;
    endereco.rua = document.querySelector("#nome-da-rua")?.value;
    endereco.numero = document.querySelector("#numero-residencia")?.value;
    endereco.complemento = document.querySelector("#complemento")?.value;
    
    // Dados de Cobrança
    dadosCobranca.preco = document.querySelector("#preco")?.value;
    dadosCobranca.tipoCobranca = document.querySelector("#tipo-de-cobranca")?.value;
    dadosCobranca.canalPagamento = document.querySelectorAll(".form-check-input.pagamento");
    dadosCobranca.iptu = document.querySelector('input[name="inlineRadioOptionsIPTU"]:checked')?.value;
    
    const data = {

      tituloAnuncio: dadosAnuncio.titulo,
      tipoLogradouroString: dadosAnuncio.tipoGarage,
      descricaoLocal: dadosAnuncio.description,
      cep: endereco.cep,
      estado: endereco.estado,
      cidade: endereco.cidade,
      bairro: endereco.bairro,
      rua: endereco.rua,
      numero: endereco.numero, 
      complementoLocal: endereco.complemento,
      tipoPagamento: dadosCobranca.tipoCobranca,
      preco: parseFloat(dadosCobranca.preco),

      diasDaSemana: Array.from(dadosAnuncio.diasFuncionamento).filter(a => a.checked).map(b => b?.value),
      recursosVigilancia: Array.from(dadosAnuncio.recursosVigilancia).filter(a => a.checked).map(b => b?.value),
      canaisPagamento: Array.from(dadosCobranca.canalPagamento).filter(a => a.checked).map(b => b?.value),
      horarioFuncionamento: dadosAnuncio.horarioFuncionamento,
      portaria: dadosAnuncio.temPortaria,
      tipoVeiculo: dadosAnuncio.tipoVeiculo,
    }
    
    resolve(data)
  });
}

export { getData }