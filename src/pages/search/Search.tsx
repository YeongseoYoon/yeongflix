import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { movieSearchQuery } from "../../apis/api";
import { MovieList } from "../../components";
import { IMovie } from "../../types";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data } = useQuery<IMovie[]>(movieSearchQuery(keyword || ""));

  return <MovieList data={data!} />;
};

export default Search;
