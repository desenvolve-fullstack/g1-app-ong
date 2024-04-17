function validarCNPJ(cnpj) {
    const cnpjNumerico = cnpj.replace(/[^\d]+/g, ''); 

    if (cnpjNumerico.length !== 14) {
        return false;  
    }

    if (/^(\d)\1+$/.test(cnpjNumerico)) {
        return false;
    }

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

  
    if (parseInt(cnpjNumerico.charAt(12)) !== digito) {
        return false;
    }


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

   
    if (parseInt(cnpjNumerico.charAt(13)) !== digito) {
        return false;
    }

    return true; 
}


export { validarCNPJ };
