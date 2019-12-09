import React from "react"
import {Link} from "react-router-dom"
import "../../stylesheets/landingPage.css"

const LandingPage = (props) => {
    return (
        <div className="landingPage">
            <h1>Welcome to Good Work!</h1>
            <Link to={"/login"}><button>Log In</button></Link>
            <button>Find a Doctor</button>
        </div>
    )
}

export default LandingPage