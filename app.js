 require("dotenv").config();
 const express = require('express');
 const mongoose = require('mongoose');
 const app = express();
 const cors = require("cors");
 app.use(cors());

// const usuario = "youtube_curso"
// const password = "L7kWP65TmE52VcFK"
// const dbName = "veterinaria"
 const port = process.env.PORT ||  3000;

 app.listen(port,()=> {    console.log(`http://localhost:${port}`)
 });
// const uri = `mongodb+srv://${usuario}:${password}@clustertapia.vd7ra7g.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// //mongodb+srv://edgartapiaperez:<password>@clustertapia.vd7ra7g.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(()=> console.log('conectado a mongodb')) 
//   .catch(e => console.log('error de conexión', e))

  

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

app.get('/', (req, res)=> {
  //console.log(___dirname)
  res.render("index",{titulo : "Mi titulo dinamico"})
})
app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });
  
  app.get("/servicios", (req, res) => {
    res.render("servicios", { tituloservicios :  "Este es un mensaje dinamico de servicios" });
  });

  app.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "Nosotros EJS" });
  });
  
  app.use((req, res, next) => {
    res.status(404).render("404", { 
      titulo: "Página 404",
      descripcion: "Titulo de web de error" });
  });