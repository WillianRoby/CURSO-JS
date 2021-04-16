const pai = {nome: 'Willian', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo) 

const filha2 = Object.create(pai)