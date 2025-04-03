import axios from 'axios';

const invalidToken = "token_invalido";

axios.get("https://api.github.com/user", {
  headers: {
    Authorization: `token ${invalidToken}`
  }
})
  .then(response => {
    console.log("Acceso inesperado:", response.data);
  })
  .catch(error => {
    console.error("Error con token inválido:", error.response.data);
  });
