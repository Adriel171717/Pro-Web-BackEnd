import axios from 'axios';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://dogapi.dog/api/v2/breeds');
        const firstBreed = result.data.data[0].attributes;

        res.render('index.ejs', {
            name: firstBreed.name,
            description: firstBreed.description
        });

        console.log(firstBreed);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la raza de perro');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
