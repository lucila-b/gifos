///////////// EVENTOS BUSQUEDA ///////////////////

searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    // Boton VER MAS
    moreResults.style.display = "block" 
    lastResults.style.display = "none"
    const q = searchInput.value
    search(q, limit = 24) 
    
})

buttonSearch.addEventListener('click', function(e) {
    e.preventDefault()
    closeInput()
    // Boton VER MAS
    moreResults.style.display = "block"
    lastResults.style.display = "none"
    const q = searchInput.value
    search(q, limit = 24)    
})

searchForm.addEventListener('keyup', function(e) {
        const q = searchInput.value
        openInput()
        completeWords(q, limit = 6) 
})

function openInput() {
    // Aplicamos estilos a input y aparece listado
    let input = document.getElementById('search-input')
    input.classList.remove('border-b')
    document.getElementById("button--search").src="./images/close.svg"
    document.getElementById("button--search").classList.remove('search--submit')
    document.getElementById("button--search").classList.add('search--close');
    resultCompleta.classList.remove('is-hidden')
}

function closeInput() {
    // Aplicamos estilos a input y desaparece listado
    let input = document.getElementById('search-input')
    input.classList.add('border-b')
    document.getElementById("button--search").src="./images/icon-search.svg"
    document.getElementById("button--search").classList.add('search--submit')
    document.getElementById("button--search").classList.remove('search--close');
    resultCompleta.classList.add('is-hidden')
}
/////////////  FIN EVENTOS BUSQUEDA  ///////////////////

