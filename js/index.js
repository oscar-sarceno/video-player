/* Creamos una variable en este caso constante y el nombre de la variable el signo $ es solamente estilo propio*/
const $video = document.querySelector('#video'); //document = es algo implementado dentro del navegador // querySelector('') es una funcion implementada que recibe un parametro en este caso #video
const $play = document.querySelector('#play'); //document = es algo implementado dentro del navegador // querySelector('') es una funcion implementada que recibe un parametro en este caso #play
const $pause = document.querySelector('#pause'); //document = es algo implementado dentro del navegador // querySelector('') es una funcion implementada que recibe un parametro en este caso #pause


//Le agregamos a la variable $play un evento al momento de hacer click y recibe una funcion en este caso handlePlay
$play.addEventListener('click', handlePlay)
//Le agregamos a la variable $pausa un evento al momento de hacer click y recibe una funcion en este caso handlePause
$pause.addEventListener('click', handlePause)


// Creamos una funcion con la palabra function seguido del nombre que le querramos poner en este caso handleplay seguido de los parentesis
function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false

    console.log('Diste click play') //Con este metodo enviamos un texto a la consola.
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('Diste click pause')
}


const $backward = document.getElementById('backward')
const $forward = document.querySelector('#forward')

$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleFordward)



function handleBackward() {
    //$video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10
    console.log('Atrasar 10 segundo', $video.currentTime)
}

function handleFordward() {
    $video.currentTime = $video.currentTime + 10
    console.log('Adelantar 10 segundos', $video.currentTime)
}

//////////////////////////////////////////////////////////////////

const $progress = document.querySelector('#progress');

$video.addEventListener('loadeddata', handleLoaded) //El tipo de evento loadeddata sirve para cargar la información del video en este caso 
$video.addEventListener('timeupdate', handleTimeUpdate) //El tipo de evento timeupdate sirve para actualizar el tiempo que se esta recorriendo del video

function handleLoaded() {
    $progress.max = $video.duration //Indicamos que el atributo value de progress sea igual al currentTime del video
    console.log('Video cargado', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime // Indicamos que el atributo value de progress sea igual al tiempo actual del video
    // console.log($video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log('Elemento de progress', $progress.value)
}

