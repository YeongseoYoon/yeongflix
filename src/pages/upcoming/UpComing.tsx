import { useQuery } from "@tanstack/react-query";
import { IMovie } from "../../types";
import { upComingQuery } from "../../apis/api";

import MovieList from "../../components/MovieList";

const UpComing = () => {
  const { data } = useQuery<IMovie[]>(upComingQuery());

  return <MovieList data={data!} />;
};

export default UpComing;
