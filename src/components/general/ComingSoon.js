import React from "react"
import {Link} from "react-router-dom"
import comingSoonImage from "../../media/comingSoon.jpg"
import "../../stylesheets/comingSoon.css"

const ComingSoon = (props) => {
    return (
        <div className="comingSoonPage">
            <h1>Coming Soon!</h1>
            <img src={comingSoonImage} alt="Coming Soon" />
            <p>We at Good Work really try our hardest to get our services to you as quickly as possible. However, we also only wish to deliver the highest quality services available. At this time, this particular service isn't quite there yet. We apologize for any inconvenience</p>
            <Link to="/home"><button>Home</button></Link>
        </div>
    )
}

export default ComingSoon