///////////// EVENTOS BUSQUEDA ///////////////////

searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    // Boton VER MAS
    moreResults.style.display = "block" 
    lastResults.style.display = "none"
    const q = searchInput.value
    search(q, limit = 12) 
    cleanInput()
    
})

buttonSearch.addEventListener('click', function(e) {
    e.preventDefault()
    closeInput()
    // Boton VER MAS
    moreResults.style.display = "block"
    lastResults.style.display = "none"
    const q = searchInput.value
    search(q, limit = 12) 
    cleanInput()  
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
    buttonSearch.setAttribute('style', 'display: none')
    buttonClose.setAttribute('style', 'display: block')
    resultCompleta.classList.remove('is-hidden')
}

function closeInput() {
    // Aplicamos estilos a input y desaparece listado
    let input = document.getElementById('search-input')
    input.classList.add('border-b')
    buttonSearch.setAttribute('style', 'display: block')
    buttonClose.setAttribute('style', 'display: none')
    resultCompleta.classList.add('is-hidden')
}

function cleanInput() {
    searchInput.value = ""
}

buttonClose.addEventListener('click', function(e){
    e.preventDefault()
    cleanInput()
    closeInput()
})
/////////////  FIN EVENTOS BUSQUEDA  ///////////////////

