firebase.initializeApp({
    apiKey: "AIzaSyDbr0DiUE_-sTSjTsNPr4IuxC5UnItrTmY",
    authDomain: "tacoweb-800f7.firebaseapp.com",
    projectId: "tacoweb-800f7",
    /*storageBucket: "tacoweb-800f7.appspot.com",
    messagingSenderId: "937891101756",
    appId: "1:937891101756:web:5e2b9f06d3251c3bb99739"
    */
  }); 
  
  //Agregar Registro
  var db = firebase.firestore();
  var Tabla = document.getElementById('Tabla1');
  

  db.collection("Burritos").onSnapshot((querySnapshot) => {
              //Tabla.innerHTML = '';//limpia mi tabla
              querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data().Burritos}`);
              Tabla.innerHTML += `
              <tr>
                  <th scope="row">${doc.id}</th> 
                  <td>${doc.data().Burritos}</td>
                  <td>${doc.data().Preparacion1}</td>
                  <td>${doc.data().Preparacion2}</td>
                  <td>${doc.data().Preparacion3}</td>
                  <td>${doc.data().Tamaño}</td>
                  <td>${doc.data().cantBurritos}</td>
                  <td>${doc.data().Pagar}</td>
              </tr>
              `
             
          });
      });

      var TablaTacos = document.getElementsByName('Tabla2');

      db.collection("Tacos").onSnapshot((querySnapshot) => {
        //Tabla.innerHTML = '';//limpia mi tabla
        querySnapshot.forEach((doc) => {
            console.log("--------------------")
        console.log(`${doc.id} => ${doc.data().Tacos}`);
        TablaTacos.innerHTML += `
        <tr>
            <th scope="row">${doc.id}</th> 
            <td>${doc.data().Tacos}</td>
            <td>${doc.data().Picadillo}</td>
            <td>${doc.data().Nopales}</td>
            <td>${doc.data().cantTacos}</td>
            <td>${doc.data().Pagar}</td>
        </tr>
        `
       
    });
});
                