import { AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Box, Title, Wrapper, boxVariants } from "../pages/styled";
import makeImagePath from "../utils/makeImagePath";
import { IMovie } from "../types";
import { IMovieDetail } from "../types/types";

import MovieDetail from "./MovieDetail";
import { movieDetailQuery } from "../apis/api";

interface IMovieListProps {
  data: IMovie[];
}

function MovieList({ data: movies }: IMovieListProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [movieId, setMovieId] = useState("");

  const handleBoxClicked = (id: string) => {
    setIsClicked((prev) => !prev);
    setMovieId(id);
  };

  const { data: movieDetailData, isLoading } = useQuery<IMovieDetail>(
    movieDetailQuery(movieId)
  );

  return (
    <Wrapper>
      <AnimatePresence>
        {movies?.map((movie, index) => (
          <Box
            layoutId={String(movie.id)}
            key={movie.id}
            whileHover="hover"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 100,
              },
              delay: index * 0.1,
            }}
            variants={boxVariants}
            onClick={() => handleBoxClicked(String(movie.id))}
            bgPhoto={makeImagePath(movie.poster_path, "w500")}
          >
            <Title>{movie.title}</Title>
          </Box>
        ))}
      </AnimatePresence>
      {isClicked && !isLoading && movieDetailData ? (
        <MovieDetail
          movieDetailData={movieDetailData}
          setIsClicked={setIsClicked}
        />
      ) : null}
    </Wrapper>
  );
}

export default MovieList;
