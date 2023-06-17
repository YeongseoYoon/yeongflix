import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  BigCover,
  BigMovie,
  BigOverview,
  BigTitle,
  CloseButton,
  Overlay,
} from "./MovieDetail.styled";
import { IMovieDetail } from "../types/types";
import makeImagePath from "../utils/makeImagePath";

interface IMovieDetailProp {
  movieDetailData: IMovieDetail;
}

function MovieDetail({ movieDetailData }: IMovieDetailProp) {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const onOverlayClick = () => navigate(-1);

  return (
    <AnimatePresence>
      <Overlay
        onClick={onOverlayClick}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <BigMovie
        layoutId={movieDetailData.id + ""}
        key={movieDetailData.id}
        style={{ top: scrollY.get() + 100 }}
      >
        {movieDetailData && (
          <>
            <CloseButton icon={faCircleXmark} onClick={onOverlayClick} />
            <BigCover
              style={{
                backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                  movieDetailData.backdrop_path,
                  "w500"
                )})`,
              }}
            />
            <BigTitle>{movieDetailData.title}</BigTitle>
            <BigOverview>{movieDetailData.overview}</BigOverview>
          </>
        )}
      </BigMovie>
    </AnimatePresence>
  );
}

export default MovieDetail;
