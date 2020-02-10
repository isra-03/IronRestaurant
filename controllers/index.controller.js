const User = require('../models/User')
const passport = require('passport')


//index, index admin, inventario, menu, statuspedido
//exorts Get Post


exports.logout = (req, res, next) => {
  req.logout()
  res.redirect('/')
}