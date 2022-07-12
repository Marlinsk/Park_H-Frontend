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
  recursosVigilancia: [],
};

const endereco = {
  cep: "",
  estado: "",
  cidade: "",
  bairro: "",
  rua: "",
  numero: "",
  complemento: "",
};

const dadosCobranca = {
  tipoCobranca: "",
  preco: "",
  iptu: "",
  canalPagamento: [],
};

function getData() {
  return new Promise((resolve) => {
    // Dados do Anúncio
    dadosAnuncio.titulo = document.querySelector("#titulo-anuncio")?.value;
    dadosAnuncio.descricao = document.getElementById("descricao")?.value;
    dadosAnuncio.tipoGaragem = document.querySelector(
      'input[name="TipoGaragem"]:checked'
    )?.value;
    dadosAnuncio.tamanhoLocal =
      document.querySelector("#tamanho-do-local")?.value;
    dadosAnuncio.tipoVeiculo =
      document.querySelector("#tipo-de-veiculo")?.value;
    dadosAnuncio.capacidade = document.querySelector("#capacidade")?.value;
    dadosAnuncio.horarioFuncionamento = document.querySelector(
      'input[name="HorarioFuncionamento"]:checked'
    )?.value;
    dadosAnuncio.diasFuncionamento = document.querySelectorAll(
      ".form-check-input.week"
    );
    dadosAnuncio.temPortaria = document.querySelector(
      'input[name="flexRadioPortaria"]:checked'
    )?.value;
    dadosAnuncio.recursosVigilancia = document.querySelectorAll(
      ".form-check-input.vigilancia"
    );

    // Endereço do Local
    endereco.cep = document.querySelector("#cep")?.value;
    endereco.estado = document.querySelector("#estado")?.value;
    endereco.cidade = document.querySelector("#nome-da-cidade")?.value;
    endereco.bairro = document.querySelector("#bairro")?.value;
    endereco.rua = document.querySelector("#nome-da-rua")?.value;
    endereco.numero = document.querySelector("#numero-residencia")?.value;
    endereco.complemento = document.querySelector("#complemento")?.value;

    // Dados de Cobrança
    dadosCobranca.tipoCobranca =
      document.querySelector("#tipo-de-cobranca")?.value;
    dadosCobranca.preco = document.querySelector("#preco")?.value;
    dadosCobranca.iptu = document.querySelector(
      'input[name="inlineRadioOptionsIPTU"]:checked'
    )?.value;
    dadosCobranca.canalPagamento = document.querySelectorAll(
      ".form-check-input.pagamento"
    );

    const data = {
      tituloAnuncio: dadosAnuncio.titulo,
      descricaoLocal: dadosAnuncio.description,
      tipoLogradouroString: dadosAnuncio.tipoGarage,
      tamanhoLocal: dadosAnuncio.tamanhoLocal,
      tipoVeiculo: dadosAnuncio.tipoVeiculo,
      capacidade: dadosAnuncio.capacidade,
      horarioFuncionamento: dadosAnuncio.horarioFuncionamento,
      diasDaSemana: Array.from(dadosAnuncio.diasFuncionamento)
        .filter((a) => a.checked)
        .map((b) => b?.value),
      portaria: dadosAnuncio.temPortaria,
      recursosVigilancia: Array.from(dadosAnuncio.recursosVigilancia)
        .filter((a) => a.checked)
        .map((b) => b?.value),
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
      canaisPagamento: Array.from(dadosCobranca.canalPagamento)
        .filter((a) => a.checked)
        .map((b) => b?.value),
    };

    resolve(data);
  });
}

export { getData };
