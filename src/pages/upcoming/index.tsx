import { QueryClient } from "@tanstack/react-query";

import { MovieList } from "@/components";

import { moviesQuery, useMoviesQuery } from "@/hooks";

const UpComing = () => {
  const { ref, data } = useMoviesQuery("upcoming");
  return <MovieList data={data} refProp={ref} />;
};

export const loader = (queryClient: QueryClient, page: number) => async () => {
  const query = moviesQuery("upcoming", page);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchInfiniteQuery(query))
  );
};

export default UpComing;
