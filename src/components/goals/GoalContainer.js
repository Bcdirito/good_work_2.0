import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoalCard from "./GoalCard"
import FeaturedGoal from "./FeaturedGoal"
import "../../stylesheets/goalContainer.css"

class GoalContainer extends Component {
    
    state = {
        username: this.props.username,
        goals: this.props.goals.goals,
        featuredGoal: {},
        allGoalsRender: true,
        featuredGoalRender: false
    }

    componentDidMount = () => {
        this.props.maintainGoals(localStorage.goals, localStorage.featuredGoal)
    }

    componentDidUpdate = (prevState, prevProps) => {
        let {goals, featuredGoal} = this.props.goals

        if (this.state.goals.length !== goals.length) {
            this.setState({
                ...this.state,
                goals: goals
            })
        }
        
        if (featuredGoal.id && !this.state.featuredGoal.id) this.renderFeaturedGoal(featuredGoal)
    }

    renderGoalCards = () => {
        return this.state.goals.map(goal => {
            return <GoalCard key={goal.id} data={goal} renderFeature={(goal) => this.renderFeaturedGoal(goal)} />
        })
    }

    renderFeaturedGoal = (goal) => {
        this.props.storeFeatured(goal)
        
        this.setState({
            ...this.state,
            featuredGoal: goal,
            allGoalsRender: false,
            featuredGoalRender: true
        })
    }

    renderAllGoals = () => {
        this.props.removeFeatured()

        this.setState({
            ...this.state,
            featuredGoal: {},
            allGoalsRender: true,
            featuredGoalRender: false
        })
    }
    
    render() {
        return (
            <div className="goalContainer">
                <h1>{this.state.allGoalsRender === true ? `${this.state.username}'s Goals` : `${this.state.featuredGoal.title}`}</h1>
                <div className="goalContent">
                    {this.state.allGoalsRender === true ? this.renderGoalCards() : null}
                    {this.state.featuredGoalRender === true ? <FeaturedGoal data={this.state.featuredGoal} reset={() => this.renderAllGoals()}/> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username ? state.username : "Test User",
        goals: state.goals
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeFeatured: (goal) => dispatch({type: "STORE_FEATURED_GOAL", goal}),
        removeFeatured: () => dispatch({type: "CLEAR_FEATURED_GOAL"}),
        maintainGoals: (goals, featuredGoal) => dispatch({type: "MAINTAIN_GOAL_STATE", goals, featuredGoal})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer)
