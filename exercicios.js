// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    
  const altura = prompt("altura")
  const largura = prompt("largura")
  const area = altura * largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Ano atual")
  const anoNasc = prompt("Ano nascimento")
  
  console.log(anoAtual - anoNasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  const imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Cor favorita 1:")
  const cor2 = prompt("Cor favorita 2:")
  const cor3 = prompt("Cor favorita 3:")
  let arrayCor = [cor1, cor2, cor3]

  console.log(arrayCor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

 return string.toUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  const resultadoIngresso = custo / valorIngresso

  return resultadoIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length == string2.length

}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array.pop()
  const ultimo = array.shift()
  array.push(ultimo)
  array.unshift(primeiro)

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  

  const resultado2 = string1.toUpperCase() == string2.toUpperCase()

  return resultado2
  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual1 = prompt("ano atual:")
  const anoNasc1 = prompt("ano nascimento")
  const carteiraIdent = prompt("ano carteira de identidade")
  const idadeAtual = anoAtual1 - anoNasc1 //idade
  const tempoRg = anoAtual1 - carteiraIdent // tempo do RG

  const menorIgual20 =  idadeAtual <= 20 && tempoRg >= 5
  const entre20E50 = idadeAtual > 20 && idadeAtual < 50 && tempoRg >= 10
  const maior50 = idadeAtual > 50 && tempoRg >= 15

  const renovar = menorIgual20 || entre20E50 || maior50


  console.log(renovar)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const mult400 = ano % 400 === 0
  const mult4 = ano % 4 === 0
  const mult100 = ano % 100 === 0

  const bissexto = mult400 || mult4 && !mult100

  return bissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
   const pergIdadeLab = prompt('Você tem mais de 18 ano?')
   const respIdadeLab = pergIdadeLab.toLowerCase() == "sim"
   const pergEnsinoMedio = prompt('Você possui ensino medio completo?')
   const respEnsinoMedio = pergEnsinoMedio.toLowerCase() == "sim"
   const pergHorarioCusro = prompt('Você  possui disponibilidade exclusiva durante os horários do curso?')
   const respHorarioCusro = pergHorarioCusro.toLowerCase() == "sim"

   console.log(respIdadeLab && respEnsinoMedio && respHorarioCusro)

   
   
}