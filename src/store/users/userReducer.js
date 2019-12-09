const initialState = {
    username: "",
    email: ""
}

const userReducer = (state=intialState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            localStorage.setItem("userName", action.name)
            return {
                username: action.name,
                email: action.email
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