import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';


// import mongoose from 'mongoose';
// import Usuario from './models/usuario.model.js';

dotenv.config();
const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Variables para el Mongo DB

const uri = process.env.uri;
const client = new MongoClient(uri);
let db;
let usuariosCollection;

//Conectar con mongoDb 

async function conectarDB() {
    try {
        await client.connect();
        db = client.db('test');
        usuariosCollection = db.collection('usuarios');
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}
conectarDB();


//Rutas Principales

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

//Crear Usuario

app.post('/Usuarios', async (req, res) => {
    try{

        const nuevoUsuario = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const resultado = await usuariosCollection.insertOne(nuevoUsuario);
        const usuarioCreado  = await usuariosCollection.findOne({ _id: resultado.insertedId });
        res.status(201).json(usuarioCreado);

    }catch (error){
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario'})
    }
});

//Metodo Put para actualizar

app.put('/usuario/:id', async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);

        const datosActualizados = {
            ...req.body,
            updatedAt: new Date()
        };

        const usuario = await usuariosCollection.updateOne(
            { _id: id },
            { $set: datosActualizados }
        );

        if (usuario.matchedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuarioActualizado = await usuariosCollection.findOne({ _id: id });
        res.status(200).json(usuarioActualizado);

    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
})

//Eliminar Usuario

app.delete('/usuario/:id', async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const usuario = await usuariosCollection.deleteOne({ _id: id });

        if (usuario.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
})

//Obtener todos los usuarios

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await usuariosCollection.find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

//Buscar Usuario por ID

app.get('/usuario/:id', async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const usuario = await usuariosCollection.findOne({ _id: id });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json(usuario);
    } catch (error) {

        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
})