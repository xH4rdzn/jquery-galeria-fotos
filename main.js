$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
  $("#btn-cancela").click(function () {
    $("form").slideUp();
  });
  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoNovaImagem = $("#endereco-img-nova").val();
    const novoItem = $("<li style='display:none'></li>");
    $(`<img src='${enderecoNovaImagem}'/>`).appendTo(novoItem);
    $(`
    <div class="orverlay-imagem-link">
    <a href="${enderecoNovaImagem}" target="_blank" title="Ver Imagem em Tamanho Real">
    Ver Imagem em Tamanho Real
    </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1500);
    $("#endereco-img-nova").val("");
  });
});
