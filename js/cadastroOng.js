
// Arquivo: placeholder.js
document.addEventListener('DOMContentLoaded', () => {
    
    const inputs = document.querySelectorAll('.hide-placeholder');

   
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
             
            if (input.value === '') {
                input.classList.add('hide-placeholder');
                if (iconLabel) {
                    iconLabel.style.color = getComputedStyle(input).getPropertyValue('--cor-placeholder');
                }
            }
        };

        
        input.addEventListener('focus', hidePlaceholderAndIcon);

       
        input.addEventListener('blur', showPlaceholderAndIcon);

       
        if (input.value !== '') {
            hidePlaceholderAndIcon();   
        } else {
            showPlaceholderAndIcon();  
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

      
        if (!validarCNPJ(cnpjInput.value)) {
            alert('CNPJ inválido. Digite um CNPJ válido.');
            event.preventDefault(); // Impede o envio do formulário
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
