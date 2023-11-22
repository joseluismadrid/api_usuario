const {Schema, model }=require('mongoose')

const UsuarioSchema=({
    nombre:{
        type:String,
        unique:true,
        required:[true,'Elnombre de Usuario es requerido'],
    },
    password:{
        type:String,
        required:[true,'El password es requerido'],
        min:[4,'El password debe contener mínimo 4 caracteres'],
        max:[10,'El password debe contener máximo 10 cararacteres']
    },
    rol:{
        type:String,
        requerid:[true,'El rol es requerido'],
        enum:['Admin','Usuario']
    },
    estado:{
        type:Boolean,  
        default:true,    
    }
});

module.exports = model('Usuario',UsuarioSchema)