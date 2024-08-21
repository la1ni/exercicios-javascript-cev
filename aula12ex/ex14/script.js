function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    var agora = new Date()
    var hora = agora.getHours()
    hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora < 12){
        img.src = 'imagemmanha.png'
        document.body.style.background = '#FFE4B5'
    } else if (hora < 18) {
        img.src = 'imagemtarde.png'
        document.body.style.background = '#F4A460'
    } else {
        img.src = 'imagemnoite.png'
        document.body.style.background = '#4169E1'

    }
}


