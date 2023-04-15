const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascotas')


 router.get ('/', async (req, res)=> {
     try {
         const arrayMascotasDB = await Mascota.find()
         console.log(arrayMascotasDB)
         res.render("mascotas",{
         arratMascotas: arrayMascotasDB    
         })
        
     } catch (error) {
         console.log(error)
     }
 }
 )


// router.get('/',(req,res)=> {
//     res.render("mascotas",{
//         arrayMascotas:[
//             {id:'dscdcdc',nombre:'rex',descripcion:'red des'},
//             {id:'sdfdfd',nombre:'rexchiguagua',descripcion:'red chi'},
//             {id:'dscdcdasdfdsc',nombre:'pilbul',descripcion:'red pi'},
//         ]
//     })
// })
module.exports = router;

