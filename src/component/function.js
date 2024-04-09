export const calcule = (seconde)=>{
    let minutes = Math.floor(seconde / 60)
    let secondesRestantes = seconde % 60

    minutes = parseInt(minutes)
    secondesRestantes = parseFloat(secondesRestantes).toFixed(0)

    minutes = (minutes < 10) ? '0' + minutes : minutes
    secondesRestantes = (secondesRestantes < 10) ? "0" + secondesRestantes : secondesRestantes


    let formatMinuteSeconde = minutes + ':' + secondesRestantes
    return formatMinuteSeconde
}