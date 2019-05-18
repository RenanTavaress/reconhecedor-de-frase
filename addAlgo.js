var inputSuje = document.querySelector("#inputSujei")
var inputVer = document.querySelector("#inputVerbo")
var inputComple = document.querySelector("#inputCompl")
var inputAdje = document.querySelector("#inputAdjeti")


function addAlgo(algo, algo2){
   var inputAlgo = algo.value
   if(inputAlgo.length > 0){
      algo2.push(inputAlgo)
      console.log(algo2)
      mostraFrase(inputAlgo,algo)
   } else{
      alert('Digite algo')
   }
}


function addSujeito(){
   addAlgo(inputSuje,sujeito) 

}


function addVerbo(){
   addAlgo(inputVer,verbo)
}

function addComplemento(){
   var inputComplemento = inputComple.value
   var arrayDeComplemento = inputComplemento.split(" ")
   if(arrayDeComplemento.length > 0){
      for(var i=0; i < arrayDeComplemento.length; i++){
         complemento.push(arrayDeComplemento[i])
      }
      
   } 
   
   alert(inputComplemento + " foi adicionado com sucesso ")
   console.log(sujeito, verbo, complemento, adjetivos)
   inputComple.value = ""
   
}

function addAdjetivo(){
   addAlgo(inputAdje,adjetivos)
}