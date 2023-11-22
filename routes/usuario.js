const {Router} = require('express')

const route = Router()


//Listar todos los datos

const{getUsuario, postUsuario, putUsuario,deleteUsuario} = require('../controller/usuario') 
// importa el controllador de usuario


route.get('/', getUsuario),
route.post('/', postUsuario)
route.put('/', putUsuario)
route.delete('/', deleteUsuario)

//Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

//Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 