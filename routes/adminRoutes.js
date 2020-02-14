const router = require('express').Router()
const upload = require('../config/cloudinary')
const {
  creaPlatillo,
  aumentaInventario,
  borraPlatillo,
  getAllPlatillos,
  inventarioGet
  
}=require("../controllers/adminControllers")

router.post("/crearPlatillo",creaPlatillo) //crear un nuevo platillo
.post("/aumentarInventario",aumentaInventario)//modificar el inventario de un platillo
.post("/borrarPlatillo",borraPlatillo) //borrar un platillo
.get("/menu",getAllPlatillos)//trae todos los platillos
.get("/inventario", inventarioGet)

module.exports=router