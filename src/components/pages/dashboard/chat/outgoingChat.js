import React, { Component } from "react";

export default class outgoingChat extends Component {
  render() {
    return (
      <div class="flex justify-end mb-2">
        <div class="rounded shadow-md py-2 px-3" style={{ backgroundColor: "#E2F7CB" }}>
          <p class="text-sm mt-1">Hi guys.</p>
          <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
        </div>
      </div>
    );
  }
}
