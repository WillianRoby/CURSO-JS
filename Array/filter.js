const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 2900, fragil: true},
    {nome: 'Copo', preco: 12.40, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 2500
}))

const caro = produto => produto.preco >=500
console.log(produtos.filter(caro))