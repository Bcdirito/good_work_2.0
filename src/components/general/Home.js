import React from "react"

const Home = (props) => {

    fetch("/api/test")
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))

    return (
        <div className="homePage">
            <h1>Welcome to Good Work!</h1>
            <button>Log In</button>
            <button>Sign Up</button>
            <button>Find a Doctor</button>
        </div>
    )
}

export default Home