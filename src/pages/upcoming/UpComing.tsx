import { MovieList } from "@/components";
import { useGetMovies } from "@/hooks";

const UpComing = () => {
  const { ref, data } = useGetMovies("upcoming");
  return <MovieList data={data} refProp={ref} />;
};

export default UpComing;
