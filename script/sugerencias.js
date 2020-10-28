// --- Muestro sugerencia de busqueda en desplegable --- //
async function completeWords(q, limit) {
    const apikey = 'qOVNLFSWSTlLYGjx3wFQHJPa7miGLsfc'
    const api = 'https://api.giphy.com/v1'
    const url = `${api}/gifs/search/tags?api_key=${apikey}&q=${q}&limit=${limit}`
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)
    vistaCompleteWords(data)
    //return data    
}

// Listar resultados
async function vistaCompleteWords(data) {
    let results = await data

    let resultsW = ''      
    results.data.forEach(function(obj) {
        
        const name = obj.name
        resultsW += `
        <li id='${name}' class="suggested-word"><img class="icon-search" src="./images/icon-search-grey.svg">${name}</li>`
    
    })    
// Dibujamos los li en el ul
resultCompleta.innerHTML = resultsW
// Adjudico valor a cada palabra de busqueda
const suggestedWord = document.querySelectorAll(".suggested-word")
suggestedWord.forEach(li => li.addEventListener("click", function(e) {
    const q = li.textContent
    // Boton VER MAS
    moreResults.style.display = "block"
    searchInput.value = q
    //console.log(q)
    search(q, limit = 12)
})
)}