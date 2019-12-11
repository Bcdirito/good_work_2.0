const initialState = {
    goals: [],
    featuredGoal: {}
}

const goalReducer = (state=initialState, action) => {
    switch(action.type){
        case "STORE_GOALS":
            localStorage.setItem("goals", JSON.stringify(action.goals))
            return {
                ...state,
                goals: [...action.goals]
            }

        case "STORE_FEATURED_GOAL":
            localStorage.setItem("featuredGoal", JSON.stringify(action.goal))
            return {
                ...state,
                featuredGoal: action.goal
            }

        case "CLEAR_FEATURED_GOAL":
            localStorage.removeItem("featuredGoal")
            return {
                ...state,
                featuredGoal: {}
            }

        case "MAINTAIN_GOAL_STATE":
            let goals = action && action.goals ? JSON.parse(action.goals) : initialState.goals
            let featuredGoal = action && action.featuredGoal ? JSON.parse(action.featuredGoal) : initialState.featuredGoal
            return {
                goals,
                featuredGoal
            }
            
        
        default:
            return state
    }
}

export default goalReducer