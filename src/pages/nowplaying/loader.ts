import { movieQuery } from "../../apis/api";
import { QueryClient } from "@tanstack/react-query";

export const loader = (queryClient: QueryClient, page: number) => async () => {
  const query = movieQuery("now_playing", page);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchInfiniteQuery(query))
  );
};
