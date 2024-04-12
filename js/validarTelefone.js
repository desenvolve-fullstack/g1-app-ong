function validarTelefone(telefone) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
}

// Exporta a função para ser utilizada em outros arquivos
export { validarTelefone };
