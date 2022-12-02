import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/addFavorite";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { favorite } = useSelector((state) => {
    return state.favorite;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(favorite);

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="w-full px-60 pt-20">
      <p className="text-4xl">Favorite Movies:</p>
      <button onClick={() => navigate("/")}>Back</button>
      <div className="align-center px-20">
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
                <p>{favoritez.name}</p>
                <button onClick={() => handleRemove(favoritez.id)}>
                  Delete Favorite
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
