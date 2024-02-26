const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
    nombre: String,
    foto: String,
    descripcion: String,
    favoritos:[ ]
})

const productData = model("favorito",ProductSchema)
module.exports = productData