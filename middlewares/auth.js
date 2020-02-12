//exports.isLoggedIn = (req, res, next) => {
//  req.isAuthenticated() ? next() : res.redirect('/')
//}
//
//exports.isActive = (req, res, next) => {
//  req.user.active ? next() : res.send('Confirm your account')
//}
//
//exports.nav = (req, res, next) => {
//  if (req.isAuthenticated()) {
//    req.app.locals.logged = true
//  } else {
//    req.app.locals.logged = false
//  }
//  next()
//}

exports.isActive = (req,res,next) => {
  req.user.status=="Active" ? next() : res.send('Confirma tu correo')
} 

exports.nav = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "ADMIN") {
    next();
  } else {
    res.redirect("/");
  }
}