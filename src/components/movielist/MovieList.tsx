import { AnimatePresence, useScroll } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { SyntheticEvent, useState } from "react";

import {
  Container,
  Card,
  CardImg,
  Title,
  Wrapper,
  containerVariants,
  cardVariants,
  CardWrapper,
} from "./MovieList.styled";
import makeImagePath from "../../utils/makeImagePath";
import { IAPIResponse } from "../../types";
import { IMovieDetail } from "../../types/types";
import MovieDetailModal from "../moviedetailmodal/MovieDetailModal";
import { movieDetailQuery } from "../../apis/api";
import imgUrl from "../../assets/image/errorImg.png";

interface IMovieListProps {
  data: IAPIResponse;
}

function MovieList({ data: movies }: IMovieListProps) {
  const { scrollY } = useScroll();
  const [isClicked, setIsClicked] = useState(false);
  const [movieId, setMovieId] = useState("");

  const { data: movieDetailData, isLoading } = useQuery<IMovieDetail>(
    movieDetailQuery(movieId)
  );
  const handleBoxClicked = (id: string) => {
    setIsClicked((prev) => !prev);
    setMovieId(id);
  };

  const handleErrorImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = imgUrl;
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {movies && (
          <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {movies?.results.map((movie) => (
              <CardWrapper key={`${movie.id}-${movie.genre_ids}`}>
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
                    onError={handleErrorImage}
                  />
                </Card>
                <Title variants={cardVariants}>{movie.title}</Title>
              </CardWrapper>
            ))}
          </Container>
        )}
      </AnimatePresence>

      {isClicked && !isLoading && movieDetailData ? (
        <MovieDetailModal
          movieDetailData={movieDetailData}
          setIsClicked={setIsClicked}
          scrollY={scrollY.get()}
        />
      ) : null}
    </Wrapper>
  );
}

export default MovieList;
