import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/general/Home"
import "./App.css"

const App = (props) => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={(props) => (
                    <Home {...props}/>
                )}/>
            </Switch>
        </div>
    )
}

export default App