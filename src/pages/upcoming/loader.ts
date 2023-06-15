import { getNowPlayingMovies } from "../../apis/api";
import { QueryClient } from "@tanstack/react-query";

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

export const loader = (queryClient: QueryClient) => async () => {
  const query = nowPlayingQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
