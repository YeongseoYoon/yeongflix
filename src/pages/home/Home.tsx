import MovieList from "../../components/movielist/MovieList";
import useGetMovies from "../../hooks/useGetMovies";

const Home = () => {
  const { ref, data } = useGetMovies("popular");
  return <MovieList data={data} refProp={ref} />;
};

export default Home;
