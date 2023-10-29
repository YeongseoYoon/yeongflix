import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { IAPIResponse } from "@/types";

import { TYPE_MODE } from "@/constants";
import { movieService } from "@/services";

export const moviesQuery = (type: string, page: number) => ({
  queryKey: [type],
  queryFn: () => movieService.fetchMovies(type, page),
});

const useMoviesQuery = (type: TYPE_MODE) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<IAPIResponse>(
    [type],
    async ({ pageParam = 1 }) => {
      return await movieService.fetchMovies(type, pageParam);
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.page < lastPage.total_pages
          ? lastPage.page + 1
          : undefined;
      },
      getPreviousPageParam: undefined,
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return { ref, data };
};

export default useMoviesQuery;
