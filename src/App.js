import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/general/Home"
import Login from "./components/login/Login"
import "./App.css"

const apiTests = require("./utils/test")

const App = (props) => {
    console.log(apiTests.userTest())
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={(props) => (
                    <Home {...props} />
                )}/>
                <Route exact path="/login" render={(props) => (
                    <Login {...props} />
                )}/>
                <Route component={Home}/>
            </Switch>
        </div>
    )
}

export default App