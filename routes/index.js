const router = require('express').Router()
<<<<<<< HEAD
//const upload = require('../config/cloudinary')
=======

>>>>>>> 8cdfb332eb7104f7a2c1342f3703491f75b0a06b
const { catchErrors } = require('../middlewares/catchErrors')
const { isLoggedIn, isActive } = require('../middlewares/auth')
const  passport=require("../config/passport")

const{
  //Nombres de las vistas
  indexGet,
  signupPost,
  signupGet,
  confirmGet,
  logout,
  loginPost,
  adminGet
} = require('../controllers')


router.get('/', indexGet)
.post("/signup",signupPost)
.get("/signup",signupGet)
.get("/confirmation/:confirmationCode",confirmGet)
.post("/login",passport.authenticate('local'),loginPost)
.get("/admin",adminGet)
 //Router.get.port de las vistas

router.get('/logout', logout)
module.exports = router;


