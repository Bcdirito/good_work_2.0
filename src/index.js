import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import {BrowserRouter as Router} from "react-router-dom"
import {createStore, applyMiddleware, combineReducers} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import userReducer from "./store/users/userReducer"
import goalReducer from "./store/goals/goalReducer"

const rootReducer = combineReducers({user: userReducer, goals: goalReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById("root"))