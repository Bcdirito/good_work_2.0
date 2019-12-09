import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {userLogin} from "../../store/users/userActions"
import "../../stylesheets/login.css"

class Login extends Component {
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
        this.props.login(e.target.username.value, e.target.password.value, e.target.email.value)
        .then(() => {
            this.props.history.replace("/home")
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

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password, email) => dispatch(userLogin(username, password, email))
    }
}

export default connect(null, mapDispatchToProps)(Login)
