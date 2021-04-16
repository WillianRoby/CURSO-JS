const notas = [8.0, 9.6, 9.9, 6.5, 5.0]

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Willian',
    sobrenome: 'Robson',
    idade: 18
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
