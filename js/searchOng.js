// Configurar funcionalidades específicas da barra de pesquisa
function setupSearchBar() {
    const searchButton = document.getElementById('searchButton');

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = document.getElementById('searchInput').value;
           
        });
    } else {
        console.error("Elemento searchButton não encontrado.");
    }
}

//TODO