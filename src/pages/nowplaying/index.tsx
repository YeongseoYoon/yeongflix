import { QueryClient } from "@tanstack/react-query";

import { MovieList } from "@/components";

import { useMoviesQuery, moviesQuery } from "@/hooks";

const NowPlaying = () => {
  const { ref, data } = useMoviesQuery("now_playing");
  return <MovieList data={data} refProp={ref} />;
};

export const loader = (queryClient: QueryClient, page: number) => async () => {
  const query = moviesQuery("now_playing", page);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchInfiniteQuery(query))
  );
};

export default NowPlaying;
