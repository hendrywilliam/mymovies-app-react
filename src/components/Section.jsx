import React, { Component } from "react";
import { datas } from "../assets/data";

class Card extends Component {
  render() {
    const { title, url } = this.props;
    return (
      <div>
        <div className="w-full h-20 bg-white">
          <a>
            <img src={url} className="h-96 w-full object-cover" />
          </a>
          <p className="text-white uppercase font-bold text-sm text-center">
            {title}
          </p>
        </div>
      </div>
    );
  }
}

export default class Section extends Component {
  render() {
    return (
      <div className="h-screen w-100 overflow-hidden">
        <p className=" bg-black text-white w-screen text-3xl pt-10 pb-2 px-5 text-center">
          NOW PLAYING MOVIES
        </p>

        <div className="grid grid-cols-6 gap-4 w-full h-full bg-black p-5">
          {datas.map((data) => {
            return <Card title={data.title} url={data.url} />;
          })}
        </div>
      </div>
    );
  }
}
