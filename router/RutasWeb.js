const express = require("express");
const router = express.Router();



  router.get("/", (req, res) => {
      res.render("index", { titulo: "inicio EJS" });
    });
    
    router.get("/servicios", (req, res) => {
      res.render("servicios", { tituloservicios :  "Este es un mensaje dinamico de servicios" });
    });

  
    module.exports = router;
