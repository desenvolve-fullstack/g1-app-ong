       function cadastrarProduto() {
            var form = document.getElementById("cadastroForm");
            if (form.checkValidity()) {
                var produtoInput = document.getElementById("produtoInput").value;
                var unidadeInput = document.getElementById("unidadeInput").value;

                // Aqui você pode enviar os dados para onde desejar, como por exemplo através de uma requisição AJAX

                LimparFormulario();
            } else {
                // Se o formulário não for válido, você pode tratar os erros aqui
            }
        }

        function limparFormulario() {
            document.getElementById("produtoInput").value = "";
            document.getElementById("unidadeInput").value = "";
        }
