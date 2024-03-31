const {Schema, model }=require('mongoose')

const UsuarioSchema=({
    nombre:{
        type:String,     
        required:[true,'El nombre de Usuario es requerido'],
    },
    password:{
        type:Number,
        required:[true,'El password es requerido'],
        min:[4,'El password debe contener mínimo 4 caracteres'],
        max:[10,'El password debe contener máximo 10 cararacteres']
    },
   
});

module.exports = model('Usuario',UsuarioSchema)