const express = require("express")

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
require("./db/mongoose")
const Router = require("./routes/user")
app.use(Router)

app.listen(port,()=>{
    console("app is listening on port "+port)
})