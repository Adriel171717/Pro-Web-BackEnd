import axios from 'axios';

const API_KEY = '64ca0022e34829912376a6299b08ad46';
const CITY = 'Mexico';

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
  .then(response => {
    console.log(`Clima en ${CITY}:`, response.data.main.temp + '°C');
  })
  .catch(error => {
    console.error('Error:', error.response.data.message);
  });
