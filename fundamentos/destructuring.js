// novo recurso

const pessoa = {
    nome: 'Willian',
    idade: 5, 
    endereco: {
        logradouro: 'rua',
        numero: 1000 
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)