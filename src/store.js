import { reactive } from "vue";

export const store = reactive ({
  apiFilmURL: "https://api.themoviedb.org/3/search/movie?api_key=55d597c32fc300bfc2aec61b04e306a2&query=",
  apiTVURL: "https://api.themoviedb.org/3/search/tv?api_key=55d597c32fc300bfc2aec61b04e306a2&query=",
  imageSizeURL: "https://image.tmdb.org/t/p/w342",
  filmList: [],
  TvList: [],
  searchText: "",
  nationFlag:"src/assets/img/flags/",
});