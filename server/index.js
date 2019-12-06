const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")

const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, "../public")))
app.use(cors())

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
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