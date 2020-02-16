 
const { model, Schema } = require("mongoose");
const userSchema = new Schema(
  { 
    nombre:{
      type: String
    },
    descripcion: {
      type: String,
      //required: true
    },
    costo: {
      type: Number
    }, 
    photo: {
      type: String,
      default:
        "/images/defaultPlatillo.jpg"
    },
    cantidad: { type: Number, min: 5, max: 40, required: true }
  }
  );
  
  
  module.exports = model("Plate", userSchema);