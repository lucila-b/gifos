///////////// EVENTOS BUSQUEDA NAV ///////////////////
searchFormNav.addEventListener('submit', function(e) {
    e.preventDefault()
    // Boton VER MAS
    moreResults.style.display = "block"
    lastResults.style.display = "none"
    const q = searchInputNav.value
    search(q, limit = 24) 
    cleanInputNav() 
})

buttonSearchNav.addEventListener('click', function(e) {
    e.preventDefault()
    // Boton VER MAS
    moreResults.style.display = "block"
    lastResults.style.display = "none"
    const q = searchInputNav.value
    search(q, limit = 24) 
    cleanInputNav()
})

function cleanInputNav() {
    searchInputNav.value = ""
}