import { createSlice, current } from "@reduxjs/toolkit";

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
      const newList = state.favorite.filter(
        (item) => item.id !== action.payload
      );
      state.favorite = newList;
      return state;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
