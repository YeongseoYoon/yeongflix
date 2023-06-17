import { useQuery } from "@tanstack/react-query";
import { IMovie } from "../../types";
import { nowPlayingQuery } from "../../apis/api";

import MovieList from "../../components/movielist/MovieList";

const NowPlaying = () => {
  const { data } = useQuery<IMovie[]>(nowPlayingQuery());

  return <MovieList data={data!} />;
};

export default NowPlaying;
