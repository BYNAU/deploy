const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    nombre: String,
    contra: String,
    correo: String
})

const UserData = model("usuarios",UserSchema)
module.exports = UserData