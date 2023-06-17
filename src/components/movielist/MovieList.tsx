import { AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import {
  Container,
  Card,
  CardImg,
  Title,
  Wrapper,
  containerVariants,
  cardVariants,
} from "./MovieList.styled";
import makeImagePath from "../../utils/makeImagePath";
import { IMovie } from "../../types";
import { IMovieDetail } from "../../types/types";

import MovieDetail from "../moviedetail/MovieDetail";
import { movieDetailQuery } from "../../apis/api";

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
        {movies && (
          <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {movies?.map((movie) => (
              <Card
                layoutId={String(movie.id)}
                key={movie.id}
                variants={cardVariants}
                whileHover={{
                  y: -20,
                }}
                onClick={() => handleBoxClicked(String(movie.id))}
              >
                <CardImg
                  alt={movie.title}
                  src={makeImagePath(movie.poster_path, "w500")}
                />
                <Title>{movie.title}</Title>
              </Card>
            ))}
          </Container>
        )}
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
