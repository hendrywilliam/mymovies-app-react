import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return (
      <div className="h-full w-100 overflow-hidden">
        <p className=" bg-black text-white w-screen text-3xl pt-10 pb-2 px-5 text-center">
          NOW PLAYING MOVIES
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 w-full h-full bg-black p-5">
          {this.props.children}
        </div>
      </div>
    );
  }
}
