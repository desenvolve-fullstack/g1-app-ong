function validarCEP(cep) {
    return /^\d{5}-\d{3}$/.test(cep);
}

// Exporta a função para ser utilizada em outros arquivos
export { validarCEP };
