import React from "react"
import states from "../../utils/states"

const DoctorForm = (props) => {
    const renderStates = () => {
        return states.map(state => {
            return <option key={state.key} value={state.value}>{state.text}</option>
        })
    }

    return (
        <form className="doctorForm" onSubmit={(e) => props.handleSubmit(e)}>
            <div>
                <label>City</label>
                <input type="text" name="city" value={props.city} placeholder="city" onChange={(e) => props.handleChange(e)}/>
            </div>
            <div>
                <label>State</label>
                <select id="state" name="state" className="dropdown" onChange={(e) => props.handleChange(e)}>
                    {renderStates()}
                </select>
            </div>
            <input type="submit" value="Search Doctors" />
        </form>
    )
}

export default DoctorForm