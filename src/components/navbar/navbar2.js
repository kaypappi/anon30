import React, { Component } from 'react'
import {connect} from 'react-redux'

class Navbar2 extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToprops=(state)=>{
    console.log(state)
    return{
        auth:state.auth
    }
}

export default connect(mapStateToprops)(Navbar2)
