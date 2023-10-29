import { useQuery } from "@tanstack/react-query";
import { movieService } from "@/services";
import { IMovieDetail } from "@/types";

const movieDetailQuery = (movieId: string) => ({
  queryKey: ["movieDetail", movieId],
  queryFn: () => movieService.fetchMovie(movieId),
  enabled: !!movieId,
});

const useMovieDetailQuery = (movieId: string) => {
  const { data: movieData, isLoading } = useQuery<IMovieDetail>(
    movieDetailQuery(movieId)
  );

  return { movieData, isLoading };
};

export default useMovieDetailQuery;
