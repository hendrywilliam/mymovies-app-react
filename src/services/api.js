import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/`,
});

export default {
  all_movies: () =>
    instance({
      method: `GET`,
      url: `3/movie/now_playing?api_key=caa10376b121bb9fc3cfe9717900265e&language=en-US&page=1`,
    }),
};
