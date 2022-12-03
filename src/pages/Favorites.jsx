import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/addFavorite";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { toggleTheme } from "../features/darkThemeSlice";

function Favorites() {
  const { favorite } = useSelector((state) => {
    return state.favorite;
  });

  const { darkTheme } = useSelector((state) => state.darkTheme);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

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
        className={`w-full h-screen px-60 pt-20 ${
          darkTheme ? `bg-black` : `bg-white`
        }`}
      >
        <p className={`text-7xl ${darkTheme ? `text-white` : `text-black`}`}>
          Favorite Movies:
        </p>
        <button
          onClick={() => navigate("/")}
          className={`text-2xl ${darkTheme ? `text-white` : `text-black`}`}
        >
          Back
        </button>
        <div className={`align-center grid grid-cols-6 gap-4`}>
          {favorite?.map((favoritez) => {
            return (
              <div>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${favoritez.image}`}
                    width={150}
                  />
                </div>
                <div>
                  <p className={`${darkTheme ? `text-white` : `text-black`}`}>
                    {favoritez.name}
                  </p>
                  <button
                    onClick={() => dispatch(removeFavorite(favoritez.id))}
                    className={`btn btn-outline ${
                      darkTheme ? `text-white` : `text-black`
                    }`}
                  >
                    Delete Favorite
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
