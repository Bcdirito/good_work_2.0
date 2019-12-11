import React, { Component } from 'react'

export default class FeaturedGoal extends Component {
    state = {
        id: this.props.data.id,
        name: this.props.data.title,
        content: this.props.data.content
    }

    render() {
        return (
            <div className="featuredGoal">
                <p>{this.state.content}</p>
                <button className="featuredGoalButton" onClick={() => this.props.reset()}>View All Goals</button>
            </div>
        )
    }
}
