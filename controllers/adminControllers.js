const Platillos=require('../models/platillos')
const upload = require('../config/cloudinary')

exports.inventarioGet= async (req, res)=>{
  const platos=await Platillos.find()
  res.render("inventario",{platos})
  
}

<<<<<<< HEAD
exports.adminView = ( req, res) =>{
  res.redirect("admin")
  
}


exports.menuGet= (req, res)=>{
  res.redirect("menu")
}
=======
>>>>>>> 4012632f2a696a5d2e967982cc972292c475d65d



//C de crud
exports.creaPlatillo=async (req,res)=>{
const {nombre,descripcion,cantidad,costo/*,foto */,platilloId} = req.body
await Platillos.create({nombre,descripcion,cantidad,costo, platillo:platilloId})
const data= await Platillos.find()
res.render("menu",{data})
}
<<<<<<< HEAD

//R de crud
exports.statuspedido = async( req, res) =>{
  if ( this.cantidad >= 20){ 
    const pedido = await Platillos.findById(req.params.platilloId)
    const data= await Platillos.find()
    res.render("statuspedido", {data})
  } else{
    const pedido = await Platillos.findById(req.params.platilloId)
    const data= await Platillos.find()
    res.render("statuspedido", {data})

  }



  



}
//U de crud
// exports.aumentaInventarioView = async ( req, res) =>{
//   const platillo = await Platillos.findByIdAndUpdate(req.params)
//   res.render("aumentaInventario",  platillo)
// }


// exports.aumentaInventario = async (req,res)=>{
//  const { nombre, costo} = req.body
//   await Platillos.findByIdAndUpdate()
//   res.redirect("menu")
// }

//Borrrar platillo
exports.borraPlatillo=async (req,res)=>{
  await Platillos.findByIdAndDelete(req.params.platilloId)
  res.render("menu")
=======
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
>>>>>>> 4012632f2a696a5d2e967982cc972292c475d65d
}


exports.getAllPlatillos=async (req,res)=>{    //llamar todos los platillos
const data= await Platillos.find()
res.render("menu",{data})

}

