const Platillos=require('../models/platillos')
const upload = require('../config/cloudinary')

exports.inventarioGet= (req, res)=>{
  res.render("inventario")
}

exports.menuGet= (req, res)=>{
  res.render("menu")
}


exports.creaPlatillo=async (req,res)=>{
const {nombre,descripcion,cantidad,costo/*,foto */}=req.body
await Platillos.create({nombre,descripcion,cantidad,costo/*,foto */})
const data= await Platillos.find()
res.render("menu",{data})
}
exports.aumentaInventario=async (req,res)=>{

}
exports.borraPlatillo=async (req,res)=>{


}
exports.getAllPlatillos=async (req,res)=>{
const data= await Platillos.find()
res.render("menu",{data})

}