var agora = new Date()
var dianum = agora.getDay()

switch (dianum) {
    case 0: dia = 'domingo'
        break
    case 1: dia = 'segunda'
        break
    case 2: dia = 'terça'
        break
    case 3: dia = 'quarta'
        break
    case 4: dia = 'quinta'
        break
    case 5: dia = 'sexta'
        break
    case 6: dia = 'sábado'
        break
    default: dia = 'inválido'
}

console.log(`Hoje é ${dia}`)