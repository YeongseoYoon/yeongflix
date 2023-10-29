import { HttpClient, httpclient } from "@/apis";
import { IAPIResponse, IMovieDetail } from "@/types";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export class MovieService {
  constructor(private httpClient: HttpClient) {}

  public async fetchMovies(
    type: string,
    page: number = 1
  ): Promise<IAPIResponse> {
    return await this.httpClient.get(
      `/movie/${type}?language=en-US&include_adult=false&page=${page}&api_key=${VITE_API_KEY}`
    );
  }

  public async fetchMovie(movieId: string): Promise<IMovieDetail> {
    return await this.httpClient.get(
      `/movie/${movieId}?api_key=${VITE_API_KEY}`
    );
  }

  public async fetchSearchedMovies(
    keyword: string,
    page: number = 1
  ): Promise<IAPIResponse> {
    return await this.httpClient.get(
      `/search/movie?query=${keyword}&language=en-US&include_adult=false&page=${page}&api_key=${VITE_API_KEY}`
    );
  }
}

export const movieService = new MovieService(httpclient);
