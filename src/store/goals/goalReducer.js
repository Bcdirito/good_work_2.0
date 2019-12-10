const initialState = {
    goals: [],
    featuredGoal: {}
}

const goalReducer = (state=initialState, action) => {
    switch(action.type){
        case "STORE_GOALS":
            localStorage.setItem("goals", action.goals)
            return {
                ...state,
                goals: [...action.goals]
            }
        
        default:
            return state
    }
}

export default goalReducer