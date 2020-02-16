const Ordenes=require('../models/ordenes')

exports.creaOrden=async (req,res)=>{
  const {platillo,mesa,cantidad}=req.body
  const user= req.user
  await Ordenes.create({idPlatillo:platillo,idMesero:user._id,cantidad,mesa})
  res.redirect("menu")
  }