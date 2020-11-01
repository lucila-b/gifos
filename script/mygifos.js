///////////  PAGINA MIS GIFOS //////////////////
// Variables
let limitMinG = 0
let limitMaxG = 12
const moreGifos = document.getElementById("more-gifos-button")    
// Carga funcion para mostrar en Mis Gifos
    if (document.addEventListener){
        window.addEventListener('load', savedGifosView(),false);
      } else {
        window.attachEvent('onload', savedGifosView());
      }

// CARGAR MIS GIFOS EN LA PAGINA    
function savedGifosView () {
    let noContent = document.getElementById('no-content')
    const showList = document.getElementById('gifos-results')
    resultsFirstG = new Array
    
        // Busco en localstorage
        if (localStorage.getItem('localMyGifos')) {
            // Desaparece div "sin contenido"
            noContent.classList.add('is-hidden') 
            //existe ese nombre en localStorage
            let results = JSON.parse(localStorage.getItem('localMyGifos'))
            // Compruebo si hay mas de 12 gifs
            if(results.length > 12) {
                // Muestra boton VER MAS
                moreGifos.style.display = "block"
                resultsFirstG = results.slice(0, 12)
                //console.log(resultsFirstG)

                // Muestro 12 resultados
                let resultsS = ''
                resultsFirstG.forEach(function(obj) {
                const id = obj.data.id
                const url = `https://media.giphy.com/media/${id}/giphy.gif`
                
                resultsS += `
                <div class="grid__image">
                    <img class="mygifos" id="${id}" src="${url}" alt="my new gif">
                    <div class="overlay">
                        <div class="icons__slide">
                            <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon_trash.svg" onclick="removeFavGifos(this)" alt="My Gifos">
                            <img class="icon-download" data-obj-id="${id}" data-obj-url="${url}" onclick="downloadGifos(this)" src="images/icon-download.svg" alt="Download">
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
            const id = obj.data.id
            const url = `https://media.giphy.com/media/${id}/giphy.gif`
            
            resultsS += `
            <div class="grid__image">
                <img class="mygifos" id="${id}" src="${url}" alt="my new gif">
                <div class="overlay">
                    <div class="icons__slide">
                        <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon_trash.svg" onclick="removeMyGifos(this)" alt="My Gifos">
                        <img class="icon-download" data-obj-id="${id}" data-obj-url="${url}" onclick="downloadGifos(this)" src="images/icon-download.svg" alt="Download">
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
    savedGifosView()

// BORRAR DE MY GIFOS
function removeMyGifos(obj) {
    const id = obj.id
    let data = JSON.parse(localStorage.getItem('localMyGifos'))
    data.forEach((item, index) => item.id === data.id ? data.splice(index, 1): null)
    localStorage.setItem('localMyGifos', JSON.stringify(data))
    document.getElementById(obj.id).parentElement.parentElement.parentElement.remove()
  }
// Boton VER MAS gifs
moreGifos.addEventListener('click', () => {
    limitMinG = limitMin + 12;
    limitMaxG = limitMax + 12;
    viewMoreGifos()
}) 
//Desplegar con el botón ver más
function viewMoreGifos() {
    let dataGifos = JSON.parse(localStorage.getItem('localFavList'))
    let gifosContent = document.getElementById('gifos-results')
    
    let resultsHTML = ' '    
    if (dataGifos.length > limitMinG && dataGifos.length <= limitMaxG){
        moreGifos.style.display = "none";
        dataGifos.forEach(function(obj) {
            const id = obj.data.id
            const url = `https://media.giphy.com/media/${id}/giphy.gif`
            
            resultsS += `
            <div class="grid__image">
                <img class="mygifos" id="${id}" src="${url}" alt="my new gif">
                <div class="overlay">
                    <div class="icons__slide">
                        <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon_trash.svg" onclick="removeFavGifos(this)" alt="My Gifos">
                        <img class="icon-download" data-obj-id="${id}" data-obj-url="${url}" onclick="downloadGifos(this)" src="images/icon-download.svg" alt="Download">
                        <img class="icon-max" data-obj-id="${id}" data-obj-url="${url}" onclick="maxGifos(this)" src="images/icon-max.svg">
                    </div>
                </div>
            </div>
            `
            gifosContent.innerHTML = resultsHTML 
        })
    } else if (dataGifos.length > limitMinG && dataGifos.length > limitMaxG) {
        moreGifos.style.display = "block";
        let arrayCortado = dataGifos.slice(0,limitMaxG)
        arrayCortado.forEach(function(obj) {
            const id = obj.data.id
            const url = `https://media.giphy.com/media/${id}/giphy.gif`
            
            resultsS += `
            <div class="grid__image">
                <img class="mygifos" id="${id}" src="${url}" alt="my new gif">
                <div class="overlay">
                    <div class="icons__slide">
                        <img id="${id}-remove" class="icon-fav" data-obj-id="${id}" src="images/icon_trash.svg" onclick="removeFavGifos(this)" alt="My Gifos">
                        <img class="icon-download" data-obj-id="${id}" data-obj-url="${url}" onclick="downloadGifos(this)" src="images/icon-download.svg" alt="Download">
                        <img class="icon-max" data-obj-id="${id}" data-obj-url="${url}" onclick="maxGifos(this)" src="images/icon-max.svg">
                    </div>
                </div>
            </div>
            `
            gifosContent.innerHTML = resultsHTML 
        })    
    }
}
