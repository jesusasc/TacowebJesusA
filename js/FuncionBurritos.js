/*Creacion de base de datos para las tortas*/
firebase.initializeApp({
    apiKey: "AIzaSyDbr0DiUE_-sTSjTsNPr4IuxC5UnItrTmY",
    authDomain: "tacoweb-800f7.firebaseapp.com",
    projectId: "tacoweb-800f7"
  
  }); 
  
  //Agregar Registro
  var db = firebase.firestore();
  
  function Agregar(){
     var select3 = document.getElementById("seleccionar").value;
     var tamaño = document.getElementById("seleccionarTamaño").value;
     var Preparacion1 = document.querySelector('input[name="Picadillo3"]:checked').value;
     var Preparacion2 = document.querySelector('input[name="Nopales3"]:checked').value;
     var Preparacion3 = document.querySelector('input[name="Crema3"]:checked').value;
     var CantidadBurritos = document.getElementById("numcaja").value;
     var PagoBurritos = document.getElementById("Total").value;
  
     db.collection("Burritos").add({
      Burritos : select3,
      Tamaño : tamaño,
      Preparacion1 : Preparacion1,
      Preparacion2 : Preparacion2,
      Preparacion3 : Preparacion3,
      cantBurritos : CantidadBurritos,
      Pagar : PagoBurritos
    })
    
    .then(function(docRef){
        console.log("Document written With ID: ",docRef.id);
        console.log("escogiste: ",Preparacion1);
        console.log("Escogiste: ", Preparacion2);
        console.log("Escogiste: ", Preparacion3);
        console.log("------------------------");

        window.alert("Se ha enviado satisfactoriamente");
        window.location.reload();
    
    })
    .catch(function (error) {
      console.error("Error writing document: ",error);
    })
    }
  ///////////funcion para hacer la operacion y dar el total del producto
  function multi(){
    var Num1 = document.getElementById("numcaja").value;
    var Num2 = document.getElementById("tacoPrecio").value;
    var r = Num1 * Num2;
    document.getElementById("Total").value = r;
  }
  
  
  
  
  
  