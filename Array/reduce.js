const alunos = [
    {nome: 'Willian', nota: 9.9, bolsista: false},
    {nome: 'Airan', nota: 9.2, bolsista: true},
    {nome: 'Nathan', nota: 5.5, bolsista: false},
    {nome: 'Nathan', nota: 6.5, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})