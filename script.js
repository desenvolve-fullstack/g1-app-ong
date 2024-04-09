function CadastrarProduto() {
    var produtoInput = document.getElementById("produtoInput").value;
    var unidadeInput = document.getElementById("unidadeInput").value;

    if (produtoInput.trim() !== "" && unidadeInput.trim() !== "") {
        var selectAlimento = document.getElementById("alimento");
        var option = document.createElement("option");
        option.text = produtoInput;
        option.value = produtoInput;
        selectAlimento.add(option);

        var selectUnidade = document.getElementById("un-de-medida");
        var optionUnidade = document.createElement("option");
        optionUnidade.text = unidadeInput;
        optionUnidade.value = unidadeInput;
        selectUnidade.add(optionUnidade);
        LimparFormulario()
    }
}
function LimparFormulario() {
document.getElementById("produtoInput").value = "";
document.getElementById("unidadeInput").value = "";
}

