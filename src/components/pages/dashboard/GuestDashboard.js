import React, { Component } from "react";
import IncomingChat from "./chat/incomingChat";
import OutgoingChat from "./chat/outgoingChat";
import { connect } from "react-redux";
import { compose } from "redux";
import { sendChat } from "../../../store/actions/chatActions";
import {firestoreConnect} from 'react-redux-firebase'

class GuestDashboard extends Component {
  state = {
    message: "",
    sid: ""
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({
      sid: this.props.sid
    });
  }

  handleChange = e => {
    const field = e.target.name;
    this.setState({
      [field]: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.message && this.state.sid) {
      console.log("submit  message");
      this.props.sendChat(this.state, this.props.uid, this.props.sid);
    }
  };

  render() {
    return (
      <div>
        <div className="container guest-container ">
          <div className="flex rounded-lg bg-gray-400 p-8 mb-4 h-48">
            <div className="img-holder rounded-full h-32 w-32 my-auto p-4 bg-yellow-400"></div>
            <div className="content pt-4 ml-4 text-left">
              <div className="name text-lg">Wesley Ukadike</div>
              <div className="link text-md">
                www.jhbehbvjhbhjscbvbchsvbvhfv/efbivfue
              </div>
              <div className="username text-sm">@kaypappi</div>
            </div>
          </div>
          <div className="w-full relative h-full bg-blue-200 ">
            <div className="shadow-inner shadow-lg chats-wrapper">
              <IncomingChat />
              <OutgoingChat />
            </div>
            <div className="flex h-16 send-msg-holder w-full ">
              <div className="send-msg-wrapper">
                <input
                  onChange={this.handleChange}
                  name="message"
                  placeholder="Type message here"
                  class="shadow appearance-none border rounded-lg py-2 px-3 text-grey-darker"
                />
                <div className="w-full h-full">
                  <button
                    onClick={this.handleSubmit}
                    class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs w-full h-full rounded"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendChat: (chat, uid, gid) => dispatch(sendChat(chat, uid, gid))
  };
};

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth,
        firestore: state.firestore
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection:'chats'
        }
    ])
    )(GuestDashboard);
