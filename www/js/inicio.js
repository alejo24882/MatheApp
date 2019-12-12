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
}
function abrirEjercicios() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Ejercicios';
  document.querySelector('.paginaEjercicios').style.display='block';
  document.querySelector('.paginaConfiguracion').style.display='none'
}

function abrirConfig() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Configuración';
  document.querySelector('.paginaEjercicios').style.display='none';
  document.querySelector('.paginaConfiguracion').style.display='flex'
  
}

function abrirAbout() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'About';
  document.querySelector('.paginaEjercicios').style.display='none';
  document.querySelector('.paginaConfiguracion').style.display='none'
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
        numDecimales = objeto.configuracion[0].decimales
        document.querySelector('#inpConfig1').value = cifra1
        document.querySelector('#inpConfig2').value = cifra2
        console.log(numDecimales)
        
        check(numDecimales)




    });
    
});
}

function check(num1) {
  switch(num1) {
    case 0:
      document.getElementById('check1').setAttribute('checked','checked');
      console.log('boton1')
      break;
    case 1:
     document.getElementById('check2').setAttribute('checked','checked');
     console.log('boton2')
      break;
    default:
       document.getElementById('check3').setAttribute('checked','checked');
       console.log('boton3')
  }

  
}