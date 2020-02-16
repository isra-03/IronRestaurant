const router = require('express').Router()

const {creaOrden}=require('../controllers/loggedControllers')

router.post('/crearOrden', creaOrden)
module.exports=router