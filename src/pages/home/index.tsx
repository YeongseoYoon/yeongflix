import { QueryClient } from "@tanstack/react-query";

import { MovieList } from "@/components";

import { useMoviesQuery, moviesQuery } from "@/hooks";

const Home = () => {
  const { ref, data } = useMoviesQuery("popular");
  return <MovieList data={data} refProp={ref} />;
};

export const loader = (queryClient: QueryClient, page: number) => async () => {
  const query = moviesQuery("popular", page);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchInfiniteQuery(query))
  );
};

export default Home;
