let darkModeToggleButton = document.querySelector(".darkModeButton")
let textChange = document.getElementById("darkMode")

darkModeToggleButton.onclick = e => {
  e.preventDefault()
  if (textChange.textContent == `Modo Nocturno`) {
    document.getElementById('styles').href = 'styles/dark_mode.css'
    document.getElementById('media').href = 'styles/media_dark_mode.css'
    textChange.textContent = `Modo Diurno`
    // imagenes New Gifo
    document.getElementById("cinta1").src="./images/element_cinta1-modo-noc.svg"
    document.getElementById("cinta2").src="./images/element_cinta2-modo-noc.svg"
  } else {
    document.getElementById('styles').href = 'styles/styles.css'
    document.getElementById('media').href = 'styles/media.css'
    textChange.textContent = `Modo Nocturno`
    // imagenes New Gifo
    document.getElementById("cinta1").src="./images/element_cinta1.svg"
    document.getElementById("cinta2").src="./images/element_cinta2.svg"
  }
}