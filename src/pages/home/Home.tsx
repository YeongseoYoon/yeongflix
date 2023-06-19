import { useQuery } from "@tanstack/react-query";
import { IAPIResponse } from "../../types";
import { homeQuery } from "../../apis/api";

import MovieList from "../../components/movielist/MovieList";

const Home = () => {
  const { data } = useQuery<IAPIResponse>(homeQuery());

  return <MovieList data={data!} />;
};

export default Home;
