function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoform = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (anoform.value.length == 0 || anoform.value > ano) {
        window.alert('ERRO: Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(anoform.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'malekid.png')
            } else if (idade < 25){
                img.setAttribute('src', 'maleteen.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'maleadult.png')
            } else {
                img.setAttribute('src', 'maleelder.png')
            }
        } else {
            genero = 'feminino'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'femalekid.png')
            } else if (idade < 25){
                img.setAttribute('src', 'femaleteen.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'femaleadult.png')
            } else {
                img.setAttribute('src', 'femaleelder.png')
            }
        }
    }
    res.innerHTML = ` Sexo: ${genero}; Idade: ${idade} anos`
    res.appendChild(img)
    img.style.padding = '25px'


}