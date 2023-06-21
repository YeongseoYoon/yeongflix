import MovieList from "../../components/movielist/MovieList";
import useGetMovies from "../../hooks/useGetMovies";

const UpComing = () => {
  const { ref, data } = useGetMovies("upcoming");
  return <MovieList data={data} refProp={ref} />;
};

export default UpComing;
