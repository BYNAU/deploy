const express = require("express")
const app = express()
const path = require("path")
const cookieparser = require("cookie-parser")
const logger = require("morgan")
const indexRoutes = require("./routes/index")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieparser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/",indexRoutes)

app.use( (req,res,next) => {
    res.send("404 not found")
})

app.listen(process.env.PORT)