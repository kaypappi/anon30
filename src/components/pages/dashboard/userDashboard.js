import React, { Component } from 'react'

export default class UserDashboard extends Component {
    render() {
        return (
            <div>
                <div class="container">
          <div className="flex rounded-lg bg-gray-400 p-8 mb-4 h-48">
            <div className="img-holder rounded-full h-32 w-32 my-auto bg-yellow-400"></div>
            <div className="content pt-4 ml-4 text-left">
              <div className="name text-lg">Wesley Ukadike</div>
              <div className="link text-md">
                www.jhbehbvjhbhjscbvbchsvbvhfv/efbivfue
              </div>
              <div className="username text-sm">@kaypappi</div>
            </div>
          </div>
          <div className="messages-holder h-screen w-full rounded-lg mt-4 bg-gray-200">
            <div className="message-wrapper mb-2 flex w-full h-24 bg-blue-200 shadow-md">
              <div className="img-holder rounded-full h-12 w-12 my-auto bg-yellow-400"></div>
              <div className="message-body my-auto ml-2">
                <div className="name text-md">Wesley Ukadike</div>
                <div className="link text-sm">
                  www.jhbehbvjhbhjscbvbchsvbvhfv/efbivfue
                </div>
                <div className="username text-sm">@kaypappi</div>
              </div>
              
            </div>
            <div className="message-wrapper mb-2 flex w-full h-24 bg-blue-200 shadow-md">
              <div className="img-holder rounded-full h-12 w-12 my-auto bg-yellow-400"></div>
              <div className="message-body my-auto ml-2">
                <div className="name text-md">Wesley Ukadike</div>
                <div className="link text-sm">
                  www.jhbehbvjhbhjscbvbchsvbvhfv/efbivfue
                </div>
                <div className="username text-sm">@kaypappi</div>
              </div>
              
            </div>
          </div>
        </div>
            </div>
        )
    }
}
