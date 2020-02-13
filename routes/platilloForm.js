//const express = require('express')
//const router = express.Router()
//const mongoose     = require('mongoose');
//const Platillos = require('../models/platillos')
//
//
//router.post('/platillo/operar', (req, res, next) =>{
//
//
//  if( req.body._id === ""){
//    let pla = new Platillo({
//      nombres : req.body.nombres,
//      descripciones : req.body.descripciones,
//      costo : req.body.costo
//    })
//    pla.save()
//  } else {
//    //console.log(req.body.id)
//    Platillos.findByIdAndUpdate( req.body._id, {$set: req.body}, {new: true},(err,model) =>{
//      if(err) throw err;
//    })
//  }
//  res.redirect('/')
//})
//
//module.exports = router