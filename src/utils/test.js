const axios = require("axios")

const apiTest = () => {
    axios.get("/api/test")
    .then((result) => console.log(result.data))
    .catch((error) => console.log(error))
}

const userTest = (userName="test", password="test", email="test") => {
    axios.post("api/users/test", {
        userName: userName,
        password: password,
        email: email
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

module.exports = {
    apiTest: apiTest,
    userTest: userTest
}