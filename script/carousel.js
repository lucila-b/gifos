// --- Imagenes Trending y carga en el carousel --- //
const resultElements = document.getElementById('giphy_images')

async function trendings(path, limit) {
    const apikey = 'qOVNLFSWSTlLYGjx3wFQHJPa7miGLsfc'
    const api = 'https://api.giphy.com/v1'
    const url = `${api}/${path}?api_key=${apikey}&limit=${limit}`
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)
    vistaTrendingsImages(data)  
      
}

// --- Vista Busqueda GIPHY Trendings --- //
async function vistaTrendingsImages(data) {
    let results = await data

    const resultDots = document.getElementById('dots')
    let resultsUl = ''
    let resultsD = ''

    results.data.forEach(function(obj) {
        const url = obj.images.downsized.url
        const title = obj.title
        const user = obj.username
        const width = obj.images.downsized.width
        const id = obj.id

        resultsUl += `
        
        <li class="carousel__slide">
            <img id="${id}" class="carousel__images" src="${url}" width="${width}" alt="${title}">
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
        </li>` 

        resultsD += `
        <button class="carousel__indicator"></button>`  
        return title
    })
    // Dibujamos el listado con las imagenes
    resultElements.innerHTML = resultsUl
    // Aplicamos estilo current__slide a la primera imagen
    const firstSlide = document.querySelector('.carousel__slide:nth-child(1)')
    firstSlide.classList.add('current-slide')
    // Dibujamos puntos por cada imagen
    resultDots.innerHTML = resultsD
    // Aplicamos estilo current-slide al primer punto
    const firstDot = document.querySelector('.carousel__indicator:nth-child(1)')
    firstDot.classList.add('current-slide')
    // Cargamos el codigo del carousel
    myFunction()

    // Eventos
    
 }
trendings(path = 'gifs/trending', limit = 12)