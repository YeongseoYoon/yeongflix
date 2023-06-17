import { useQuery } from "@tanstack/react-query";
import { IMovie } from "../../types";
import { homeQuery } from "../../apis/api";

import MovieList from "../../components/movielist/MovieList";

const Home = () => {
  const { data } = useQuery<IMovie[]>(homeQuery());

  return <MovieList data={data!} />;
};

export default Home;
