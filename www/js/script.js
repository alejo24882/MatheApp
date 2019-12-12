var consolaAzul = document.getElementById('preview')
var contedorEmailPass = document.getElementById('contedorEmailPass')
var btnregistro = document.getElementById('btnRegistrar')
var btnLogin = document.getElementById('btnLogin')
var db = firebase.firestore();


document.getElementById('signIn').addEventListener('click', function(){

        consolaAzul.classList.add('active');
        contedorEmailPass.classList.add('activeEmailPass')
        document.getElementById('BtnEliminar').classList.add('BtnEliminarEf');
        document.getElementById('triangulo').classList.add('active');
        document.getElementById('rectangulo').classList.add('curva');
        document.getElementById('signIn').classList.add('btnActive');
        document.getElementById('signInGoogle').classList.add('btnActive');
        
})

document.getElementById('BtnEliminar').addEventListener('click', function(){
        
        consolaAzul.classList.remove('active');
        document.getElementById('BtnEliminar').classList.remove('BtnEliminarEf');
        document.getElementById('triangulo').classList.remove('active');
        document.getElementById('rectangulo').classList.remove('curva');
        document.getElementById('signIn').classList.remove('btnActive');
        document.getElementById('signInGoogle').classList.remove('btnActive');

        
})


function handleSignUp() {
        var email = document.getElementById('inEmail').value;
        var password = document.getElementById('inPass').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
                function () {
                  crearUsuarioyParametros(email) 
                       
                       
                }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            alert('El Password es muy debil');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END createwithemail]
      }



      function toggleSignIn() {
        if (firebase.auth().currentUser) {
          // [START signout]
          firebase.auth().signOut();
          // [END signout]
        } else {
                var email = document.getElementById('inEmail').value;
                var password = document.getElementById('inPass').value;
          if (email.length < 4) {
            alert('Please enter an email address.');
            return;
          }
          if (password.length < 4) {
            alert('Please enter a password.');
            return;
          }
          // Sign in with email and pass.
          // [START authwithemail]
          firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
                bienvenido()
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            
            // [END_EXCLUDE]
          });
          // [END authwithemail]
        }       
      
      }


function bienvenido() {
        alert('Bienvenido')
        window.location.href = "./paginas/inicio.html"
}
 
function crearUsuarioyParametros(usuario) {
  alert('Usuario Creado, ya puedes ingresar!')
  //creo objetos
  envio(usuario)
}



function envio(usuario) {
    

    var data = {
        usuario: usuario,
        nombre: '',
        apellido: '',
        configuracion : [{
                decimales: 0,
                cifrasnum1: 0,
                cifrasnum2: 10,
                cifrasnum3: 0,
                cifrasnum4: 10

              }]
          }
          db.collection("MatheApp").doc(usuario).set(data)
    }
    

