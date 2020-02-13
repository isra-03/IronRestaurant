const Platillos=require('../models/platillos')
const upload = require('../config/cloudinary')

exports.inventarioGet= async (req, res)=>{
  const platos=await Platillos.find()
  res.render("inventario",{platos})
  
}



exports.creaPlatillo=async (req,res)=>{
const {nombre,descripcion,cantidad,costo/*,foto */}=req.body
await Platillos.create({nombre,descripcion,cantidad,costo/*,foto */})
const data= await Platillos.find()
res.render("menu",{data})
}
exports.aumentaInventario=async (req,res)=>{
  const {platillo:_id,extra}=req.body
  const plato=await Platillos.findById(_id)
const newCantidad=(plato.cantidad*1)+(extra*1)
  await Platillos.findOneAndUpdate({_id},{cantidad:newCantidad},{new:true})
  res.redirect("/inventario")

}
exports.borraPlatillo=async (req,res)=>{
const {platilloBorra}=req.body
let id=platilloBorra
await Platillos.findByIdAndDelete(id)
res.redirect("/inventario")
}
exports.getAllPlatillos=async (req,res)=>{    //llamar todos los platillos
const data= await Platillos.find()
res.render("menu",{data})

}
