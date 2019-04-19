import React, { Component } from 'react'
import Friend from './Friend'
import {connect} from 'react-redux'
import {getData} from '../actions'
class FriendList extends Component {
    componentDidMount(){
        this.props.getData()
    }
  render() {
      
      
    return (
      <div>
       {this.props.friend.map( (friend, id) =>
        <Friend key ={id}friend ={friend}/>)}
      </div>
    )
  }
}
const mapStateToProps = state =>{
    console.log(state.friend)
    return{
        friend: state.friend
    }
}

export default connect (
    mapStateToProps,
    {getData}
)(FriendList)