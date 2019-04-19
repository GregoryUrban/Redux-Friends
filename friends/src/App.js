import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FriendList from './components/FriendList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { getData } from './actions';
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"


class App extends Component {
  // componentDidMount() {
  //   this.props.getData();
  // }
  render() {
    return (

      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendList}/>
        {/* <PrivateRoute exact path="/protected" component={GasPrices} /> */}
      </div>
    </Router>

    );

    // return (
    //   <div>
    //     <div>
    //   <Route path = "/login" component = {Login} />

    //     </div>
    //   <div>
    //     <PrivateRoute path = "/friendlist" component = {FriendList} />

    //   </div>
    //   </div>
    // );
  }
}

export default App;


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>