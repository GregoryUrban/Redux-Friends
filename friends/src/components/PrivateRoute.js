import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { withRouter } from "react-router-dom";
// import { connect } from 'react-router'

 
// // Requirements:
// // 1. Has to have the same API as <Route />
// // 2. Has to render a <Route /> component and pass all the props through to it.
// // 3. It has to check for a token, if user is authed (authenticated), then render the
// // component (with the render prop), otherwise redirect the user to /login

// const PrivateRoute = ({ exact, path, component }) => {
//   // this destructures the object, instad of just 'props'
//   // .... this links to app in the call at the bottom
//   return (
//   <Route
//   exact={exact}
//   path={path}
//   component={component}
//   />
//   )
// }

// this is the xsame but DRY, covers first 2 requirements
const PrivateRoute = ({ component: Component, ...rest }) => {
  // the rest spread captures the rest of the props
  // this destructures the object, instad of just 'props'
  // .... this links to app in the call at the bottom
  return (
    <Route
      {...rest}
      //below is the 3rd requirement
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
