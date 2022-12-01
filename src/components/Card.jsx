import React from "react";

function Card({ title, url, onClick }) {
  return (
    <div className="card w-30 bg-base-100 image-full z-0">
      <figure>
        <img src={url} alt="Shoes" />
      </figure>
      <div className="card-body relative">
        <h2 className="card-title uppercase">{title}</h2>
        <div className="absolute bottom-0 right-0 card-actions justify-end">
          <button
            className="inset-x-0 bottom-0 btn btn-primary"
            onClick={onClick}
          >
            WATCH NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
