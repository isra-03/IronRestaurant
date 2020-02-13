const { model, Schema } = require("mongoose");
const userSchema = new Schema(
  {   
    idMesero:{
      type:Schema.Types.ObjectId,
      ref:'User'},
    idPlatillo:{
      type:Schema.Types.ObjectId,
      ref:'Plate'},
    mesa: Number,
    cantidad: { type: Number, min: 1, max: 5},
    total:Number
  }
  );
  
  
  module.exports = model("Order", userSchema);