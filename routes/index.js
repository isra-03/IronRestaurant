const router = require('express').Router()
//const upload = require('../config/cloudinary')
const { catchErrors } = require('../middlewares/catchErrors')
const { isLoggedIn, isActive } = require('../middlewares/auth')



const {
  //Nombres de las vistas
  indexGet,
  signupGet,
  signupPost,
  menu

} = require('../controllers')
router.get('/', indexGet)

router.get('/signup', signupGet)

router.post("/signup",signupPost)
 //Router.get.port de las vistas

//router.get('/logout', logout)

router.post('/menu' , menu)

module.exports = router;


