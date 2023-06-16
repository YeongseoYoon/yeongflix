import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, useScroll } from "framer-motion";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";

import { IMovie } from "../../types";
import makeImagePath from "../../utils/makeImagePath";
import { nowPlayingQuery } from "./loader";
import {
  BigCover,
  BigMovie,
  BigOverview,
  BigTitle,
  Box,
  Overlay,
  Title,
  Wrapper,
  boxVariants,
} from "../styled";

function NowPlaying() {
  const { data: movies } = useQuery<IMovie[]>(nowPlayingQuery());
  const navigate = useNavigate();
  const moviePathMatch: PathMatch<string> | null = useMatch(
    "/now-playing/movie/:movieId"
  );

  const onBoxClicked = (movieId: number) => {
    navigate(`/now-playing/movie/${movieId}`);
  };
  const { scrollY } = useScroll();
  const onOverlayClick = () => navigate("/now-playing");
  const clickedMovie =
    moviePathMatch?.params.movieId &&
    movies?.find((movie) => movie.id === +moviePathMatch.params.movieId!);
  return (
    <>
      <Wrapper>
        <AnimatePresence>
          {movies?.map((movie, index) => (
            <Box
              layoutId={movie.id + ""}
              key={movie.id}
              whileHover="hover"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
                scale: {
                  type: "spring",
                  stiffness: 100,
                },
                delay: index * 0.1,
              }}
              variants={boxVariants}
              onClick={() => onBoxClicked(movie.id)}
              bgPhoto={makeImagePath(movie.poster_path, "w500")}
            >
              <Title>{movie.title}</Title>
            </Box>
          ))}
        </AnimatePresence>
        <AnimatePresence>
          {moviePathMatch ? (
            <>
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <BigMovie
                style={{ top: scrollY.get() + 100 }}
                layoutId={moviePathMatch.params.movieId}
              >
                {clickedMovie && (
                  <>
                    <BigCover
                      style={{
                        backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                          clickedMovie.backdrop_path,
                          "w500"
                        )})`,
                      }}
                    />
                    <BigTitle>{clickedMovie.title}</BigTitle>
                    <BigOverview>{clickedMovie.overview}</BigOverview>
                  </>
                )}
              </BigMovie>
            </>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default NowPlaying;
