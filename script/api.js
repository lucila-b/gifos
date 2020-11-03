// variables
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const searchFormNav = document.getElementById('search-form-nav')
const searchInputNav = document.getElementById('search-input-nav')
const resultSearch = document.getElementById('search-results')
const resultWords = document.getElementById('regular')
const resultCompleta = document.getElementById('autocompletar')
const searchTitle = document.getElementById('id-search')
const searchSection = document.getElementById('search-section')
const buttonSearch = document.getElementById("button--search")
const buttonSearchNav = document.getElementById("button--search-nav")
const buttonClose = document.getElementById("button--search-close")
const moreResults = document.getElementById("more-results-button")
const lastResults = document.getElementById("last-results-button")


// Boton crear GIFO
document.getElementById('create-gifo').addEventListener('click', () => {
    window.open('./crear-gifo.html','_self')
   }) 

// Link a HOME
document.getElementById('id-logo').addEventListener('click', () => {
    window.open('./index.html','_self')
   })

// --- Busqueda GIPHY --- //
async function search(q, limit) {
    const apikey = 'qOVNLFSWSTlLYGjx3wFQHJPa7miGLsfc'
    const api = 'https://api.giphy.com/v1'
    const url = `${api}/gifs/search?api_key=${apikey}&q=${q}&limit=${limit}`
    const response = await fetch(url)
    const data = await response.json()
    vistaSearch(data)
    closeInput()
    // Titulo de la busqueda
    searchTitle.textContent = q    
}
 
// --- Vista Busqueda GIPHY --- //
async function vistaSearch(data) {
    let results = await data
    let resultsS = ''
    results.data.forEach(function(obj) {
        //console.log(obj.images.downsized)
        const url = obj.images.downsized.url
        const title = obj.title
        const user = obj.username
        const width = obj.images.downsized.width
        const id = obj.id
        resultsS += `
        <div class="grid__image">
            <img id="image" src="${url}" width="${width}" alt="${title}">
            <div class="overlay">
                <div class="icons__slide">
                <img class="icon-fav" data-obj-id="${id}" data-obj-url="${url}" data-obj-user="${user}" data-obj-title="${title}" onclick="addFavGifos(this)" src="images/icon-fav-hover.svg" alt="Favoritos">
                <img class="icon-download" data-obj-id="${id}" data-obj-url="${url}" data-obj-user="${user}" data-obj-title="${title}" onclick="downloadGifos(this)" src="images/icon-download.svg" alt="Download">
                <img class="icon-max" data-obj-id="${id}" data-obj-url="${url}" data-obj-user="${user}" data-obj-title="${title}" onclick="maxGifos(this)" src="images/icon-max.svg">
                </div>
                <div class="title__slide">
                    <h4 class="left">${user}</h4>
                    <h3 class="left">${title}</h3>
                </div>
            </div>
        </div>`
                                 
})
// Aparece toda la seccion
searchSection.classList.remove("is-hidden")
// Dibujamos el listado con las imagenes
resultSearch.innerHTML = resultsS
}

// Boton VER MAS 24 GIFS DE BUSQUEDA
moreResults.addEventListener('click', function(e) { 
    e.preventDefault()
    closeInput()
    const q = searchTitle.innerText
    search(q, limit = 36)
    // Desplegar con el botón ver más
    lastResults.style.display = "block"
    moreResults.style.display = "none" 
})

// Boton VER MAS 36 GIFS DE BUSQUEDA
lastResults.addEventListener('click', function(e) { 
    e.preventDefault()
    closeInput()
    const q = searchTitle.innerText
    search(q, limit = 48)
    // Desplegar con el botón ver más
    lastResults.style.display = "none"
    moreResults.style.display = "none"
})



