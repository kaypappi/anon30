import React, { Component } from "react";
import {connect} from 'react-redux'
import UserDashboard from './userDashboard'
import Guestdashboard from './GuestDashboard'
import './dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <Guestdashboard uid={this.props.match.params.uid} sid={this.props.auth.uid}/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard)
