import React, { Component } from 'react'
import {connect} from "react-redux"
// import DoctorCard from "./DoctorCard"
import DoctorForm from "./DoctorForm"
// import DoctorProfile from "./DoctorProfile"
import {getDoctors} from "../../store/doctors/doctorActions"

class DoctorContainer extends Component {
    state = {
        search: false,
        grid: false,
        formObj: {
            city: "",
            state: ""
        }
    }

    handleClick = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: this.state[e.target.name] === false ? true : false 
        })
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            formObj: {
                ...this.state.formObj,
                [e.target.name]: e.target.value
            }
        })
    }

    handleDoctorSearchSubmit = (e) => {
        e.preventDefault()
        const {city, state} = this.state.formObj
        const location = `&location=${state.toLowerCase()}-${city.toLowerCase().split(" ").join("-")}`
        this.props.retrieveDoctors(location)
    }

    render() {
        return (
            <div className="doctorPage">
                <h1>Doctors</h1>
                {this.state.search === true ? <DoctorForm handleSubmit={(e) => this.handleDoctorSearchSubmit(e)} handleChange={(e) => this.handleChange(e)} city={this.state.city} state={this.state.state} /> : null}
                <button onClick={(e) => this.handleClick(e)} className="doctorContainerButton" name="search">Find Doctors</button>
                <button onClick={(e) => this.handleClick(e)} className="doctorContainerButton" name="grid">View My Doctors</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        retrieveDoctors: (location) => dispatch(getDoctors(location))
    }
}

export default connect(null, mapDispatchToProps)(DoctorContainer)