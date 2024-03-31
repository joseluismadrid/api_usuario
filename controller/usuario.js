const {response}=require('express')

const usuario= require('../models/usuario')

const getUsuario= async(req,res)=>{
    
    const usuarios = await usuario.find();//Obtener todos los documentos de una coleccion
    res.json({
        msg: usuarios
    })
};

const postUsuario = async(req,res)=>{
    const datos= req.body//capturar datos de la postman
    let mensaje ='Inserción exitosa'
    try {
        const usuarios = new usuario(datos)
        await usuarios.save() //guarda en la base de datos
        console.log(usuarios)
    } catch (error) {
        mensaje=error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}
const putUsuario =async (req, res) => {
    const {nombre,password}= req.body //desetructurar 
    let mensaje = 'Actualizacion Exitosa'
    try {
        const   usuarios = await usuario.findOneAndUpdate({nombre:nombre},{password:password}) 
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg:mensaje
    })
    
}
const deleteUsuario =async (req, res) => {
    const {nombre,password}= req.body //desetructurar 
    let mensaje = 'Eliminacion Exitosa'
    try {
        const   usuarios = await usuario.findOneAndDelete({nombre:nombre},{password:password}) 
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg:mensaje
    })
    
}
module.exports={
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario

}