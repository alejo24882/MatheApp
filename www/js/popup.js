
num1 = document.querySelector('#Num1') 
num2 = document.querySelector('#Num2')
num3 = document.querySelector('#Num3')
MultDiv = document.querySelector('.SumRest')
numDecimales = 1;
var objeto = '';
var db = firebase.firestore();
var cifra1 = '';
var cifra2 ='';


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        db.collection("MatheApp").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
             objeto = doc.id;
             
             console.log(objeto)
        

            });
        });
        console.log('Esta logeado')
        iniciarNumeros()
        MultoDivi()

    } else {
        console.log('no esta logeado')
        window.location.href = "../index.html"
    }
  });

 


function numeroAleatorio(rango) {
    NumAl = Math.floor(Math.random() * (rango - 0) + 0);
return NumAl;
}

function iniciarNumeros(){

    num1.innerHTML = numeroAleatorio(100);
    num2.innerHTML = numeroAleatorio(10);
    

}
 function MultoDivi() {
    opc = numeroAleatorio(2)
    
    if (opc == 0) {
        MultDiv.innerHTML = '/'
        document.querySelector('.avisoNumDecimales').innerHTML = '*Respuesta con '+numDecimales+ ' decimanes';
        
    } else {
        MultDiv.innerHTML = 'X'
    }


 }

 function ejercicio() {

     DivMul = MultDiv.innerHTML
     numero1 = num1.innerHTML
     numero2 = num2.innerHTML 
     numero3 = document.querySelector('.Num3').value
     resultado = '';
     if (DivMul == '/') {
        
           resultado = roundTo(numero1/numero2,numDecimales)
       
           
     } else {
        
        resultado = numero1*numero2
   
        
     }
     if (resultado == numero3) {
         
         respuestaCorrecta() 
       
     }else{
        alert('Incorrecto intenta nuevamente!')
     }
    
        
 }

 function roundTo(value, places){
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
}

function respuestaCorrecta() {
    console.log('es igual')
    window.close();
}



