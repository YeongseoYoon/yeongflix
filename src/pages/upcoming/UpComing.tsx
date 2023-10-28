import MovieList from "../../components/Movie/List";
import useGetMovies from "../../hooks/useGetMovies";

const UpComing = () => {
  const { ref, data } = useGetMovies("upcoming");
  return <MovieList data={data} refProp={ref} />;
};

export default UpComing;
