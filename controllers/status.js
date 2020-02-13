const Estado = require("../models/platillos")


exports.statusPlatillo = async (res, req) => {
  const estados = await Estado.find()
  res.render("statuspedido", {estados})

}