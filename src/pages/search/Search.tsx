import { useLocation } from "react-router";
import { EmptyResult, MovieList } from "@/components";
import { useGetSearchedMovies } from "@/hooks";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword") || "";

  const { ref, data, isFetched } = useGetSearchedMovies(keyword);

  return (
    <>
      {isFetched ? (
        data && data?.pages[0]?.results?.length > 0 ? (
          <MovieList data={data} refProp={ref} />
        ) : (
          <EmptyResult keyword={keyword} />
        )
      ) : null}
    </>
  );
};

export default Search;
