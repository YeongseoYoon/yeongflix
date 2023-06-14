import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";

import { IMovie } from "../../types";
import makeImagePath from "../../utils/makeImagePath";
import { homeQuery } from "./loader";
import { Box, Info, Wrapper, boxVariants, infoVariants } from "./Home.styled";

function Home() {
  const { data: movies } = useQuery<IMovie[]>(homeQuery());
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

export default Home;
