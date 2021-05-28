/*Creacion de base de datos para las tortas*/
firebase.initializeApp({
  apiKey: "AIzaSyDbr0DiUE_-sTSjTsNPr4IuxC5UnItrTmY",
  authDomain: "tacoweb-800f7.firebaseapp.com",
  projectId: "tacoweb-800f7"

}); 

//Agregar Registro
var db = firebase.firestore();

function Agregar(){
   var select = document.getElementById("seleccionar").value;
   Preparacion1 = document.querySelector('input[name="Picadillo"]:checked').value;
   Preparacion2 = document.querySelector('input[name="Nopales"]:checked').value;
   Preparacion3 = document.querySelector('input[name="Mayoneza"]:checked').value;
   var CantidadTortas = document.getElementById("numcaja").value;
   var PagoTorta = document.getElementById("Total").value;

   db.collection("Tortas").add({
    TORTA : select,
    Preparacion1 : Preparacion1,
    Preparacion2 : Preparacion2,
    Preparacion3 : Preparacion3,
    cantTortas : CantidadTortas,
    Pagar : PagoTorta
  })
  
  .then(function(docRef){
      console.log("Document written With ID: ",docRef.id);
      console.log("escogiste : ",Preparacion1);
      console.log("escogiste : ",Preparacion2);
      console.log("escogiste : ",Preparacion3);
      console.log("----------------------------");

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





