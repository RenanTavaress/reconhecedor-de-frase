var input1 = document.querySelector("#inpu1")
var listElement = document.querySelector('ul')


var sujeito = ["renato", "vinicius","fabian",""]
var verbo = ["programou", "fez","terminou"]
var complemento = []
var adjetivos = ["bonito","baguncado","bugado"]

console.log(sujeito, verbo, complemento, adjetivos)

var criarLi = document.createElement('li')

function analisarFrase(arrayDeFrase, frase){

   if(sujeito.includes(arrayDeFrase[0]) && verbo.includes(arrayDeFrase[1]) && complemento.includes(arrayDeFrase[2]) && complemento.includes(arrayDeFrase[3]) && adjetivos.includes(arrayDeFrase[4])){
  
      let textInput = document.createTextNode(frase)
      console.log(textInput)
      listElement.append(criarLi)
      criarLi.appendChild(textInput)
      criarLi.style.color = "#008000"
      

   }  else {
         naoReconheceu()
      }   
}


function naoReconheceu(){
   criarLi.innerHTML = ''
   let textInput = document.createTextNode("Nao foi possivel reconhecer")
   console.log(textInput)
   listElement.append(criarLi)
   criarLi.appendChild(textInput)
   criarLi.style.color = "#F00"
}


function verificar(){
   
   criarLi.innerHTML = ""
   var frase = input1.value
   var arrayDeFrase = frase.split(" ")
   console.log(arrayDeFrase)

   analisarFrase(arrayDeFrase, frase)
   input1.value = ""

   
   
}

function mostraFrase(texto,texto2){
   alert(texto + " foi adicionado com sucesso ")
   texto2.value = ""
}


