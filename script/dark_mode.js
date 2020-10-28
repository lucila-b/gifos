let darkModeToggleButton = document.querySelector(".darkModeButton")
let textChange = document.getElementById("darkMode")

darkModeToggleButton.onclick = e => {
  e.preventDefault()
  if (textChange.textContent == `Modo Nocturno`) {
    document.getElementById('styles').href = 'styles/dark_mode.css'
    document.getElementById('media').href = 'styles/media_dark_mode.css'
    textChange.textContent = `Modo Diurno`
    document.getElementById("button--search").src="./images/icon-search-mod-noc.svg"
    document.getElementById("button--search-nav").src="./images/icon-search-mod-noc.svg"
    
    
  } else {
    document.getElementById('styles').href = 'styles/styles.css'
    document.getElementById('media').href = 'styles/media.css'
    textChange.textContent = `Modo Nocturno`
    document.getElementById("button--search").src="./images/icon-search.svg";
    document.getElementById("button--search-nav").src="./images/icon-search.svg";
  }
}