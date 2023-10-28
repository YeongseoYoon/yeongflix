import { QueryClient } from "@tanstack/react-query";
import { movieQuery } from "@/apis";

export const loader = (queryClient: QueryClient, page: number) => async () => {
  const query = movieQuery("upcoming", page);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchInfiniteQuery(query))
  );
};
