import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowLeftCircle } from "react-icons/hi2";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";
import Footer from "../components/Footer";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location?.state?.item;
  const [similarMovies, setSimilarMovies] = useState([]);
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

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

  return (
    <div>
      <Navbar
        home={() => navigate("/")}
        background={`${darkTheme ? `bg-black` : `bg-white`}`}
        color={`${darkTheme ? `text-white` : `text-black`}`}
        changeMode={toggleTheme}
        textButtonMode={`${darkTheme ? `🌙` : `☀️`}`}
      />
      <div
        className={`${
          darkTheme ? `bg-black text-white` : `bg-white text-black`
        } w-full h-auto flex`}
      >
        <div className="m-40 h-auto">
          <button onClick={() => navigate(-1)}>
            <HiArrowLeftCircle className=" mb-2" size={70} />
          </button>
          <p className=" text-8xl font-semibold">{item.original_title}</p>
          <p className=" pb-5">
            <span>Language:</span> {item.original_language} ●{" "}
            <span>Rating:</span> {item.vote_average} ●{" "}
            <span>Release Date: </span> {item.release_date}
          </p>
          <div className="flex flex-row">
            <div className="w-1/4 h-fit">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                width={240}
              />
            </div>
            <div>
              <p className=" pl-10">{item.overview}</p>
            </div>
          </div>
          <div>
            <p className=" pt-5">Similar Movies:</p>
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
      <Footer
        background={`${darkTheme ? `bg-black` : `bg-white`}`}
        textColor={`${darkTheme ? `text-white` : `text-black`}`}
      />
    </div>
  );
}

export default Detail;
