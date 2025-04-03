import axios from 'axios';

//Modificar g-hp_CPOjl-N-BN-F9bx-ikXr-NZD1z7W-TxnzC-7y45-6W-RH
const token = "Poner_Token";  

axios.get("https://api.github.com/user", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(response => {
    console.log("Datos del usuario obtenidos:", response.data);
  })
  .catch(error => {
    console.error("Error al acceder a los datos:", error.response.data);
  });
