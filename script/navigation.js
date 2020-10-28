/////////////  STICKY NAVIGATION  //////////////////

if (screen.width > 1000) {
    // Variables
    const navSearch = document.getElementById('search--nav')
    const headerNav = document.getElementById('header')

    // scroll
    window.addEventListener('DOMContentLoaded', () => {
        navSearch.classList.remove('shadow')
    })
    window.addEventListener('scroll', () => {
        const scrollPX = window.scrollY
        if(scrollPX > 20) {
            navSearch.style.visibility = 'visible'
            headerNav.classList.add('shadow')
            headerNav.classList.add('sticky')

    } else {
        navSearch.style.visibility = 'hidden'
        headerNav.classList.remove('shadow')
        headerNav.classList.remove('sticky')
    }
})
} else {
    console.log('No se muestra sticky nav')
}

/////////////  STICKY NAVIGATION  ///////////////////


  