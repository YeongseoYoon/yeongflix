import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { movieSearchQuery } from "../../apis/api";
import { MovieList } from "../../components";
import { IAPIResponse } from "../../types";
import { EmptyResults } from "../../components";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data } = useQuery<IAPIResponse>(movieSearchQuery(keyword || ""));

  return (
    <>
      {data && data.results && data.results.length > 0 ? (
        <MovieList data={data} />
      ) : (
        <EmptyResults keyword={keyword || ""} />
      )}
    </>
  );
};

export default Search;
