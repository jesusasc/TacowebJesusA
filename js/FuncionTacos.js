/*Creacion de base de datos para las tortas*/
firebase.initializeApp({
    apiKey: "AIzaSyDbr0DiUE_-sTSjTsNPr4IuxC5UnItrTmY",
    authDomain: "tacoweb-800f7.firebaseapp.com",
    projectId: "tacoweb-800f7"
  
  }); 
  
  //Agregar Registro
  var db = firebase.firestore();
  
  function Agregar(){
     var select2 = document.getElementById("seleccionar").value;
     var CantidadTacos = document.getElementById("numcaja").value;
     var Preparacion1 = document.querySelector('input[name="Picadillo2"]:checked').value;
     var Preparacion2 =  document.querySelector('input[name="Nopales2"]:checked').value;
     var PagoTacos = document.getElementById("Total").value;
    

     db.collection("Tacos").add({
      Tacos : select2,
      Picadillo: Preparacion1,
      Nopales : Preparacion2,
      cantTacos : CantidadTacos,
      Pagar : PagoTacos
    })
    
    .then(function(docRef){
        console.log("Document written With ID: ",docRef.id);
        console.log("escogio : ",Preparacion1);
        console.log("escogio : ",Preparacion2);

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
  
  
  
  
  
  