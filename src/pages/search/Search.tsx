import { useLocation } from "react-router";
import { MovieList } from "../../components";
import { EmptyResults } from "../../components";
import useGetSearchedMovies from "../../hooks/useGetSearchedMovies";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { ref, data, isFetched } = useGetSearchedMovies(keyword || "");

  return (
    <>
      {isFetched ? (
        data && data.pages && data.pages.length > 0 ? (
          <MovieList data={data!} refProp={ref} />
        ) : (
          <EmptyResults keyword={keyword || ""} />
        )
      ) : null}
    </>
  );
};

export default Search;
