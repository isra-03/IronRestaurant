 
const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  { 
    username: String,
    status:{
      type: String,
      enum: ["Pending Confirmation", "Active"],
      default: "Pending Confirmation"
    },
    confirmationCode:{
      unique: true, 
      type: String,
    },
    email: String,
 
    Rol:{
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
  },
  {
    timestamps: true
  }
);


userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
