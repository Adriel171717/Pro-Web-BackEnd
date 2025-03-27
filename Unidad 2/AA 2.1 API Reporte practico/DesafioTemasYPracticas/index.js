import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const temasJSON = `{
    "temas": [
      {
        "id": "001",
        "nombre": "Programación Web",
        "descripcion": "Fundamentos de desarrollo de aplicaciones web modernas",
        "palabrasClaves": ["HTML", "CSS", "JavaScript", "Frontend"],
        "practicas": [
          {
            "titulo": "Crear una página HTML básica",
            "descripcion": "Implementar una estructura HTML5 con elementos semánticos",
            "objetivo": "Familiarizarse con la sintaxis HTML y la estructura básica de documentos web"
          },
          {
            "titulo": "Estilizar con CSS",
            "descripcion": "Aplicar estilos CSS a la página HTML creada anteriormente",
            "objetivo": "Aprender a usar selectores, propiedades y valores CSS"
          }
        ]
      },
      {
        "id": "002",
        "nombre": "Bases de Datos",
        "descripcion": "Conceptos fundamentales de diseño y manejo de bases de datos",
        "palabrasClaves": ["SQL", "Modelado", "Consultas", "Normalización"],
        "practicas": [
          {
            "titulo": "Diseñar un modelo relacional",
            "descripcion": "Crear un diagrama entidad-relación para un sistema propuesto",
            "objetivo": "Entender cómo modelar datos en un sistema de bases de datos relacionales"
          },
          {
            "titulo": "Escribir consultas SQL",
            "descripcion": "Implementar consultas SELECT, INSERT, UPDATE y DELETE",
            "objetivo": "Dominar el lenguaje SQL para manipular datos"
          }
        ]
      },
      {
        "id": "003",
        "nombre": "Algoritmos",
        "descripcion": "Estructuras de datos y algoritmos fundamentales",
        "palabrasClaves": ["Complejidad", "Ordenamiento", "Búsqueda", "Recursión"],
        "practicas": [
          {
            "titulo": "Implementar algoritmos de ordenamiento",
            "descripcion": "Codificar bubble sort, merge sort y quick sort",
            "objetivo": "Entender los diferentes enfoques para ordenar datos"
          },
          {
            "titulo": "Resolver problemas con recursión",
            "descripcion": "Implementar soluciones recursivas para problemas clásicos",
            "objetivo": "Desarrollar pensamiento recursivo en programación"
          }
        ]
      }
    ]
  }`;

const temas = JSON.parse(temasJSON).temas;

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/tema/:id', (req, res) => {
    const tema = temas.find(t => t.id === req.params.id);
    res.json(tema || {error: "Tema no encontrado"});
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});