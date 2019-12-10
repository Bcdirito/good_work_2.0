const axios = require("axios")

export const storeGoals = (goals) => ({type: "STORE_GOALS", goals})

export const getGoals = () => {
    return (dispatch) => {
        return axios.get("api/goals")
        .then(({data}) => dispatch(storeGoals(data)))
        .catch(console.error)
    }
}