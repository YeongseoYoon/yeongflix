import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { IAPIResponse } from "../types";
import { getMovieSearch } from "../apis/api";

function useGetSearchedMovies(keyword: string) {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetched } =
    useInfiniteQuery<IAPIResponse>(
      ["movieSearch", keyword],
      async ({ pageParam = 1 }) => {
        return await getMovieSearch(keyword, pageParam);
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
  return { ref, data, isFetched };
}

export default useGetSearchedMovies;
