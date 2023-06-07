import { reactive } from "vue";

export const store = reactive ({
  apiURL: "https://api.themoviedb.org/3/search/movie?api_key=55d597c32fc300bfc2aec61b04e306a2&query=",
  filmList: [],
  searchText: "",
});