var usuariologeado = ''
var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('Esta logeado')
        usuariologeado = user.email
        document.querySelector('.usulog').innerHTML = '<strong>Usuario:</strong> '+usuariologeado
        configuracionEstablecida()
        console.log(usuariologeado)
    } else {
        console.log('no esta logeado')
        window.location.href = "../index.html"
    }
  });

  

// <!-- window.location.href = "./paginas/inicio.html"-->

function LogOut(){

    firebase.auth().signOut();
}


function cerrarPaginaInicial() {
  document.querySelector('.paginaInicial').style.display = 'none';
  document.querySelector('.navAbajo').style.display = 'flex';
  
}
function abrirPaginaInicial() {
  document.querySelector('.paginaInicial').style.display = 'block';
  document.querySelector('.navAbajo').style.display = 'none';
  document.querySelector('.paginaConfiguracion').style.display='none'
  document.querySelector('.paginaEjercicios').style.display='none';
  document.querySelector('.paginaAbout').style.display='none';
}
function abrirEjercicios() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Ejercicios';
  document.querySelector('.paginaEjercicios').style.display='block';
  document.querySelector('.paginaConfiguracion').style.display='none'
  document.querySelector('.paginaAbout').style.display='none';
}

function abrirConfig() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Configuración';
  document.querySelector('.paginaEjercicios').style.display='none';
  document.querySelector('.paginaConfiguracion').style.display='flex'
  document.querySelector('.paginaAbout').style.display='none';
  
}

function abrirAbout() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'About';
  document.querySelector('.paginaEjercicios').style.display='none';
  document.querySelector('.paginaConfiguracion').style.display='none'
  document.querySelector('.paginaAbout').style.display='flex';
}

function envioaPopup() {
  window.location.href = "../paginas/pop.html"
}

function configuracionEstablecida() {

  db.collection("MatheApp").where("usuario", "==", usuariologeado).get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        objeto = doc.data()
        cifra1 = objeto.configuracion[0].cifrasnum1
        cifra2 = objeto.configuracion[0].cifrasnum2
        cifra3 = objeto.configuracion[0].cifrasnum3
        cifra4 = objeto.configuracion[0].cifrasnum4
        numDecimales = objeto.configuracion[0].decimales

        document.querySelector('#inpConfig1').value = cifra1
        document.querySelector('#inpConfig2').value = cifra2
        document.querySelector('#inpConfig3').value = cifra3
        document.querySelector('#inpConfig4').value = cifra4

        
        check(numDecimales)

    });
    
});
}

function check(num1) {
  switch(num1) {
    case 0:
      document.getElementById('check1').setAttribute('checked','checked');

      break;
    case 1:
     document.getElementById('check2').setAttribute('checked','checked');
     
      break;
    default:
       document.getElementById('check3').setAttribute('checked','checked');
       
  }
}
function guardarConfiguraciones() {

var check = '';
var check1 = document.getElementById('check1') ;
var check2 = document.getElementById('check2') ;
var check3 = document.getElementById('check3') ;

if (check1.checked) {
  check = 0;
  
}
if (check2.checked) {
  check = 1;
  
}
if (check3.checked) {
  check = 2;
}
var mensaje = confirm("¿Deseas guardar esta configuración?");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
  db.collection("MatheApp").doc(usuariologeado).update({
    configuracion : [{
      decimales: check,
      cifrasnum1: document.getElementById('inpConfig1').value,
      cifrasnum2: document.getElementById('inpConfig2').value,
      cifrasnum3: document.getElementById('inpConfig3').value,
      cifrasnum4: document.getElementById('inpConfig4').value
    }] })
    .then(function() {
    console.log("actualizado ok");
    })
    .catch(function(error) {
    console.log("Error: " + error);
    });
  
}
//Detectamos si el usuario denegó el mensaje
else {
alert("¡No se guardo la configuracion!");
}


  configuracionEstablecida()
  
}
