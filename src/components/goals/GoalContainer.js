import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoalCard from "./GoalCard"

class GoalContainer extends Component {
    
    state = {
        username: this.props.username,
        goals: this.props.goals,
        featuredGoal: {},
        allGoalsRender: true,
        featuredGoalRender: false
    }

    renderGoalCards = () => {
        return this.state.goals.map(goal => {
            return <GoalCard key={goal.id} data={goal} renderFeature={(goal) => this.renderFeaturedGoal(goal)} />
        })
    }

    renderFeaturedGoal = (goal) => {
        this.setState({
            ...this.state,
            featuredGoal: goal,
            allGoalsRender: false,
            featuredGoalRender: true
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.allGoalsRender === true ? `${this.state.username}'s Goals` : `${this.state.featuredGoal.title}`}</h1>
                <div className="goalContent">
                    {this.state.allGoalsRender === true ? this.renderGoalCards() : null}
                    {/* {this.state.featuredGoalRender === true ? <FeaturedGoal data={this.state.featuredGoal}/> : null} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username ? state.username : "Test User",
        goals: state.goals.goals
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }

export default connect(mapStateToProps, null)(GoalContainer)
