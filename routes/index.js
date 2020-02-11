const router = require('express').Router()
const upload = require('../config/cloudinary')
const { catchErrors } = require('../middlewares/catchErrors')
const { isLoggedIn, isActive } = require('../middlewares/auth')



const {
  //Nombres de las vistas

} = require('../controllers/index.controller')
 //Router.get.port de las vistas

//router.get('/logout', logout)
module.exports = router;
