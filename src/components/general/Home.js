import React from "react"
import {Link} from "react-router-dom"
import "../../stylesheets/home.css"

const Home = (props) => {
    return (
        <div className="homePage">
            <h1>Welcome to Good Work!</h1>
            <Link to={"/login"}><button>Log In</button></Link>
            <button>Find a Doctor</button>
        </div>
    )
}

export default Home