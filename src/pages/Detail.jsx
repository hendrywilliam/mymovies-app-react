import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowLeftCircle } from "react-icons/hi2";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/darkThemeSlice";
import { addFavorite } from "../features/addFavorite";
import "swiper/css";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [similarMovies, setSimilarMovies] = useState([]);
  const { darkTheme } = useSelector((state) => state.darkTheme);
  const [favoriteMovie, setFavoriteMovies] = useState([]);
  const dispatch = useDispatch();
  const item = location?.state?.item;

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

  const handleFavorite = (favmovie) => {
    dispatch(addFavorite(favmovie));
    navigate("/favorites");
  };

  useEffect(() => {
    getSimilarMovies();
    setFavoriteMovies(location?.state?.item);
  }, []);

  return (
    <div>
      <Navbar
        home={() => navigate("/")}
        background={`${darkTheme ? `bg-black` : `bg-white`}`}
        color={`${darkTheme ? `text-white` : `text-black`}`}
        changeMode={() => dispatch(toggleTheme())}
        textButtonMode={`${darkTheme ? `🌙` : `☀️`}`}
      />
      <div
        className={`${
          darkTheme ? `bg-black text-white` : `bg-white text-black`
        } p-24 h-auto flex`}
      >
        <div className="h-auto w-screen">
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
            <div className="h-fit flex-row">
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
            <button
              className={`btn mt-5 btn-outline ${
                darkTheme ? `text-white` : `text-black`
              }`}
              onClick={() => handleFavorite(favoriteMovie)}
            >
              Add to favorite
            </button>
            <p className=" pt-5">Similar Movies:</p>
            <div className="h-max w-fit grid grid-rows-2 grid-flow-col gap-4">
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
