function clicar() {
    var select = document.getElementById('sel')
    select.innerHTML = ''
    var numinput = document.getElementById('numInput')

    if (numinput.value == '') {
        window.alert('Por favor digite um número')
    } else {
        var num = Number(numinput.value)
        for (var c = 1; c <= 10; c++) {
            var conta = num * c
            
            option = document.createElement('option')
            option.text = `${num} x ${c} = ${conta}`
            option.value = `tab${c}`
            select.appendChild(option)
        }
    }


}