 require("dotenv").config();
 const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
 const app = express();
 const cors = require("cors");

 app.use(cors());


 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json()) 



 const port = process.env.PORT ||  3000;

 app.listen(port,()=> {    console.log(`http://localhost:${port}`)
 });
 const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clustertapia.vd7ra7g.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
 //const uri = `mongodb+srv://${usuario}:${password}@clustertapia.vd7ra7g.mongodb.net/${dbName}?retryWrites=true&w=majority`;
 mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(()=> console.log('conectado a mongodb')) 
   .catch(e => console.log('error de conexión', e))

  

//const frutero = require('./frutas')
// const {frutas,dinero} = require('./frutas')
// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// frutas.forEach(intem => {
//     //console.log(intem)
//     console.count(intem)
// })
// console.log(dinero)

  
// Motor de plantilla
app.set("view engine", "ejs");

app.set('views',__dirname + "/views");

app.use(express.static(__dirname + "/public"));

//Rutas Web 
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "Nosotros EJS" });
  });
  
  app.use((req, res, next) => {
    res.status(404).render("404", { 
      titulo: "Página 404",
      descripcion: "Titulo de web de error" });
  });