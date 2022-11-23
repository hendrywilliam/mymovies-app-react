import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { title, url } = this.props;
    return (
      <div className="card w-50 bg-base-100 image-full z-0">
        <figure>
          <img src={url} alt="Shoes" />
        </figure>
        <div className="card-body relative">
          <h2 className="card-title uppercase">{title}</h2>
          <div className="absolute bottom-0 right-0 card-actions justify-end">
            <button className="inset-x-0 bottom-0 btn btn-primary">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}
