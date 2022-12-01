import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newMovie = {
        id: new Date(),
        name: action.payload.original_title,
        image: action.payload.poster_path,
      };
      state.favorite.push(newMovie);
    },

    removeFavorite: (state, action) => {
      console.log(action.payload.id);
      if (state.favorite.length <= 1) {
        return [];
      } else {
        return state.favorite.filter(
          (item) => item.id != state.favorite[action.payload]
        );
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
