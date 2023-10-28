import { QueryClient } from "@tanstack/react-query";
import { movieQuery } from "@/apis";

export const loader = (queryClient: QueryClient, page: number) => async () => {
  const query = movieQuery("popular", page);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchInfiniteQuery(query))
  );
};
