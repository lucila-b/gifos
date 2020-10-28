// Ejecuta la funcion touch si es celular
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    slideMobile()
   }
   

function slideMobile () {
    const track = document.querySelector('.carousel__track')
    let initialPosition = null
    let moving = false
    let transform = 0

    const gestureStart = (e) => {
        initialPosition = e.pageX
        moving = true

        // tomar el valor de cuanto se traslado carousel__track
        const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform')
        console.log(transformMatrix)
        if(transformMatrix != 'none') {
            transform = parseInt(transformMatrix.split(',')[4].trim())
        } 
    }

    const gestureMove = (e) => {
        if(moving) {
            const currentPosition = e.pageX
            const diff = currentPosition - initialPosition
            track.style.transform = `translateX(${transform + diff}px)`
        }  
    }

    const gestureEnd = (e) => {
        moving = false
    }

    if (window.PointerEvent) {
        window.addEventListener('pointerdown', gestureStart)

        window.addEventListener('pointermove', gestureMove)

        window.addEventListener('pointerup', gestureEnd)  
    } else {
        window.addEventListener('touchdown', gestureStart)

        window.addEventListener('touchmove', gestureMove)

        window.addEventListener('touchup', gestureEnd)

        window.addEventListener('mousedown', gestureStart)

        window.addEventListener('mousemove', gestureMove)

        window.addEventListener('mouseup', gestureEnd)
    }
    }
