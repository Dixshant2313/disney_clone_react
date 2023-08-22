import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

export const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
);

export const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
