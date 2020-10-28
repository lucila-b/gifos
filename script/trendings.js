//--- Obtengo Trendings --- //
async function trendingWords() {
    const apikey = 'qOVNLFSWSTlLYGjx3wFQHJPa7miGLsfc'
    const api = 'https://api.giphy.com/v1'
    const url = `${api}/trending/searches?api_key=${apikey}`
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)
    vistaTrendings(data)
    //return data    
}

//--- Vista Trendings --- //
async function vistaTrendings (data) {
    let results = await data
    let trendingSearch = []
// Elegimos solo 5 resultados y creamos array trendingSearch        
    for(let i = 0; i < 5; i++) {
        //console.log(results);
        trendingSearch.push(results.data[i])
    }       
        let resultsW = ''
        resultsW += `
        <a class="trending-link">${trendingSearch[0]},</a>  
        <a class="trending-link">${trendingSearch[1]},</a><br/>  
        <a class="trending-link">${trendingSearch[2]},</a> 
        <a class="trending-link">${trendingSearch[3]},</a>  
        <a class="trending-link">${trendingSearch[4]}</a> `

// Dibujamos las palabras en el html
resultWords.innerHTML = resultsW
// Adjudico valor a cada palabra
const trendWord = document.querySelectorAll(".trending-link")
trendWord.forEach(a => a.addEventListener("click", function(e) {
    const q = a.innerHTML
    search(q, limit = 24)
    // Boton VER MAS
    moreResults.style.display = "block"
    lastResults.style.display = "none"
})
)}
trendingWords()