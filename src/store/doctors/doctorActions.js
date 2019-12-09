const axios = require("axios")

const API_KEY = `&user_key=${process.env.REACT_APP_DOCTOR_API}`
const DOCTOR_URL = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychologist"
const skipLimit = "&skip=0&limit=100"

export const retrieveDoctors = (doctors) => ({type: "GET_DOCTORS", doctors})

export const getDoctors = (location) => {
    const FETCH_URL = `${DOCTOR_URL}${location}${skipLimit}${API_KEY}`
    console.log(process.env.REACT_APP_DOCTOR_API)
    debugger
    return (dispatch) => {
        return axios.get(FETCH_URL)
        .then(({data}) => {debugger})
        .then(console.error)
    }
}