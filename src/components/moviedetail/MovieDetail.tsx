import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

import {
  BigCover,
  BigMovie,
  BigOverview,
  BigTitle,
  CloseButton,
  Overlay,
} from "./MovieDetail.styled";
import { IMovieDetail } from "../../types/types";
import makeImagePath from "../../utils/makeImagePath";

interface IMovieDetailProp {
  movieDetailData: IMovieDetail;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  scrollY: number;
}

function MovieDetail({
  movieDetailData,
  setIsClicked,
  scrollY,
}: IMovieDetailProp) {
  return (
    <AnimatePresence>
      <Overlay
        onClick={() => setIsClicked((prev) => !prev)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ zIndex: 10 }}
      />
      <BigMovie
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        layoutId={String(movieDetailData.id)}
        key={movieDetailData.id}
        style={{ top: scrollY + 100, zIndex: 11 }}
      >
        {movieDetailData && (
          <>
            <CloseButton
              icon={faCircleXmark}
              onClick={() => setIsClicked((prev) => !prev)}
            />
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
