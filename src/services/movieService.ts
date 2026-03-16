import axios from "axios";
import type { TMDBResponse } from "../types/movie";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<TMDBResponse> => {
  const { data } = await instance.get<TMDBResponse>("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
  });
  return data;
};
