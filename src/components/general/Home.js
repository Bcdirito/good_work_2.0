import React from "react"
import {Link} from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <h1>Welcome, User</h1>
            <Link to="/goals"><button>Goals</button></Link>
            <Link to="/partner"><button>Partner</button></Link>
            <Link to="/messaging">Messenger</Link>
            {/* <Link to="/doctors"><button>Doctors</button></Link> */}
        </div>
    )
}

export default Home