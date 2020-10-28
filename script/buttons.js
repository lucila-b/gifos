
//Boton Max GIFOS
function maxGifos(obj) {
  const iconMax = document.querySelectorAll('.icon-max')
  const screenMax = document.getElementById('max--gifos')
  const currentGif = document.querySelector('.modal__images')
  const currentTitle = document.querySelector('.black--color')
  const currentUser = document.querySelector('.user--style')
  const buttonClose = document.querySelector('.modal__button-close')
  const buttonFavModal = document.querySelector('.icon__fav')
  const buttonDownloadModal = document.querySelector('.icon__download')

  screenMax.classList.remove('is-hidden')
  screenMax.style.display = "flex"  

  // Completamos datos
  currentGif.src = obj.getAttribute("data-obj-url")
  currentTitle.innerText = obj.getAttribute("data-obj-title") 
  currentUser.innerText = obj.getAttribute("data-obj-user")
  // Completamos datos de los botones
  buttonFavModal.setAttribute('data-obj-url', obj.getAttribute("data-obj-url"))
  buttonFavModal.setAttribute('data-obj-title', obj.getAttribute("data-obj-title"))
  buttonFavModal.setAttribute('data-obj-user', obj.getAttribute("data-obj-user"))
  buttonDownloadModal.setAttribute('data-obj-url', obj.getAttribute("data-obj-url"))
  buttonDownloadModal.setAttribute('data-obj-title', obj.getAttribute("data-obj-title"))
  buttonDownloadModal.setAttribute('data-obj-user', obj.getAttribute("data-obj-user"))
  // Boton cerrar
  buttonClose.addEventListener("click", () => {
      screenMax.classList.add('is-hidden') 
      screenMax.style.display = "none" 
      })
}
