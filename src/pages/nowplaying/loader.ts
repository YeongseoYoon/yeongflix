import { nowPlayingQuery } from "../../apis/api";
import { QueryClient } from "@tanstack/react-query";

export const loader = (queryClient: QueryClient) => async () => {
  const query = nowPlayingQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
