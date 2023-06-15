import { getUpcomingMovies } from "../../apis/api";
import { QueryClient } from "@tanstack/react-query";

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

export const loader = (queryClient: QueryClient) => async () => {
  const query = upComingQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
