import React from "react"

const NewGoalForm = (props) => {
    return (
        <form onSubmit={(e) => props.handleSubmit(e)}>
            <div>
                <label>Goal Name:</label>
                <input type="text" placeholder="Goal Name" value={props.newGoal.title} onChange={(e) => props.handleChange(e)}/>
            </div>
            <div>
                <label>Description:</label>
            </div>
            <input type="submit" value="Create New Goal"/>
        </form>
    )
}

export default NewGoalForm