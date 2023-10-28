import { AnimatePresence, useScroll } from "framer-motion";
import { InfiniteData, useQuery } from "@tanstack/react-query";
import { SyntheticEvent, useState } from "react";
import { useLocation } from "react-router-dom";

import { movieDetailQuery } from "@/apis";
import { MovieDetailModal } from "@/components";
import { makeImagePath } from "@/utils";
import { IAPIResponse, IMovieDetail } from "@/types";

import {
  Container,
  Card,
  CardImg,
  Title,
  Wrapper,
  containerVariants,
  cardVariants,
  CardWrapper,
  ObserverContent,
} from "./styled";

interface IMovieListProps {
  data: InfiniteData<IAPIResponse> | undefined;
  refProp: (node?: Element | null | undefined) => void;
}

function MovieList({ data, refProp }: IMovieListProps) {
  const { scrollY } = useScroll();
  const [isClicked, setIsClicked] = useState(false);
  const [movieId, setMovieId] = useState("");
  const { pathname } = useLocation();

  const errorImgUrl = new URL("/image/errorImg.png", import.meta.url).href;

  const { data: movieData, isLoading } = useQuery<IMovieDetail>(
    movieDetailQuery(movieId)
  );

  const isModalVisible = isClicked && !isLoading && movieData;

  const handleBoxClicked = (id: string) => {
    setIsClicked((prev) => !prev);
    setMovieId(id);
  };

  const handleModalClose = () => {
    setIsClicked(false);
  };

  const handleErrorImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = errorImgUrl;
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {data && (
          <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data?.pages?.map((movies) =>
              movies?.results?.map((movie) => (
                <CardWrapper key={`${movie.id}-${movie.genre_ids}`}>
                  <Card
                    layoutId={`${String(movie.id)}-${pathname}`}
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
              ))
            )}
          </Container>
        )}
      </AnimatePresence>
      <ObserverContent ref={refProp} />
      {isModalVisible ? (
        <MovieDetailModal
          data={movieData}
          handleModalClose={handleModalClose}
          scrollY={scrollY.get()}
          pathname={pathname}
        />
      ) : null}
    </Wrapper>
  );
}

export default MovieList;
