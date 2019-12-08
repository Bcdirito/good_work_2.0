import React from "react"
import "../../stylesheets/home.css"

const Home = (props) => {
    return (
        <div className="homePage">
            <h1>Welcome to Good Work!</h1>
            <button>Log In</button>
            <button>Find a Doctor</button>
        </div>
    )
}

export default Home