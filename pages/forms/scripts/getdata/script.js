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

    // Dados do Anúncio
    dadosAnuncio.titulo = document.querySelector("#titulo-anuncio")?.value;
    dadosAnuncio.tipoGaragem = document.querySelector('input[name="TipoGaragem"]:checked')?.value;
    dadosAnuncio.tamanhoLocal = document.querySelector("#tamanho-do-local")?.value;
    dadosAnuncio.tipoVeiculo = document.querySelector('#tipo-de-veiculo')?.value;
    dadosAnuncio.capacidade = document.querySelector("#capacidade")?.value;
    dadosAnuncio.horarioFuncionamento = document.querySelector('input[name="HorarioFuncionamento"]:checked')?.value;
    dadosAnuncio.diasFuncionamento = document.querySelectorAll('.form-check-input.week');
    dadosAnuncio.descricao = document.getElementById("descricao")?.value;
    dadosAnuncio.temPortaria = document.querySelector('input[name="flexRadioPortaria"]:checked')?.value;
    dadosAnuncio.recursosVigilancia = document.querySelectorAll('.form-check-input.vigilancia');
    
    // Endereço do Local
    endereco.cep = document.querySelector("#cep")?.value;
    endereco.estado = document.querySelector("#estado")?.value;
    endereco.cidade = document.querySelector("#nome-da-cidade")?.value;
    endereco.bairro = document.querySelector("#bairro")?.value;
    endereco.rua = document.querySelector("#nome-da-rua")?.value;
    endereco.numero = document.querySelector("#numero-residencia")?.value;
    endereco.complemento = document.querySelector("#complemento")?.value;
    
    // Dados de Cobrança
    dadosCobranca.tipoCobranca = document.querySelector("#tipo-de-cobranca")?.value;
    dadosCobranca.preco = document.querySelector("#preco")?.value;
    dadosCobranca.iptu = document.querySelector('input[name="inlineRadioOptionsIPTU"]:checked')?.value;
    dadosCobranca.canalPagamento = document.querySelectorAll(".form-check-input.pagamento");
    
    const data = {
      nomeResponsavel: perfilAnunciante.nome,
      codigoCadastro: perfilAnunciante.cpfcnpj,
      emailResponsavel: perfilAnunciante.email,
      contatoCelular: perfilAnunciante.contatoCelular,
      telefoneFixo: perfilAnunciante.telefoneFixo,
      nomeBanco: dadosBancarios.nomeBanco,
      codigoBanco: dadosBancarios.codigonumericoBanco,
      numeroAgencia: dadosBancarios.agencia,
      contaCorrente: dadosBancarios.contaCorrente,
      chavePix: dadosBancarios.chavePix,
      tituloAnuncio: dadosAnuncio.titulo,
      tipoLogradouroString: dadosAnuncio.tipoGarage,
      tamanhoLocal: dadosAnuncio.tamanhoLocal,
      tipoVeiculo: dadosAnuncio.tipoVeiculo,
      capacidade: dadosAnuncio.capacidade,
      horarioFuncionamento: dadosAnuncio.horarioFuncionamento,
      diasDaSemana: Array.from(dadosAnuncio.diasFuncionamento).filter(a => a.checked).map(b => b?.value),
      descricaoLocal: dadosAnuncio.description,
      portaria: dadosAnuncio.temPortaria,
      recursosVigilancia: Array.from(dadosAnuncio.recursosVigilancia).filter(a => a.checked).map(b => b?.value),
      cep: endereco.cep,
      estado: endereco.estado,
      cidade: endereco.cidade,
      bairro: endereco.bairro,
      rua: endereco.rua,
      numero: endereco.numero, 
      complementoLocal: endereco.complemento,  
      tipoPagamento: dadosCobranca.tipoCobranca,
      preco: parseFloat(dadosCobranca.preco),
      temIPTU: dadosCobranca.iptu,
      canaisPagamento: Array.from(dadosCobranca.canalPagamento).filter(a => a.checked).map(b => b?.value),
    }
    
    resolve(data)
  });
}

export { getData }