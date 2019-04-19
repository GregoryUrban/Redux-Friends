import axios from "axios"

// import axiosWithAuth from "../utils/axiosAuth"

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const loginAccess = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  axios
    .post("http://localhost:5000/login", creds)
    .then(res => {
      // localStorage.setItem("token", res.data.payload)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    })
    // .catch(err => console.log(err))
    .catch(err =>{
      dispatch({
          type: LOGIN_FAILURE,
          payload: err

      })
  })
}
 


export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  // axiosWithAuth()
  axios
    .get("http://localhost:5000/friends", {
      headers: { Authorization: localStorage.getItem("token") } //added
    })
    .then(res => {
      console.log(res)
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data.data
      })
    })
    .catch(err => {
      // console.log(err.response) //added
      // if (err.response.status === 403) {
      //   //added
      //   localStorage.removeItem("token") //added
      // } //added
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
    })
}
