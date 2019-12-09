const axios = require("axios")

const apiTest = () => {
    axios.get("/api/test")
    .then((result) => console.log(result.data))
    .catch((error) => console.log(error))
}

module.exports = apiTest