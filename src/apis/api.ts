import { BASE_URL, VITE_API_KEY } from "@/constants";

export async function getMovies(type: string, page: number = 1) {
  try {
    const data = await (
      await fetch(
        `${BASE_URL}/movie/${type}?language=en-US&include_adult=false&page=${page}&api_key=${VITE_API_KEY}`
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

export async function getMovieSearch(keyword: string, page: number = 1) {
  try {
    const data = await (
      await fetch(
        `${BASE_URL}/search/movie?query=${keyword}&language=en-US&include_adult=false&page=${page}&api_key=${VITE_API_KEY}`
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
