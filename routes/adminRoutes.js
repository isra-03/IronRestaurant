const router = require('express').Router()
const upload = require('../config/cloudinary')
const {
  creaPlatillo,
  aumentaInventario,
  aumentaInventarioView,
  borraPlatillo,
  getAllPlatillos,
  inventarioGet,
  adminView,
  statuspedido
  

}=require("../controllers/adminControllers")

router.post("/crearPlatillo",creaPlatillo) //crear un nuevo platillo

//router.post("/admin",creaPlatillo)

// router.get("/aumentaInventario/",aumentaInventarioView)
// router.post("/aumentaInventario/",aumentaInventario)//modificar el inventario de un platillo



.get("/borrarPlatillo",borraPlatillo) //borrar un platillo




.get("/menu",getAllPlatillos)//trae todos los platillos
.get("/inventario", inventarioGet)

.get("/admin", adminView)
.get("/statuspedido", statuspedido)

module.exports=router
