const router = require('express').Router()
const Ordenes=require('../models/ordenes')

exports.creaOrden=async (req,res)=>{
  const {platillo,mesa,cantidad}=req.body
  const user= req.user
  await Ordenes.create({idPlatillo:platillo,idMesero:user._id,cantidad,mesa})
  res.redirect("statuspedido")
  }

exports.creaOrden=async (req,res) => {
const ordenesStatus=await Ordenes.find()
res.render("statuspedido",{ordenesStatus})
}