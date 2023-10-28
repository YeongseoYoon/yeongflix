import MovieList from "../../components/Movie/List";
import useGetMovies from "../../hooks/useGetMovies";

const Home = () => {
  const { ref, data } = useGetMovies("popular");
  return <MovieList data={data} refProp={ref} />;
};

export default Home;
