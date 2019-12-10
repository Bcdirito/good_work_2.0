import React from "react"
import {Switch, Route} from "react-router-dom"
import LandingPage from "./components/general/LandingPage"
import Login from "./components/login/Login"
import Home from "./components/general/Home"
// import DoctorContainer from "./components/doctors/DoctorContainer"
import ChatContainer from "./components/messaging/ChatContainer"
import About from "./components/general/About"
import ComingSoon from "./components/general/ComingSoon"
import "./App.css"

const apiTests = require("./utils/test")

const App = (props) => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={(props) => (
                    <LandingPage {...props} />
                )}/>
                <Route exact path="/login" render={(props) => (
                    <Login {...props} />
                )}/>
                <Route exact path="/home" render={(props) => (
                    <Home {...props} />
                )}/>
                <Route exact path="/doctors" render={(props) => (
                    <ComingSoon {...props} />
                )}/>
                <Route exact path="/messaging" render={(props) => (
                    <ChatContainer {...props} />
                )}/>
                <Route exact path="/about" render={(props) => (
                    <About {...props} />
                )}/>
                <Route component={LandingPage}/>
            </Switch>
        </div>
    )
}

export default App