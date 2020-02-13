const router = require('express').Router()
const {creaOrden,statusOrden}=require('../controllers/loggedControllers')

router.post('/crearOrden', creaOrden)
router.get('/statuspedido', statusOrden)

module.exports=router