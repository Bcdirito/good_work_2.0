const axios = require("axios")

export const loginUser = (user) => ({type: "LOGIN_USER", user})

export const userLogin = (username="test", password="test", email="test") => {
    return (dispatch) => {
        return axios.post("api/users/test", {
            username: username,
            password: password,
            email: email
        })
        .then(({data}) => dispatch(loginUser(data)))
        .catch(console.error)
    }
}