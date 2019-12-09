import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../../stylesheets/login.css"

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        email: ""
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("/user/login", {
            method: "POST"
        })
    }

    render() {
        return (
            <div className="loginPage">
                <h1>Login/Sign Up</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="formDiv">
                        <label>Username:</label>
                        <br/>
                        <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} placeholder="username" />
                    </div>
                    <div className="formDiv">
                        <label>Password:</label>
                        <br/>
                        <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} placeholder="password" />
                    </div>
                    <div className="formDiv">
                        <label>Email:</label>
                        <br/>
                        <input type="email" name="email" value={this.state.email} onChange={(e) => {this.handleChange(e)}} placeholder="email" />
                    </div>
                    <input className="formButton" type="submit" name="login" value="Login/Sign Up" />
                </form>
                <Link to={"/"}><button className="homeButton">Home</button></Link>
            </div>
        )
    }
}
