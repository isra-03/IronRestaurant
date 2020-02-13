const Platillos=require('../models/platillos')
const upload = require('../config/cloudinary')

exports.inventarioGet= (req, res)=>{
  res.render("inventario")
}




//C de crud
exports.creaPlatillo=async (req,res)=>{
  const {nombre,descripcion,cantidad,costo/*,foto */}=req.body
  await Platillos.create({nombre,descripcion,cantidad,costo/*,foto */})
  const data= await Platillos.find()
  res.render("menu",{data})
  }


  exports.getAllPlatillos=async (req,res)=>{    //llamar todos los platillos
    const data= await Platillos.find()
    res.render("menu",{data})
    
    }


exports.    