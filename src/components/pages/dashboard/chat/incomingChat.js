import React, { Component } from 'react'

export default class incomingChat extends Component {
    render() {
        return (
            <div className="flex  mb-2">
                <div
                  className="rounded shadow-md py-2 px-3"
                  style={{ backgroundColor: "#F2F2F2" }}
                >
                  <p className="text-sm text-purple">Tom Cruise</p>
                  <p className="text-sm mt-1">
                    Hi all! I have one question for the movie
                  </p>
                  <p className="text-right text-xs text-grey-dark mt-1">
                    12:45 pm
                  </p>
                </div>
              </div>
        )
    }
}
