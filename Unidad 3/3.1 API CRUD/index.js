import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Usuario from './models/usuario.model.js';

dotenv.config();
const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

const uri = process.env.uri

mongoose.connect(uri)
    .then(() =>{
        console.log("Conexión exitosa a la base de datos"); 
    })
    .catch ((error) => {
    console.error("Error al conectar a la base de datos:", error); 
});

app.post('/Usuarios', async (req, res) => {
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    }catch (error){
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario'})
    }
});

//Seccion 7 actualizar usuario

app.put('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, req.body);
        if(!usuario){
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const usuarioActualizado = await Usuario.findById(id);
        res.status(200).json(usuario);
        console.log(usuarioActualizado);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
})

//Seccion 8 Eliminar Usuario

app.delete('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findByIdAndDelete(id);
        if(!usuario){
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado'});
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
})

//Seccion 5 Obtener Usuarios

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
})

//Seccion 6: Consultar usuario por id

app.get('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
})