import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import {
  Overlay,
  Modal,
  ModalCover,
  ModalOverview,
  ModalTitle,
  CloseButton,
} from "./MovieDetailModal.styled";
import { IMovieDetail } from "../../types/types";
import makeImagePath from "../../utils/makeImagePath";

interface IMovieDetailModalProp {
  movieDetailData: IMovieDetail;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  scrollY: number;
}

function MovieDetailModal({
  movieDetailData,
  setIsClicked,
  scrollY,
}: IMovieDetailModalProp) {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);
  return (
    <AnimatePresence>
      <Overlay
        onClick={() => setIsClicked((prev) => !prev)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ zIndex: 10 }}
      />
      <Modal
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
            <ModalCover
              style={{
                backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                  movieDetailData.backdrop_path,
                  "w500"
                )})`,
              }}
            />
            <ModalTitle>{movieDetailData.title}</ModalTitle>
            <ModalOverview>{movieDetailData.overview}</ModalOverview>
            <ModalOverview>{movieDetailData.overview}</ModalOverview>
          </>
        )}
      </Modal>
    </AnimatePresence>
  );
}

export default MovieDetailModal;
