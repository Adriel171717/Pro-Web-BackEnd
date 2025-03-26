import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recetaJSON = `{
    "recetaTacos": [
      {
        "id": "0001",
        "tipo": "taco",
        "nombre": "Taco de lechón",
        "precio": 20.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Puerco",
            "preparacion": "Horneado"
          },
          "salsa": {
            "nombre": "Tomate verde",
            "picon": "Medio"
          },
          "acompañamientos": [
            {
              "nombre": "Cebolla",
              "cantidad": "1 cucharada",
              "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
            },
            {
              "nombre": "Guacamole",
              "cantidad": "2 cucharadas",
              "ingredientes": ["Aguacate", "Jugo de limón", "Sal", "Cebolla", "Cilantro"]
            }
          ]
        }
      },
      {
        "id": "0002",
        "tipo": "taco",
        "nombre": "Taco de cochinita pibil",
        "precio": 22.50,
        "ingredientes": {
          "proteina": {
            "nombre": "Cerdo marinado",
            "preparacion": "Cocido en horno de tierra con achiote"
          },
          "salsa": {
            "nombre": "Habanero",
            "picon": "Alto"
          },
          "acompañamientos": [
            {
              "nombre": "Cebolla morada",
              "cantidad": "1/2 taza",
              "ingredientes": ["Cebolla morada", "Vinagre", "Orégano", "Sal"]
            },
            {
              "nombre": "Chile habanero",
              "cantidad": "1 cucharadita",
              "ingredientes": ["Chile habanero", "Limón", "Sal"]
            }
          ]
        }
      },
      {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Taco de pescado",
        "precio": 25.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Pescado",
            "preparacion": "Empanizado y frito"
          },
          "salsa": {
            "nombre": "Crema de chipotle",
            "picon": "Bajo"
          },
          "acompañamientos": [
            {
              "nombre": "Repollo",
              "cantidad": "1/2 taza",
              "ingredientes": ["Repollo", "Zanahoria", "Vinagre", "Sal"]
            },
            {
              "nombre": "Salsa de mango",
              "cantidad": "2 cucharadas",
              "ingredientes": ["Mango", "Cebolla", "Cilantro", "Limón", "Sal"]
            }
          ]
        }
      },
      {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco de camarón",
        "precio": 28.00,
        "ingredientes": {
          "proteina": {
            "nombre": "Camarón",
            "preparacion": "Al mojo de ajo"
          },
          "salsa": {
            "nombre": "Salsa tamulada",
            "picon": "Medio"
          },
          "acompañamientos": [
            {
              "nombre": "Aguacate",
              "cantidad": "4 rebanadas",
              "ingredientes": ["Aguacate", "Sal", "Limón"]
            },
            {
              "nombre": "Pico de gallo",
              "cantidad": "3 cucharadas",
              "ingredientes": ["Jitomate", "Cebolla", "Cilantro", "Limón", "Sal"]
            }
          ]
        }
      }
    ]
  }`;


const recetasTacos = JSON.parse(recetaJSON).recetaTacos;

app.use(express.static("public"));

app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || {error: "Receta no encontrada "});
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto, ${port}`);
});