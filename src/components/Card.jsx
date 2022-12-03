import React from "react";

function Card({ title, url, onClick, vote_average, vote_count }) {
  return (
    <div className="relative card w-30 bg-base-100 image-full z-0 text-white">
      <figure>
        <img src={url} />
      </figure>
      <div className="absolute h-full card-body">
        <h2 className="card-title uppercase text-white text-xs">{title}</h2>
        <p>
          ⭐ {vote_average} ({vote_count})
        </p>
        <div className="bottom-0 right-5 card-actions justify-end">
          <button
            className="btn btn-block text-white text-xs"
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
