export function Sound() {

    const pressFlorest = new Audio("./audios/Floresta.wav")
    const pressRain = new Audio("./audios/Chuva.wav")
    const pressConffeeShop = new Audio("./audios/Cafeteria.wav")
    const pressFireplace = new Audio("./audios/Lareira.wav")

    pressFlorest.loop = true
    pressRain.loop = true
    pressConffeeShop.loop = true
    pressFireplace.loop = true

    return {
        pressFlorest,
        pressRain,
        pressConffeeShop,
        pressFireplace
    }
}