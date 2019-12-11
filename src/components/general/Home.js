import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getGoals} from "../../store/goals/goalActions"

const Home = (props) => {
    
    props.getGoals()

    return (
        <div>
            <h1>Welcome, User</h1>
            <Link to="/goals"><button>Goals</button></Link>
            <Link to="/partner"><button>Partner</button></Link>
            <Link to="/messaging"><button>Messenger</button></Link>
            <Link to="/doctors"><button>Doctors</button></Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGoals: () => dispatch(getGoals())
    }
}

export default connect(null, mapDispatchToProps)(Home)