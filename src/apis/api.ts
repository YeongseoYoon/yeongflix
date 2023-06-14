import { BASE_URL } from "../constants/constant";

const { VITE_API_KEY } = import.meta.env;

export async function getPopularMovies() {
  try {
    const data = await (
      await fetch(`${BASE_URL}/movie/popular?api_key=${VITE_API_KEY}`)
    ).json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getNowPlayingMovies() {
  try {
    const data = await (
      await fetch(`${BASE_URL}/movie/now_playing?api_key=${VITE_API_KEY}`)
    ).json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUpcomingMovies() {
  try {
    const data = await (
      await fetch(`${BASE_URL}/movie/upcoming?api_key=${VITE_API_KEY}`)
    ).json();
    return data;
  } catch (error) {
    throw error;
  }
}
