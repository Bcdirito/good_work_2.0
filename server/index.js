const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const port = process.env.PORT || 8000
const axios = require("axios")

app.use(express.static(path.join(__dirname, "../public")))
app.use(cors())
app.use(express.json())
dotenv.config()

const MongoClient = require("mongodb").MongoClient
const uri = process.env.REACT_APP_MONGO_URI
let db;

MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.log(err)
    db = client.db("good-work")
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})



app.get("/api/test", (req, res) => {
    res.send({
        message: "API Route Working"
    })
})

app.get("/api/fetch", (req, res) => {
    res.send({
        message: "Processed Fetch Request"
    })
})

app.post("/api/users/test", (req, res) => {
    console.log(req.body)
    res.send({
        message: "Recieved post data"
    })
})