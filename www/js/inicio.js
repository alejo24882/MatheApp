
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('Esta logeado')
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
  document.querySelector('.header').innerHTML = 'Bienvenido';
}
function abrirEjercicios() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Ejercicios';
}

function abrirConfig() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Configuración';
  
}

function abrirAbout() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'About';
}