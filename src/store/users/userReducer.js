const initialState = {
    username: "",
    email: ""
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            let {username, email} = action.user
            localStorage.setItem("username", username)
            localStorage.setItem("email", email)
            return {
                username: username,
                email: email
            }

        case "MAINTAIN_USER":
            return {
                username: action.name,
                email: action.email
            }

        case "LOGOUT_USER":
            localStorage.clear()
            return {
                username: "",
                email: ""
            }

        default:
            return state
    }
}

export default userReducer