import React from "react"
import {Switch, Route} from "react-dom"
import Home from "./components/general/home"
import "./App.css"

const App = (props) => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={(props) => (
                    <Home {...props}/>
                )}/>
            </Switch>
            <h1>Welcome to Good Work</h1>
        </div>
    )
}

export default App