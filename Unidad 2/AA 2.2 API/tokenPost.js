import axios from 'axios';

const loginData = {
  email: "eve.holt@reqres.in", 
  password: "cityslicka"
};

axios.post("https://reqres.in/api/login", loginData)
  .then(response => {
    console.log("Token recibido:", response.data.token);
  })
  .catch(error => {
    console.error("Error en la autenticación:", error.response ? error.response.data : error.message);
  });
