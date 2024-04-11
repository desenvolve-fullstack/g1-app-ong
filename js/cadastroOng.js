document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os inputs com a classe "hide-placeholder"
    const inputs = document.querySelectorAll('.hide-placeholder');

    // Adiciona um ouvinte de eventos para cada input
    inputs.forEach(input => {
        // Adiciona um ouvinte de evento para quando o input é clicado
        input.addEventListener('focus', () => {
            // Remove a classe "hide-placeholder" para exibir o placeholder quando o input é clicado
            input.classList.remove('hide-placeholder');
            // Seleciona o ícone associado ao input
            const icon = input.parentElement.querySelector('.icon');
            // Define a cor do ícone para transparente
            icon.style.color = 'transparent';
        });

        // Adiciona um ouvinte de evento para quando o input perde o foco
        input.addEventListener('blur', () => {
            // Verifica se o input está vazio ao perder o foco
            if (input.value === '') {
                // Adiciona a classe "hide-placeholder" de volta para ocultar o placeholder se o input estiver vazio
                input.classList.add('hide-placeholder');
                // Seleciona o ícone associado ao input
                const icon = input.parentElement.querySelector('.icon');
                // Define a cor do ícone para a cor do placeholder
                icon.style.color = getComputedStyle(input).getPropertyValue('--cor-placeholder');
            }
        });

        // Oculta o placeholder ao carregar a página (adicionando a classe "hide-placeholder")
        input.classList.add('hide-placeholder');
    });
});


//validaçoes 
//CNPJ
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

//Telefone
function validarTelefone(telefone) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
}

// CEP
function validarCEP(cep) {
    return /^\d{5}-\d{3}$/.test(cep);
}

// Email
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//Validação ao Formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const cnpjInput = form.querySelector('#cnpj');
        const telefoneInput = form.querySelector('#telefone');
        const cepInput = form.querySelector('#cep');
        const emailInput = form.querySelector('#email');

        if (!validarCNPJ(cnpjInput.value)) {
            alert('CNPJ inválido. Digite um CNPJ válido.');
            event.preventDefault();
        }

        if (!validarTelefone(telefoneInput.value)) {
            alert('Telefone inválido. Digite um telefone válido.');
            event.preventDefault();
        }

        if (!validarCEP(cepInput.value)) {
            alert('CEP inválido. Digite um CEP válido.');
            event.preventDefault();
        }

        if (!validarEmail(emailInput.value)) {
            alert('Email inválido. Digite um email válido.');
            event.preventDefault();
        }
    });
});
 

