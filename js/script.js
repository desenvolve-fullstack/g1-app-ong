

document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const headerContainer = document.getElementById('header-container');
    const searchBarContainer = document.getElementById('search-container');
    

    const headerUrl = '../pages/header.html';
    const searchBarUrl = '../pages/search.html';

    // Função para carregar um componente HTML de um URL e inserir no contêiner especificado
    function loadComponent(url, container) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Falha ao carregar ${url}: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                if (container) { // Verifica se o contêiner existe antes de modificar o innerHTML
                    container.innerHTML = html;

                    // Executar código específico do componente carregado (se necessário)
                    if (container === headerContainer) {
                        setupHeader(); // Configurar funcionalidades do cabeçalho após carregar
                    }
                } else {
                    console.error(`Elemento container não encontrado para o URL ${url}`);
                }
            })
            .catch(error => {
                console.error(`Erro ao carregar ${url}:`, error);
            });
    }

    // Carregar cabeçalho
    loadComponent(headerUrl, headerContainer);

    // Carregar barra de pesquisa
    loadComponent(searchBarUrl, searchBarContainer);

    // Configurar funcionalidades específicas do cabeçalho
    function setupHeader() {
        const toggler = document.querySelector(".btn");
        const sidebar = document.getElementById('sidebar');
        const closeSidebarBtn = document.getElementById('closeSidebarBtn');

        if (toggler && sidebar && closeSidebarBtn) {
            toggler.addEventListener("click", function() {
                sidebar.classList.toggle("collapsed");
                closeSidebarBtn.style.display = sidebar.classList.contains('collapsed') ? 'none' : 'block';
            });

            if (isMobile) {
                sidebar.classList.add("collapsed");
            }

            closeSidebarBtn.addEventListener('click', function() {
                sidebar.classList.add('collapsed');
                closeSidebarBtn.style.display = 'none';
            });
        } else {
            console.error("Elemento sidebar, toggler ou closeSidebarBtn não encontrado.");
        }
    }
});
