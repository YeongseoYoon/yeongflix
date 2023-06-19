import { BASE_URL } from "../constants/constant";

const { VITE_API_KEY } = import.meta.env;

export async function getMovies(type: string, page: number = 1) {
  try {
    const data = await (
      await fetch(
        `${BASE_URL}/movie/${type}?language=en-US&page=${page}&api_key=${VITE_API_KEY}`
      )
    ).json();
    return data;
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

export async function getMovieSearch(keyword: string) {
  try {
    const data = await (
      await fetch(
        `${BASE_URL}/search/movie?query=${keyword}&include_adult=false&language=en-US&api_key=${VITE_API_KEY}`
      )
    ).json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const movieQuery = (type: string, page: number) => ({
  queryKey: [type],
  queryFn: async () => {
    const movies = await getMovies(type, page);
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
  queryKey: ["movieDetail", movieId],
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

export const movieSearchQuery = (keyword: string) => ({
  queryKey: ["movieSearch", keyword],
  queryFn: async () => {
    const movie = await getMovieSearch(keyword);
    if (!movie) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return movie;
  },
});

export const upComingQuery = (type: string, page: number) => ({
  queryKey: ["upcoming"],
  queryFn: async () => {
    const movies = await getMovies(type, page);
    if (!movies) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return movies;
  },
});

export const nowPlayingQuery = (type: string, page: number) => ({
  queryKey: ["nowplaying"],
  queryFn: async () => {
    const movies = await getMovies(type, page);
    if (!movies) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return movies;
  },
});
