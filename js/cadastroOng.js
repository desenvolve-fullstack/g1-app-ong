
// Arquivo: placeholder.js
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os inputs com a classe "hide-placeholder"
    const inputs = document.querySelectorAll('.hide-placeholder');

    // Adiciona um ouvinte de eventos para cada input
    inputs.forEach(input => {
        const iconLabel = input.parentElement.querySelector('.icon');

        // Função para ocultar o placeholder e o ícone quando o input recebe foco
        const hidePlaceholderAndIcon = () => {
            input.classList.remove('hide-placeholder');
            if (iconLabel) {
                iconLabel.style.color = 'transparent';
            }
        };

        // Função para verificar se o placeholder e o ícone devem ser mostrados ao perder o foco
        const showPlaceholderAndIcon = () => {
            // Verifica se o input está vazio ao perder o foco
            if (input.value === '') {
                input.classList.add('hide-placeholder');
                if (iconLabel) {
                    iconLabel.style.color = getComputedStyle(input).getPropertyValue('--cor-placeholder');
                }
            }
        };

        // Adiciona um ouvinte de evento para quando o input é clicado
        input.addEventListener('focus', hidePlaceholderAndIcon);

        // Adiciona um ouvinte de evento para quando o input perde o foco
        input.addEventListener('blur', showPlaceholderAndIcon);

        // Verifica se o input já possui valor ao carregar a página
        if (input.value !== '') {
            hidePlaceholderAndIcon(); // Chama a função para mostrar o placeholder e ocultar o ícone inicialmente se o campo já estiver preenchido
        } else {
            showPlaceholderAndIcon(); // Chama a função para ocultar o placeholder e mostrar o ícone se o campo estiver vazio inicialmente
        }
    });
});

// Importar as funções de validação
import { validarCNPJ } from './validarCNPJ.js';
import { validarTelefone } from './validarTelefone.js';
import { validarCEP } from './validarCEP.js';
import { validarEmail } from './validarEmail.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const cnpjInput = form.querySelector('#cnpj');
        const telefoneInput = form.querySelector('#telefone');
        const cepInput = form.querySelector('#cep');
        const emailInput = form.querySelector('#email');

        // Validar CNPJ
        if (!validarCNPJ(cnpjInput.value)) {
            alert('CNPJ inválido. Digite um CNPJ válido.');
            event.preventDefault(); // Impede o envio do formulário
        }

        // Validar Telefone
        if (!validarTelefone(telefoneInput.value)) {
            alert('Telefone inválido. Digite um telefone válido.');
            event.preventDefault();
        }

        // Validar CEP
        if (!validarCEP(cepInput.value)) {
            alert('CEP inválido. Digite um CEP válido.');
            event.preventDefault();
        }

        // Validar Email
        if (!validarEmail(emailInput.value)) {
            alert('Email inválido. Digite um email válido.');
            event.preventDefault();
        }
    });
});
