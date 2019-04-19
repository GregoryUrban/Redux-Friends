import React from "react"
import { connect } from "react-redux"
// import Loader from "react-loader-spinner"

import { loginAccess, getData } from "../actions"

class LoginPage extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.loginAccess(this.state.credentials)
    // this.props.login(this.state.credentials).then(() => {
    //   this.props.history.push("/protected")
    // })
  }

  render() {
    if(this.props.isloggedin){
      this.props.history.push("/friendlist")
    }
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.loggingIn ? (
              // <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
              'Keep Typing'
            ) : (
              "Log in"
            )}
          </button>
        </form>
        {this.props.error && <p className="error">{this.props.error}</p>}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     loggingIn: state.loggingIn
//   }
// }

//same as:
// const mapStateToProps = ({ loggingIn, error }) => ({
//   error,
//   loggingIn
// })

// export default connect(
//   mapStateToProps,
//   { login }
// )(Login)

const mapStateToProps = state =>({
  isloggedin:state.loggingIn,
  isfetching:state.isfetching
})

export default connect (
mapStateToProps,
{loginAccess}
)(LoginPage)
