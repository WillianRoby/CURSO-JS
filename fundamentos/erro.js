function tratarErro(erro){
    throw 'Erro!!!!!!!!!'
}
function imprimirNome(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')

    }catch(e){
        tratarErro(e)
    }
}

const obj = { name: 'Willian' }
imprimirNome(obj)