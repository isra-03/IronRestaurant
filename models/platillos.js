
const { model, Schema } = require("mongoose");
const platilloSchema = new Schema(
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
        "https://f0.pngfuel.com/png/668/559/black-and-white-round-logo-cafe-shanghai-cuisine-restaurant-menu-delicacies-png-clip-art.png"
    },
    cantidad: { type: Number, min: 5, max: 40, required: true }
  }
  );
  
  
  module.exports = model("Plate", userSchema);
