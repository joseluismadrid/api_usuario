const express = require('express')
const cors = require('cors')
const parser =require ('body-parser')
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuarioPath = '/usuario' //Ruta de la API
        this.routes()
        this.middlewares()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'))
    }

    async conectarDB(){
        await dbConection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use (body-parser.json()) 
    }

}

module.exports = {Server} //Exportación de la clase