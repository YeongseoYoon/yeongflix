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
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getUpcomingMovies() {
  try {
    const data = await (
      await fetch(`${BASE_URL}/movie/upcoming?api_key=${VITE_API_KEY}`)
    ).json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getMovieDetail(movieId: string) {
  try {
    const data = await (
      await fetch(`${BASE_URL}/movie/${movieId}?api_key=${VITE_API_KEY}`)
    ).json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const homeQuery = () => ({
  queryKey: ["popular"],
  queryFn: async () => {
    const movies = await getPopularMovies();
    if (!movies) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return movies;
  },
});

export const movieDetailQuery = (movieId: string) => ({
  queryKey: ["movieDetail"],
  queryFn: async () => {
    const movie = await getMovieDetail(movieId);
    if (!movie) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return movie;
  },
  enabled: !!movieId,
});

export const upComingQuery = () => ({
  queryKey: ["upcoming"],
  queryFn: async () => {
    const movies = await getUpcomingMovies();
    if (!movies) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return movies;
  },
});

export const nowPlayingQuery = () => ({
  queryKey: ["nowplaying"],
  queryFn: async () => {
    const movies = await getNowPlayingMovies();
    if (!movies) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return movies;
  },
});
