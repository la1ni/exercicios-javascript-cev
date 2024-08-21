function clicar() {
    var resposta = document.getElementById('resposta')
    resposta.innerHTML = ''
    var inicioinput = document.getElementById('inicio')
    var fiminput = document.getElementById('fim')
    var passoinput = document.getElementById('passo')

    var inicio = Number(inicioinput.value)
    var fim = Number(fiminput.value)
    var passo = Number(passoinput.value)

    if (inicioinput.value == '' || fiminput.value == '' || passoinput.value == '') {
        resposta.innerHTML = '<strong>Impossível contar</strong>'
        resposta.style.color = 'red'

    } else {
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            passo = 1
        }

        if (fim >= inicio) {
            for (inicio; inicio <= fim; inicio += passo) {

                if (inicio + passo > fim) {
                    resposta.textContent += inicio + '\u{1F3C1}'
                } else {
                    resposta.textContent += inicio + ' \u{1F449} '
                }
            }
        } else {
            for (inicio; inicio >= fim; inicio -= passo) {

                if (inicio - passo < fim) {
                    resposta.textContent += inicio + '\u{1F3C1}'
                } else {
                    resposta.textContent += inicio + ' \u{1F449} '
                }
            }

        }
    }



}