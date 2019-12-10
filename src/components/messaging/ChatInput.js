import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class ChatInput extends Component {
    static PropTypes = {
        onSubmitMessage: PropTypes.func.isRequired
    }

    state = {
        message: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmitMessage(this.state.message)
        this.setState({ message: "" })
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <input type="text" placeholder="What would you like to say?" value={this.state.message} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}
