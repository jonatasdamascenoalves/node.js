var funcoes = require('../calculadora/js/funcoes')
var n1=2
var n2=8

const express = require("express")
const app = express()
let port = 3000

// rota principal
// arrow function
app.get('/',(req, res) =>{
    res.send('<h1>Calculadora</h1>' + "Soma é " +funcoes.soma(n1,n2))
    
    
})
app.listen(port,() => {
    console.log('Servidor rodando em')
    console.log('Para derrubar o servidor: ctrl+c')
})



// var dividir = funcoes.dividir(5,3)
// console.log("A divisão é "+dividir)
// var subtrair = funcoes.subtrair(5,3)
// console.log("A subtração é "+subtrair)
// var soma = funcoes.soma(5,3)
// console.log("A soma é "+soma)
// var multiplicacao = funcoes.multiplicacao(5,3)
// console.log("A multiplicação é "+multiplicacao)
