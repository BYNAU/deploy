const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
    nombre: String,
    foto: String,
    descripcion: String
})

const productData = model("productos",ProductSchema)
module.exports = productData