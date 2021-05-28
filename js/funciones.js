window.addEventListener("load", function() {
 
    // icono para poder interaccionar con el elemento
    showPassword = document.querySelector('.show-password');
    showPassword.addEventListener('click', () => {
 
      // elementos input de tipo password
      password1 = document.querySelector('.password1');
 
      if ( password1.type === "text" ) {
        password1.type = "password"
        showPassword.classList.remove('fa-eye-slash');
      } else {
        password1.type = "text"
        showPassword.classList.toggle("fa-eye-slash");
      }
  })
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbr0DiUE_-sTSjTsNPr4IuxC5UnItrTmY",
    authDomain: "tacoweb-800f7.firebaseapp.com",
    projectId: "tacoweb-800f7",
    storageBucket: "tacoweb-800f7.appspot.com",
    messagingSenderId: "937891101756",
    appId: "1:937891101756:web:5e2b9f06d3251c3bb99739"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


/* Iniciar Sesion */
function Ingresar(){
    console.log(" Verificando la funcionalidad de Ingresar");
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    // ...
    console.log("A Iniciado Sesion Satisfactoriamente");
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}

