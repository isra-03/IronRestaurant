const Platillos=require('../models/platillos')
const upload = require('../config/cloudinary')

exports.inventarioGet= (req, res)=>{
  res.render("inventario")
}

exports.adminView = ( req, res) =>{
  res.redirect("admin")
  
}


exports.menuGet= (req, res)=>{
  res.redirect("menu")
}



//C de crud
exports.creaPlatillo=async (req,res)=>{
const {nombre,descripcion,cantidad,costo/*,foto */,platilloId} = req.body
await Platillos.create({nombre,descripcion,cantidad,costo, platillo:platilloId})
const data= await Platillos.find()
res.render("menu",{data})
}

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
}


exports.getAllPlatillos=async (req,res)=>{    //llamar todos los platillos
const data= await Platillos.find()
res.render("menu",{data})

}

