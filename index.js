// const { trusted } = require("mongoose")

// // template string
// const numero = (num1 , num2) => {
//     return `el numero es: + ${num1 + num2}`
// }

// const resultado = numero(10,50)
// console.log(resultado)


// //objetos

// const mascota = {
//     nombre : 'Tom',
//     edad:'10',
//     vivo: true,
//     razas: ['pitbol','chiguagua']
//     }
//     console.log(mascota)
//     console.log(mascota.nombre)
//     console.log(mascota.edad)
//     console.log(mascota.vivo)

//     mascota.id= 1111

//     console.log(mascota.id)
//     console.log(mascota.razas[1])

    console.log('---------------')

    // const mascota = {
    //     nombre : 'Tom',
    //     edad:'10',
    //     vivo: true,
    //     razas: ['pitbol','chiguagua']
    //     }

    //     const nombreMascota = mascota.nombre
    //     const {edad} = mascota
    //     console.log(nombreMascota)
    //     console.log(edad)

    // const web = {
    //     nombre: 'tapia',
    //     links: {
    //         enlace: 'wwww.tapia.pe'
    //     },
    //     redessociales : {
    //         youtube: {
    //             enlace: 'youtube.com/tapia',
    //             nombre: 'tapia perez'
    //         }
    //     }
    // }

    // console.log(web.redessociales.youtube.enlace)

//     //fetch -- consumir api
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>  res.json())
     .then(data => {
     //console.log(data.results)
     let arrayNombres=[]
     data.results.forEach(element => {
        //console.log(element.name)
        arrayNombres.push(element.name)
     });
     //console.log(arrayNombres)
     })

  //en caso errorress.
     .catch(error => console.log(error))

////async await


const obtenerPokemones=async () => {
    try {
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
       const data = await res.json()
       //console.log(data.results)
       data.results.forEach(element => {
        //console.log(element.name)
       //const arrayNombres = data.results.map(poke => console.log(poke.name))
       //const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur')
       //const arrayNombres = data.results.filter(poke => poke.url )
       const arrayNombres = data.results.filter(poke => poke.name !=='bulbasaur' )
       console.log(arrayNombres)
     });
    } catch (error){
        console.log(error)
    }
}

obtenerPokemones()

