let num = [1, 2, 3, 7, 6]
num.push(8)
for (let pos in num){
    console.log(num[pos])
}

let arrumado = num.sort()
let maior = arrumado[((num.length)-1)]
console.log(maior)

/*let posicao = num.indexOf(12)
console.log(`O valor 7 está na posição ${posicao}`)*/
