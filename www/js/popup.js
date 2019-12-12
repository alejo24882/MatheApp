
num1 = document.querySelector('#Num1')
num2 = document.querySelector('#Num2')
num3 = document.querySelector('#Num3')
MultDiv = document.querySelector('.SumRest')
numDecimales = '';

var db = firebase.firestore();



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        db.collection("MatheApp").where("usuario", "==", user.email).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                objeto = doc.data()
                cifra1 = objeto.configuracion[0].cifrasnum1
                cifra2 = objeto.configuracion[0].cifrasnum2
                cifra3 = objeto.configuracion[0].cifrasnum3
                cifra4 = objeto.configuracion[0].cifrasnum4

                numDecimales = objeto.configuracion[0].decimales
                    iniciarNumeros(cifra1, cifra2, cifra3, cifra4)
                    MultoDivi()
            });
        });
        console.log('Esta logeado')

        

    } else {
        console.log('no esta logeado')
        window.location.href = "../index.html"
    }
});




function numeroAleatorio(rango2, rango1) {
    NumAl = Math.floor(Math.random() * (rango1 - rango2) + rango2);
    return NumAl;
}

function iniciarNumeros(parCifra1, parCifra2, parCifra3, parCifra4) {

    num1.innerHTML = numeroAleatorio(parCifra1, parCifra2);
    num2.innerHTML = numeroAleatorio(parCifra3, parCifra4);


}
function MultoDivi() {
    opc = numeroAleatorio(2,0)

    if (opc == 0) {
        MultDiv.innerHTML = '/'
        document.querySelector('.avisoNumDecimales').innerHTML = '*Respuesta con ' + numDecimales + ' decimaes';

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

        resultado = roundTo(numero1 / numero2, numDecimales)


    } else {

        resultado = numero1 * numero2


    }
    if (resultado == numero3) {

        respuestaCorrecta()

    } else {
        alert('Incorrecto intenta nuevamente!')
    }


}

function roundTo(value, places) {
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
}

function respuestaCorrecta() {
    console.log('es igual')
    alert('Numero Correcto')
    window, location.href = './inicio.html'
}



