var usuariologeado = ''

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('Esta logeado')
        usuariologeado = user.email
        document.querySelector('.usulog').innerHTML = '<strong>Usuario:</strong> '+usuariologeado
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
  
  document.querySelector('.paginaEjercicios').style.display='none';
}
function abrirEjercicios() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Ejercicios';
  document.querySelector('.paginaEjercicios').style.display='block';
}

function abrirConfig() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'Configuración';
  document.querySelector('.paginaEjercicios').style.display='none';
  
}

function abrirAbout() {
  cerrarPaginaInicial() 
  document.querySelector('.header').innerHTML = 'About';
  document.querySelector('.paginaEjercicios').style.display='none';
}

function envioaPopup() {
  window.location.href = "../paginas/pop.html"
}