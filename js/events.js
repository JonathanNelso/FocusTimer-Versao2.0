import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonConffeeShop,
    buttonFireplace
} from "./elements.js"

export function Events({
    timer,
    sound
}) {

    function togglePlay(myAudio) {
        return myAudio.paused ? myAudio.play() : myAudio.pause()
      }

    buttonPlay.addEventListener('click', function() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        timer.countdown()
    })

    buttonPause.addEventListener('click', function() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        timer.pause()
    })
    
    buttonStop.addEventListener('click', function() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        timer.stop()
    })
    
    buttonMore.addEventListener('click', function() {
        timer.moreFive()
    })
    
    buttonLess.addEventListener('click', function() {
        timer.lessFive()
    })

    // Audio buttons 
    buttonForest.addEventListener('click', function() {
        togglePlay(sound.pressFlorest)
        buttonForest.classList.toggle('selected')
    })

    buttonRain.addEventListener('click', function() {
        togglePlay(sound.pressRain)
        buttonRain.classList.toggle('selected')
    })

    buttonConffeeShop.addEventListener('click', function() {
        togglePlay(sound.pressConffeeShop)
        buttonConffeeShop.classList.toggle('selected')
    })

    buttonFireplace.addEventListener('click', function() {
        togglePlay(sound.pressFireplace)
        buttonFireplace.classList.toggle('selected')
    })
}
