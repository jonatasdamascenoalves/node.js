const titulo="Generation - NodeJs"
function maiusculo(nome){
    return nome.toUpperCase()
}
function minuscula(nome){
    return nome.toLowerCase()
}
function totalletras(nome){var total=nome.length
    return"Total de letras "+total
}
// Para que esta funções fiquem acessiveis para outro codigo
// vamos ter que exportar as funçoes

module.exports={
    maiusculo, // função
    minuscula, // função
    totalletras, // função
    titulo // constante
}