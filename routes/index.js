const router = require('express').Router()
const upload = require('../config/cloudinary')
const { catchErrors } = require('../middlewares/catchErrors')
const { isLoggedIn, isActive } = require('../middlewares/auth')



const {
  //Nombres de las vistas
  indexGet,
  signupPost

} = require('../controllers')
router.get('/', indexGet)
.post("/signup",signupPost)
 //Router.get.port de las vistas

//router.get('/logout', logout)
module.exports = router;
