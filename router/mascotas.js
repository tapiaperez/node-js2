const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascotas');
const { route } = require('./RutasWeb');


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
 })

 router.get('/crear', (req , res) => {
    res.render('crear')
})

router.post('/', async (req, res)=> {
    const body = req.body
    try{
        
        ////metodo save
        //const mascotaDB=new Mascota(body)
        //await mascotaDB.save()
       // console.log('Mascota Creada ',mascotaDB)

       //metod cerate - mas corto
       await Mascota.create(body)
       res.redirect('/mascotas')
    } catch(error){
        console.log(error)
    }
})

// router.get('/',(req,res)=> {
//     res.render("mascotas",{
//         arrayMascotas:[
//             {id:'dscdcdc',nombre:'rex',descripcion:'red des'},
//             {id:'sdfdfd',nombre:'rexchiguagua',descripcion:'red chi'},
//             {id:'dscdcdasdfdsc',nombre:'pilbul',descripcion:'red pi'},
//         ]
//     })
// })


router.get('/:id', async  (req, res) => {
  const id = req.params.id
    try {
     const mascotaDB = await Mascota.findOne({ _id: id })
      console.log(mascotaDB)
      res.render('detalle', {
        mascota: mascotaDB,
        error :false
      })
  } catch (error) {
    console.log(error)
    res.render('detalle', {
        error :true,
        mensaje: 'No se encuentra el ID Seleccionado'
    })
  }  
})

router.delete('/:id', async(req, res) =>{
    const id =req.params.id
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id: id} )
            if (mascotaDB) {
                res.json({
                    estado: true,
                    mensaje:'eliminado!'
                })              
            }else{
                res.json({
                    esatdo: false,
                    mensaje:'fallo eliminar!'
                })
            }
    } catch (error) {
        console.log(error)
        
    }
} )


router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const body=req.body
    try {
        
        const mascotaDB= await Mascota.findByIdAndUpdate(id, body, {useFindAndModify: false})
        console.log(mascotaDB)
        res.json({
            estado:true,
            mensaje:'Editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado:false,
            mensaje:'Falaldo!'
        })
    }
})

module.exports = router;

