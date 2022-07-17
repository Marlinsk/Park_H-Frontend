const templateCard = (item) => {
  return `
    <div class="col-lg-8 mx-auto my-4">
        <div class="card">
          <div class="card-body">
            <a href="../ad-page/AdPage.html?id=${item?.id ?? 1212}" class="h5 mb-1" style="display: flex; align-items: center; text-decoration: none;">
              <img src="../../node_modules/bootstrap-icons/icons/house-fill.svg" alt="house-fill" width="26px"
                height="26px" style="padding-right: 7px;">
              ${item?.tituloAnuncio}
            </a>
            <p class="card-text"><small class="text-muted">${item?.tipoLogradouroString}</small></p>
            <p class="card-subtitle">${item?.rua}, ${item?.numero} - ${item?.bairro}, ${item?.cidade} - ${item?.estado}, ${item?.cep}</p>
          </div>
            <div class="card-footer bg-transparent d-flex justify-content-center">
              <p class="card-text" style="margin: 0px; margin-right: 16px;">
                <d class="h6">Pagamento: </d> ${item?.tipoPagamento}
              </p>
              <p class="card-text" style="margin: 0px; margin-right: 16px;">
                <d class="h6">Preço: </d> ${item?.preco}
              </p>
              <p class="card-text" style="margin: 0px;">
               <d class="h6">IPTU Incluso: </d> ${item?.temIPTU}
              </p>
            </div>
        </div>
      </div>
`;
};

export { templateCard };
