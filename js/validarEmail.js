function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Exporta a função para ser utilizada em outros arquivos
export { validarEmail };
