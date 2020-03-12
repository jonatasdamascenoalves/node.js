function soma(n1,n2){

    return (n1+n2)
}
function multiplicacao(n1,n2){

    return(n1*n2)
}
function dividir(n1,n2){
    if(n2!=0){
        return(n1/n2)
    }else{
        "Impossivel dividir por 0"
    }

}
function subtrair(n1,n2){
    
    return(n1-n2)
   
   }
module.exports = {soma,dividir,multiplicacao,subtrair}
