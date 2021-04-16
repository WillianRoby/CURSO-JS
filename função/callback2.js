const notas = [7.8, 8, 9, 3, 4, 5]
//sem callback notas baixas
let notasBaixas = []
for(let i in notas) {
    if (notas[i] < 7 ){
        notasBaixas.push(notas[i])   
    }
}
console.log(notasBaixas)
//com callback notas baixas
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7 
})
console.log(notasBaixas2)

//com callback notas altas
const notasAltas = notas.filter(function(nota) {
    return nota >= 7     
})
console.log(notasAltas)

// sem callback notas altas 
let notasAltas2 = []
for(let i in notas){
    if(notas[i] >= 7){
        notasAltas2.push(notas[i])
    }
}
console.log(notasAltas2)