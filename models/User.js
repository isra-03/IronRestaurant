 
const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  { 
    username: {
      type: String,
      required: true
    },
    //Status: {
    //  enum: ["Activo", "Inactivo"],
    //  default: "Activo"
    //},
    Rol: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    }
  },
  {
    timestamps: true
  }
);


userSchema.plugin(PLM, { usernameField: "username" });

module.exports = model("User", userSchema);
