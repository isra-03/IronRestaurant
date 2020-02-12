const { model, Schema } = require("mongoose");
const userSchema = new Schema(
  {   
    idMesero:String,
    idPlatillo:String,
    mesa: Number,
    cantidad: { type: Number, min: 1, max: 5},
    total:Number
  }
  );
  
  
  module.exports = model("Order", userSchema);