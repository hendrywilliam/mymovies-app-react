import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/darkThemeSlice";

const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline =
  baseUrl +
  `movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;

function Home() {
  const [carousel, setCarousel] = useState([
    {
      title: `John Wick 4 (2023)`,
      url: `https://www.dropbox.com/s/h2e2kfyd7f0hs7q/johnwick_trailer_2023.mp4?raw=1`,
      description: `With the price on his head ever increasing, legendary hit man
                John Wick takes his fight against the High Table global as he
                seeks out the most powerful players in the underworld, from New
                York to Paris to Japan to Berlin`,
      id: `slide1`,
      left: `#slide4`,
      right: `#slide2`,
    },
    {
      title: `Avatar: The Way of Water (2022)`,
      url: `https://www.dropbox.com/s/4gfqaehalik4it4/avatar_2023.mp4?raw=1`,
      description: `Jake Sully and Ney'tiri have formed a family and are doing
                everything to stay together. However, they must leave their home
                and explore the regions of Pandora. When an ancient threat
                resurfaces, Jake must fight a difficult war against the humans.`,
      id: `slide2`,
      left: `#slide1`,
      right: `#slide3`,
    },
    {
      title: `Spider-Man: Across the Spider-Verse (2023)`,
      url: `https://www.dropbox.com/s/ondo5p6emwyvln0/spiderman_2023.mp4?raw=1`,
      description: `Miles Morales embarks on an epic adventure that will transport
                Brooklyn's full-time, friendly neighbourhood Spider-Man across
                the Multiverse to join forces with Gwen Stacy and a new team.`,
      id: `slide3`,
      left: `#slide2`,
      right: `#slide4`,
    },
    {
      title: `Mission: Impossible – Dead Reckoning`,
      url: `https://www.dropbox.com/s/y4pudkhwolgxsyk/mi_2023.mp4?raw=1`,
      description: `Mission: Impossible – Dead Reckoning Part One is an upcoming
                American action spy film written, produced, and directed by
                Christopher McQuarrie. It is the sequel to Mission: Impossible –
                Fallout and is the seventh installment in the Mission:
                Impossible film series`,
      id: `slide4`,
      left: `#slide3`,
      right: `#slide1`,
    },
  ]);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { darkTheme } = useSelector((state) => state.darkTheme);
  const dispatch = useDispatch();

  const getNowPlaying = () => {
    axios
      .get(urlHeadline)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (item) => {
    navigate("/detail", {
      state: {
        item: item,
      },
    });
  };

  useEffect(() => {
    getNowPlaying();
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
      <div className="carousel w-full h-96 lg:h-[40rem] overflow-hidden">
        {carousel.map((slide) => {
          return (
            <div id={slide.id} className="carousel-item relative h-100 w-full">
              <video
                autoPlay
                muted
                loop
                className="absolute z-0 object-cover w-full h-full"
              >
                <source src={slide.url} />
              </video>
              <div className="absolute z-1 w-full h-full top-20 left-0 xl:top-40 xl:left-64 flex flex-col justify-center align-middle">
                <p className="text-white bg-red-600 text-xs lg:text-base w-fit p-3 font-extrabold italic ml-3">
                  UPCOMING MOVIE
                </p>
                <p className="text-white p-3 font-bold text-xs lg:text-2xl">
                  {slide.title}
                </p>
                <p className="text-white w-3/4 text-xs lg:text-base lg:w-1/4 p-1 pl-3 lg:p-3 text-justify">
                  {slide.description}
                </p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={slide.left} className="btn btn-circle">
                  ❮
                </a>
                <a href={slide.right} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Container
        background={`${darkTheme ? `bg-black` : `bg-white`}`}
        text={`${darkTheme ? `text-white` : `text-black`}`}
      >
        {movies.map((result) => {
          return (
            <Card
              title={result.original_title}
              url={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
              onClick={() => handleDetail(result)}
              vote_average={result.vote_average}
              vote_count={result.vote_count}
            />
          );
        })}
      </Container>
      <Footer
        background={`${darkTheme ? `bg-black` : `bg-white`}`}
        textColor={`${darkTheme ? `text-white` : `text-black`}`}
      />
    </div>
  );
}

export default Home;
