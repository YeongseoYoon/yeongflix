import { useQuery } from "@tanstack/react-query";
import { IAPIResponse } from "../../types";
import { upComingQuery } from "../../apis/api";

import MovieList from "../../components/movielist/MovieList";

const UpComing = () => {
  const { data } = useQuery<IAPIResponse>(upComingQuery());

  return <MovieList data={data!} />;
};

export default UpComing;
