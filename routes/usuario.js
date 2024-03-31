const {Router} = require('express')

const route = Router()


//Listar todos los datos

const{getUsuario, postUsuario, putUsuario,deleteUsuario} = require('../controller/usuario') 
// importa el controllador de usuario


route.get('/', getUsuario),
route.post('/', postUsuario),
route.put('/', putUsuario),
route.delete('/', deleteUsuario),




module.exports = route 