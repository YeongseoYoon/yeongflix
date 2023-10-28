import { MovieList } from "@/components";
import { useGetMovies } from "@/hooks";

const Home = () => {
  const { ref, data } = useGetMovies("popular");
  return <MovieList data={data} refProp={ref} />;
};

export default Home;
