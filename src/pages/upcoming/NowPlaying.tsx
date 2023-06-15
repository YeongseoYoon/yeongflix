import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";

import { IMovie } from "../../types";
import makeImagePath from "../../utils/makeImagePath";
import { nowPlayingQuery } from "./loader";
import { Box, Info, Wrapper, boxVariants, infoVariants } from "../styled";

function NowPlaying() {
  const { data: movies } = useQuery<IMovie[]>(nowPlayingQuery());
  console.log(movies);
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();
  const toggleLeaving = () => setIsLeaving((prev) => !prev);
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  return (
    <>
      <Wrapper>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          {movies?.map((movie) => (
            <Box
              layoutId={movie.id + ""}
              key={movie.id}
              whileHover="hover"
              initial="normal"
              variants={boxVariants}
              onClick={() => onBoxClicked(movie.id)}
              transition={{ type: "tween" }}
              bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
            >
              <Info variants={infoVariants}>
                <h4>{movie.title}</h4>
              </Info>
            </Box>
          ))}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default NowPlaying;