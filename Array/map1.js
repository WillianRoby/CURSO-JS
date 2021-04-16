const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado) // vai imprimir um array com os elementos duplicados.

const soma10 = e => e + 10
const triplo = e => e * 3

resultado = nums.map(soma10).map(triplo)
console.log(resultado)