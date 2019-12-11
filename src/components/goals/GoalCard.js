import React from "react"
import "../../stylesheets/goalCard.css"

const GoalCard = (props) => {
    return (
        <div className="goalCard">
            <h3>{props.data.title}</h3>
            <button onClick={() => props.renderFeature(props.data)}>View Goal</button>
        </div>
    )
}

export default GoalCard