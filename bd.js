const mongoose = require("mongoose")
require('dotenv').config()
const clave = process.env.contra
const uri ="mongodb+srv://byNAUHD:"+clave+"@cluster0.3j0t93t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
console.log(uri)
const basededatos = async () => {
    await mongoose.connect(uri)
}

try {
    basededatos()
    mongoose.connection.on("open", () => {
        console.log("Conexion exitosa")
    })
} catch (error) {
    mongoose.connection.on("error", () => {
        console.log(error)
    })
}

module.exports = basededatos()