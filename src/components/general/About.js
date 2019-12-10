import React, { Component } from 'react'

export default class About extends Component {
    state = {
        creatorBio: false,
        mediaCredits: false
    }

    handleClick = (e) => {
        this.setState({
            [e.target.dataset.opposite]: false,
            [e.target.name]: this.state[e.target.name] === false ? true : false 
        })
    }

    renderContent = () => {
        if (this.state.creatorBio === true) return this.renderBio()
        else if (this.state.mediaCredits === true) return this.renderMediaCredits()
        else return null
    }

    renderBio = () => {
        return <p>Bio Text Here</p>
    }

    renderMediaCredits = () => {
        return <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
    }

    render() {
        return (
            <div>
                <h1>About Page</h1>
                <div>{this.renderContent()}</div>
                <button name="creatorBio" data-opposite="mediaCredits" onClick={(e) => this.handleClick(e)}>Creator</button>
                <button name="mediaCredits" data-opposite="creatorBio" onClick={(e) => this.handleClick(e)}>Media Credits</button>
            </div>
        )
    }
}
