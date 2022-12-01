import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "../features/darkThemeSlice";
import addFavoriteReducer from "../features/addFavorite";

export default configureStore({
  reducer: {
    darkTheme: darkThemeReducer,
    favorite: addFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
