import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowLeftCircle } from "react-icons/hi2";
import axios from "axios";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location?.state?.item;
  const [similarMovies, setSimilarMovies] = useState([]);
  console.log(item);

  const baseUrl = "https://api.themoviedb.org/3/";
  const getUrl =
    baseUrl +
    `movie/${item.id}/similar?api_key=caa10376b121bb9fc3cfe9717900265e&language=en-US&page=1`;

  const getSimilarMovies = () => {
    axios
      .get(getUrl)
      .then((response) => {
        setSimilarMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSimilarMovies();
  }, []);

  console.log(similarMovies);
  return (
    <div className="bg-black w-full h-auto flex">
      <div className="m-40 h-auto">
        <button onClick={() => navigate(-1)}>
          <HiArrowLeftCircle className="text-white mb-2" size={70} />
        </button>
        <p className="text-white text-8xl font-semibold">
          {item.original_title}
        </p>
        <p className="text-white pb-5">
          <span className="text-red-600">Language:</span>{" "}
          {item.original_language} ●{" "}
          <span className="text-red-600">Rating:</span> {item.vote_average} ●{" "}
          <span className="text-red-600">Release Date: </span>{" "}
          {item.release_date}
        </p>
        <div className="flex flex-row">
          <div className="w-1/4 h-fit">
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              width={240}
            />
          </div>
          <div>
            <p className="text-white pl-10">{item.overview}</p>
          </div>
        </div>
        <div>
          <p className="text-white pt-5">Similar Movies:</p>
          <div className="h-full grid grid-rows-2 grid-flow-col gap-4">
            {similarMovies.map((movie) => {
              return (
                <div className="w-full">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    width={150}
                    height={120}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
