function validarCNPJ(cnpj) {
    const cnpjNumerico = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cnpjNumerico.length !== 14) {
        return false; // Deve ter 14 dígitos
    }

    // Verifica se todos os dígitos são iguais (ex: 11.111.111/1111-11)
    if (/^(\d)\1+$/.test(cnpjNumerico)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    let peso = 5;
    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpjNumerico.charAt(i)) * peso--;
        if (peso < 2) {
            peso = 9;
        }
    }

    let digito = 11 - (soma % 11);
    if (digito > 9) {
        digito = 0;
    }

    // Verifica o primeiro dígito verificador
    if (parseInt(cnpjNumerico.charAt(12)) !== digito) {
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    peso = 6;
    for (let i = 0; i < 13; i++) {
        soma += parseInt(cnpjNumerico.charAt(i)) * peso--;
        if (peso < 2) {
            peso = 9;
        }
    }

    digito = 11 - (soma % 11);
    if (digito > 9) {
        digito = 0;
    }

    // Verifica o segundo dígito verificador
    if (parseInt(cnpjNumerico.charAt(13)) !== digito) {
        return false;
    }

    return true; // CNPJ válido
}

// Exporta a função para ser utilizada em outros arquivos
export { validarCNPJ };
