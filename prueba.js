const { get } = require('express/lib/response')
const mongoose = require('mongoose')
const productosDaoAtlas = require('./src/daos/productos/productos.dao.atlas')
 /*mongoose.connect(config.atlas.url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }, 
    err => {
    err ? console.log(err) : console.log('Conectado');
    }
)

mongoose.model('productos',{
    title:{type:String, require:true},
    price:{type:Number, require: true},
    thumbnail:{type:String, require: true},
    _id:{type:Number, require:true}
}) 
.insertMany(
    {"title": "Escuadra","price": 123.45,"thumbnail": " https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png","_id":1},
  {"title": "Calculadora","price": 234.56,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png","_id": 2},
    {"title": "Globo Terráqueo","price": 345.67,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png","_id": 3},
    {"title": "Lapiz","price": 122.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/pencil-256.png","_id": 4},
    {"title": "Tijeras","price": 522.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/school-and-education-outline/64/Education_Line-34-256.png","_id": 5},
    {"title": "Borrador","price": 514.67,"thumbnail": "https://cdn0.iconfinder.com/data/icons/aami-web-internet/64/aami15-42-256.png","_id": 6},
    {"title": "mochila","price": 5400.67,"thumbnail": "https://cdn0.iconfinder.com/data/icons/education-364/24/schoolbag-backpack-bag-school-education-learning-128.png","_id": 7},
    {"title": "Tijeras","price": 522.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/school-and-education-outline/64/Education_Line-34-256.png","_id": 8},
    {"title": "Anotador","price": 865.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/office-322/24/notebook-book-notepad-spiral-256.png","_id": 9},
  {"title": "Compas","price": 264.22,"thumbnail": "https://cdn2.iconfinder.com/data/icons/lined-office-and-school-supplies/512/compass-256.png","_id": 10}
  )
  mongoose.disconnect()
*/

const productos = new productosDaoAtlas()
 // productos.getAll().then( res => {console.log(res)})
  /*productos.save([
    {"title": "Escuadra","price": 123.45,"thumbnail": " https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png","_id": 11},
    {"title": "Calculadora","price": 234.56,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png","_id": 2},
    {"title": "Globo Terráqueo","price": 345.67,"thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png","_id": 3},
    {"title": "Lapiz","price": 122.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/pencil-256.png","_id": 4},
    {"title": "Tijeras","price": 522.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/school-and-education-outline/64/Education_Line-34-256.png","_id": 5},
    {"title": "Borrador","price": 514.67,"thumbnail": "https://cdn0.iconfinder.com/data/icons/aami-web-internet/64/aami15-42-256.png","_id": 6},
    {"title": "mochila","price": 5400.67,"thumbnail": "https://cdn0.iconfinder.com/data/icons/education-364/24/schoolbag-backpack-bag-school-education-learning-128.png","_id": 7},
    {"title": "Tijeras","price": 522.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/school-and-education-outline/64/Education_Line-34-256.png","_id": 8},
    {"title": "Anotador","price": 865.67,"thumbnail": "https://cdn1.iconfinder.com/data/icons/office-322/24/notebook-book-notepad-spiral-256.png","_id": 9},
  {"title": "Compas","price": 264.22,"thumbnail": "https://cdn2.iconfinder.com/data/icons/lined-office-and-school-supplies/512/compass-256.png","_id": 10}
  ])
    .then( res => {console.log(res)})*/

   /* productos.save({"title": "Compas","price": 264.22,"thumbnail": "https://cdn2.iconfinder.com/data/icons/lined-office-and-school-supplies/512/compass-256.png","_id": 11})
    try {
      productos.save({"title": "Compas","price": 264.22,"thumbnail": "https://cdn2.iconfinder.com/data/icons/lined-office-and-school-supplies/512/compass-256.png","_id": 11})
      .then(res => {console.log(res)})
    } catch (error) {
      console.log(error)
      
    }*/
/*
    productos.getByid(8)
      .then( res => {console.log(res)})

      */
