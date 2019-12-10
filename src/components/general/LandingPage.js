import React from "react"
import {Link} from "react-router-dom"
import "../../stylesheets/landingPage.css"

const LandingPage = (props) => {
    return (
        <div className="landingPage">
            <h1>Welcome to Good Work!</h1>
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/doctors"><button>Find a Doctor</button></Link>
        </div>
    )
}

export default LandingPage