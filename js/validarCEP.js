function validarCEP(cep) {
    return /^\d{5}-\d{3}$/.test(cep);
}

 
export { validarCEP };
