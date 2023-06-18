import { useQuery } from "@tanstack/react-query";
import { IAPIResponse } from "../../types";
import { nowPlayingQuery } from "../../apis/api";

import MovieList from "../../components/movielist/MovieList";

const NowPlaying = () => {
  const { data } = useQuery<IAPIResponse>(nowPlayingQuery());

  return <MovieList data={data!} />;
};

export default NowPlaying;
