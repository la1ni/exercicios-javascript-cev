
let numArray = []

function adicionar() {
    let numeroInput = document.getElementById('num')
    if (numeroInput.value.length == 0) {
        window.alert('Digite um número válido')
    } else {
        let numero = Number(numeroInput.value)

        if (numero > 100 || numero < 1) {
            window.alert('O número deve estar entre 1 e 100')
        } else if (numArray.length > 0 && numArray.indexOf(numero) != -1) {
            window.alert('O número não pode ter sido adicionado anteriormente')
        } else {
            let sel = document.getElementById('sel')
            numArray.push(numero)
            option = document.createElement('option')
            option.text = (`Valor ${numero} adicionado`)
            option.value = (numero)
            sel.appendChild(option)
        }
    }
    numeroInput.value = ''
    numeroInput.focus()

}

function finalizar() {
    if (numArray.length == 0) {
        document.alert('Adicione valores antes de finalizar')
    } else {
        let resposta = document.getElementById('res')
        let arrumado = numArray.sort()
        let maior = arrumado[((numArray.length) - 1)]
        let soma = 0
        for (let pos in numArray) {
            soma += numArray[pos];
        }

        resposta.innerHTML = `<p>Ao todo, temos ${numArray.length} valores cadastrados</p> 
    <p>O maior valor informado foi ${maior} valores cadastrados</p> 
    <p>O menor valor informado foi ${arrumado[0]}</p> 
    <p>A soma dos valores é igual a ${soma}</p> 
    <p>A média dos valores é igual a ${soma / numArray.length}</p> 
    `
    } 
}

