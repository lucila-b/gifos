// Boton crear GIFO
document.getElementById('create-gifo').addEventListener('click', () => {
    window.open('./crear-gifo.html','_self')
   }) 

// Link a HOME
document.getElementById('id-logo').addEventListener('click', () => {
    window.open('./index.html','_self')
   })


// CREAR GIFOS

// variables
const video = document.getElementById('video')
let init = document.getElementById('btn-camera')
let start = document.getElementById('btn-start');
let stop = document.getElementById('btn-stop');
let uploadGif = document.getElementById('btn-upload')
const showGif = document.getElementById('showGif');
const apikey = 'qOVNLFSWSTlLYGjx3wFQHJPa7miGLsfc'
const messageTitle = document.getElementById('message_title')
const messageText = document.getElementById('message_text')
const messagePurple = document.getElementById('message_p')
const btnStep1 = document.getElementById('btn1')
const btnStep2 = document.getElementById('btn2')
const btnStep3 = document.getElementById('btn3')
const uploading = document.getElementById('uploading')


init.setAttribute('style', 'display: block')

async function initiateWebcam() {
    const stream = await navigator.mediaDevices.getUserMedia({
        // settings video
        audio: false,
        video: {
            width: { min: 640 },
            height: { max: 480 }
        }
    })
    video.srcObject = stream
    await video.play()


    async function startRecording() {
        const stream = video.srcObject

        gifRecorder = new RecordRTCPromisesHandler(stream, {
            disableLogs: true,
            type: "gif",
            frameRate: 1,
            quality: 10,
            width: 480,
            height: 320,
        })

        await gifRecorder.startRecording()
    }
    start.addEventListener('click', () => {
        startRecording()
        messageTitle.classList.add('is-hidden')
        messageText.classList.add('is-hidden')
        btnStep1.classList.remove('active')
        btnStep2.classList.add('active')
        start.setAttribute('style', 'display: none')
        stop.setAttribute('style', 'display: block')
    })

    async function stopRecording() {
        await gifRecorder.stopRecording()
        const blob = await gifRecorder.getBlob()
        // Se muestra el gif
        video.classList.add('is-hidden')
        showGif.classList.remove('is-hidden')
        // Cambian botones
        stop.setAttribute('style', 'display: none')
        uploadGif.setAttribute('style', 'display: block')
        // Repetir captura


        // convertir blob en url
        var blobSave = URL.createObjectURL(blob)
        showGif.src = blobSave

        // metodo para bajar los gifs
        invokeSaveAsDialog(blob)

        // Subir GIF creado
        async function uploadCreatedGif() {
            const formData = new FormData()
            formData.append("file", blob, "myGif.gif")
            const params = {
                method: "POST",
                body: formData,
                json: true
            }
            const data = await fetchURL(`https://upload.giphy.com/v1/gifs?api_key=${apikey}`, params)

            
            // mensaje de gif subido
            messagePurple.innerHTML = 'Tu GIFO ha subido con exito'
            document.getElementById("icon-load").src="./images/check.svg"
            uploadGif.setAttribute('style', 'display: none')
            init.setAttribute('style', 'display: block')
            return await data
        }
        
        uploadGif.addEventListener('click', () =>{
            uploadCreatedGif()
            
            btnStep2.classList.remove('active')
            btnStep3.classList.add('active')
            // se visualiza mensaje
            showGif.classList.add('is-hidden')
            uploading.classList.remove('is-hidden')
            uploading.setAttribute('style', 'display: flex')
        })

    }
    // detener la grabacion
    stop.addEventListener('click', () =>{
        stopRecording()
    })

    async function fetchURL(url, params = null) {
        try {
            const fetchData = await fetch(url, params)
            const response = await fetchData.json()

            // guardarlo en localstorage
            addMyGifos(response)
            return response
          
            
        } catch (error) {
            if (error.name !== "AbortError") {
                console.log("Error al obtener resultados")
            }
            return error
        }
    }
   
}
  
// Boton comenzar llama a la funcion
init.addEventListener('click', () => {
        initiateWebcam()
        messageTitle.innerHTML = '¿Nos das acceso a tu cámara?'
        messageText.innerHTML = `El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.`
        btnStep1.classList.add('active')
        btnStep3.classList.remove('active')
        messagePurple.innerHTML = 'Estamos subiendo tu GIFO'
        document.getElementById("icon-load").src="./images/spinner-solid.svg"
        uploading.classList.add('is-hidden')
        uploading.setAttribute('style', 'display: none')
        init.setAttribute('style', 'display: none')
        start.setAttribute('style', 'display: block')
        messageTitle.classList.remove('is-hidden')
        messageText.classList.remove('is-hidden')
})


// Guardar mis gifos en localstorage

function addMyGifos(obj) {
    // var myGifos = new Array
    // myGifos.push(obj) 
    let newData = obj

    if(localStorage.getItem('localMyGifos') == null){
        localStorage.setItem('localMyGifos', '[]');
    } 
        //get old data and slap it to the new data
        let old_data = JSON.parse(localStorage.getItem('localMyGifos'))
        old_data.push(newData);
        // save the old + new data to local storage
        localStorage.setItem('localMyGifos', JSON.stringify(old_data))
        console.log('gifo guardado en localstorage')
    }     

