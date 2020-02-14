const router = require('express').Router()
const upload = require('../config/cloudinary')
const {
  creaPlatillo,
  aumentaInventario,
  borraPlatillo,
  getAllPlatillos,
  inventarioGet
  
}=require("../controllers/adminControllers")
const { isLoggedIn, isActive, isAdmin } = require('../middlewares/auth')

router.post("/crearPlatillo",isLoggedIn, isActive, isAdmin,creaPlatillo) //crear un nuevo platillo
.post("/aumentarInventario",isLoggedIn, isActive, isAdmin,aumentaInventario)//modificar el inventario de un platillo
.post("/borrarPlatillo",isLoggedIn, isActive, isAdmin,borraPlatillo) //borrar un platillo
.get("/menu",isLoggedIn, isActive,getAllPlatillos)//trae todos los platillos
.get("/inventario",isLoggedIn, isActive, isAdmin, inventarioGet)

module.exports=router