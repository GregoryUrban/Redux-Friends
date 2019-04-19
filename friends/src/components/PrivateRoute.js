import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { withRouter } from "react-router-dom";
// import { connect } from 'react-router'
 
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />
        } else {
          // redirect into login
          return <Redirect to="login" />
        }
      }} // this is where render lives - whatever gets called here is what is seen
    />
  )
}

export default PrivateRoute
