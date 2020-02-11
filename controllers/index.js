const User = require('../models/User')
const passport = require('passport')
const {confirmAccount}=require("../config/nodemailer")

exports.indexGet = (req, res, next) => res.render('index')
//index, index admin, inventario, menu, statuspedido
//exorts Get Post


exports.logout = (req, res, next) => {
  req.logout()
  res.redirect('/')
}

const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let token = '';
for (let i = 0; i < 25; i++) {
  token += characters[Math.floor(Math.random() * characters.length )];
}
exports.signupGet = (req, res, next) => res.render('signup')

exports.signupPost = async (req,res,next) => {
  console.log("entra")
  const { name:username,newemail:email, newpassword:password } = req.body

      let user = await User.register({ username, email, confirmationCode:token}, password)
      let endpoint=`http://localhost:3000/confirm/${token}`
      await confirmAccount(email,
      endpoint
    )
  console.log("manda correo")
  res.redirect("/")
}

exports.loginGet=(req,res,next) => res.render("/login")



exports.confirmGet = async ( req, res, next)=> {
  const {confirmationCode} = req.params
  const user = await User.findOneAndUpdate({confirmationCode}, { status: "Active"}, {new: true})
  res.redirect('/confirmation')
}

exports.confirmPageGet=(req,res,next)=>{
  res.render("/confirmation")
}

exports.profileGet = (req, res, next) => {
  const { user } = req
  console.log("login",req.user)
  res.render('/menu', user)
}