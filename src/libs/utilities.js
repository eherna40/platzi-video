
// Conversor de milisegundos a segundos y minutos


// esta funcion la uso para que la base de los segundos sea de 0 a 00
function leftPad(number) {
    const pad = '00'
    return pad.substring(0, pad.length - number.length) + number
}


//Convierte de milisgundos a segundos y minuutos
function formattedTime(sec) {
    const minutes = parseInt(sec / 60, 10)
    const seconds = parseInt(sec % 60, 10)
    return `${minutes} : ${leftPad(seconds.toString())}`
} 

export default formattedTime