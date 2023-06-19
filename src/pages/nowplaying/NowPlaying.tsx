import MovieList from "../../components/movielist/MovieList";
import useGetMovies from "../../hooks/useGetMovies";

const NowPlaying = () => {
  const { ref, data } = useGetMovies("now_playing");
  return <MovieList data={data!} refProp={ref} />;
};

export default NowPlaying;
