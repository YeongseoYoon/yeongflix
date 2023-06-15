import { getPopularMovies } from "../../apis/api";
import { QueryClient } from "@tanstack/react-query";

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

export const loader = (queryClient: QueryClient) => async () => {
  const query = homeQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
