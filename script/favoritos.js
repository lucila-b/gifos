// Variables
let limitMin = 0
let limitMax = 12
const moreFavoritos = document.getElementById("more-favoritos-button")
// Carga funcion para mostrar Favoritos
if (document.addEventListener){
window.addEventListener('load', favoritosView(),false);
} else {
window.attachEvent('onload', favoritosView());
}

// GUARDAR EN FAVORITOS
const iconFav = document.querySelector('.icon-fav')
function addFavGifos(obj) {
  var newFav = {
      url: obj.getAttribute("data-obj-url"),
      user: obj.getAttribute("data-obj-user"),
      title: obj.getAttribute("data-obj-title"),
      id: obj.getAttribute("data-obj-id"),
      fav: true
    }
    if(localStorage.getItem('localFavList') == null){
      localStorage.setItem('localFavList', '[]');
  } 
      //get old data and slap it to the new data
      let old_data = JSON.parse(localStorage.getItem('localFavList'))
      old_data.push(newFav);
      // save the old + new data to local storage
      localStorage.setItem('localFavList', JSON.stringify(old_data))
      alert('Agregaste este gif a Favoritos') 
      favoritosView()
 } 

// CARGAR FAVORITOS EN LA PAGINA
function favoritosView () {
  let noContent = document.getElementById('no-content')
  const showList = document.getElementById('fav-results')
  resultsFirst = new Array

  // Busco en localstorage
  if (localStorage.getItem('localFavList')) {
    // Desaparece div "sin contenido"
      noContent.classList.add('is-hidden') 
      //existe ese nombre en localStorage
      let results = JSON.parse(localStorage.getItem('localFavList'))

        // Compruebo si hay mas de 12 gifs
        if (results.length > 12) {
            // Muestra boton VER MAS
            moreFavoritos.style.display = "block"
            resultsFirst = results.slice(0, 12)
            //console.log(resultsFirst)

            // Muestro 12 resultados
            let resultsS = ''
            resultsFirst.forEach(function(obj) {
            //console.log(obj.images.downsized)
            const url = obj.url
            const title = obj.title
            const user = obj.user
            const id = obj.id
            resultsS += `
            <div class="grid__image">
                <img id="image" src="${url}" alt="${title}">
                <div class="overlay">
                    <div class="icons__slide">
                        <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon-fav-active.svg" onclick="removeFavGifos(this)" alt="Favoritos">
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
            // Dibujamos el listado con las imagenes
            showList.innerHTML = resultsS
        } else {
        // Muestro resultados menores a 12
        let resultsS = ''
        results.forEach(function(obj) {
        //console.log(obj.images.downsized)
        const url = obj.url
        const title = obj.title
        const user = obj.user
        const id = obj.id
        resultsS += `
        <div class="grid__image">
            <img id="image" src="${url}" alt="${title}">
            <div class="overlay">
                <div class="icons__slide">
                    <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon-fav-active.svg" onclick="removeFavGifos(this)" alt="Favoritos">
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
        // Dibujamos el listado con las imagenes
        showList.innerHTML = resultsS
        }   
    } else {
    noContent.classList.remove('is-hidden') 
    }
}
favoritosView()

// BORRAR DE FAVORITOS
function removeFavGifos(obj) {
  const id = obj.id
  let data = JSON.parse(localStorage.getItem('localFavList'))
  data.forEach((item, index) => item.id === data.id ? data.splice(index, 1): null)
  localStorage.setItem('localFavList', JSON.stringify(data))
  document.getElementById(obj.id).parentElement.parentElement.parentElement.remove()
}
 
// Boton VER MAS gifs
moreFavoritos.addEventListener('click', () => {
    limitMin = limitMin + 12;
    limitMax = limitMax + 12;
    viewMoreFavoritos()
}) 
//Desplegar con el botón ver más
function viewMoreFavoritos() {
    let dataFavoritos = JSON.parse(localStorage.getItem('localFavList'))
    let favoritosContent = document.getElementById('fav-results')
    
    let resultsHTML = ' '    
    if (dataFavoritos.length > limitMin && dataFavoritos.length <= limitMax){
        moreFavoritos.style.display = "none";
        dataFavoritos.forEach(function(obj) {
            //console.log(obj.images.downsized)
            const url = obj.url
            const title = obj.title
            const user = obj.user
            const id = obj.id
            const fav = obj.fav
            resultsHTML += `
            <div class="grid__image">
                <img id="image" src="${url}" alt="${title}">
                <div class="overlay">
                    <div class="icons__slide">
                        <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon-fav-active.svg" onclick="removeFavGifos(this)" alt="Favoritos">
                        <img class="icon-download" data-obj-id="${id}" data-obj-url="${url}" data-obj-user="${user}" data-obj-title="${title}" onclick="downloadGifos(this)" src="images/icon-download.svg" alt="Download">
                        <img class="icon-max" data-obj-id="${id}" data-obj-url="${url}" data-obj-user="${user}" data-obj-title="${title}" onclick="maxGifos(this)" src="images/icon-max.svg">
                    </div>
                    <div class="title__slide">
                        <h4 class="left">${user}</h4>
                        <h3 class="left">${title}</h3>
                    </div>
                </div>
            </div>
            `
            favoritosContent.innerHTML = resultsHTML 
        })
    } else if (dataFavoritos.length > limitMin && dataFavoritos.length > limitMax) {
        moreFavoritos.style.display = "block";
        let arrayCortado = dataFavoritos.slice(0,limitMax)
        arrayCortado.forEach(function(obj) {
            const url = obj.url
            const title = obj.title
            const user = obj.user
            const id = obj.id
            const fav = obj.fav
            resultsHTML += `
            <div class="grid__image">
                <img id="image" src="${url}" alt="${title}">
                <div class="overlay">
                    <div class="icons__slide">
                        <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon-fav-active.svg" onclick="removeFavGifos(this)" alt="Favoritos">
                        <img class="icon-download" data-obj-id="${id}" data-obj-url="${url}" data-obj-user="${user}" data-obj-title="${title}" onclick="downloadGifos(this)" src="images/icon-download.svg" alt="Download">
                        <img class="icon-max" data-obj-id="${id}" data-obj-url="${url}" data-obj-user="${user}" data-obj-title="${title}" onclick="maxGifos(this)" src="images/icon-max.svg">
                    </div>
                    <div class="title__slide">
                        <h4 class="left">${user}</h4>
                        <h3 class="left">${title}</h3>
                    </div>
                </div>
            </div>
            `
            favoritosContent.innerHTML = resultsHTML 
        })    
    }
}

