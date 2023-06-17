import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import {
  Overlay,
  Modal,
  ModalCover,
  ModalInformation,
  ModalTitle,
  CloseButton,
  ModalOverView,
  Label,
} from "./MovieDetailModal.styled";
import { IMovieDetail } from "../../types/types";
import makeImagePath from "../../utils/makeImagePath";
import formatRating from "../../utils/formatRating";
import convertToDollarFormat from "../../utils/convertToDollarFormat";

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
  console.log(movieDetailData);
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
        animate={{ opacity: 1, zIndex: 100 }}
        exit={{ opacity: 0, zIndex: 100 }}
        initial={{ opacity: 0, zIndex: 100 }}
        layoutId={String(movieDetailData.id)}
        key={movieDetailData.id}
        style={{ top: scrollY + 100, zIndex: 100 }}
      >
        {movieDetailData && (
          <>
            <ModalCover
              style={{
                backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                  movieDetailData.backdrop_path,
                  "w500"
                )})`,
              }}
            >
              <CloseButton
                icon={faCircleXmark}
                onClick={() => setIsClicked((prev) => !prev)}
              />
              <ModalTitle>{movieDetailData.title}</ModalTitle>
            </ModalCover>

            {!!movieDetailData.overview && (
              <ModalOverView>{movieDetailData?.overview} </ModalOverView>
            )}

            {!!movieDetailData.budget && (
              <ModalInformation>
                <Label>Budget: </Label>
                {convertToDollarFormat(movieDetailData.budget)}
              </ModalInformation>
            )}

            {!!movieDetailData.revenue && (
              <ModalInformation>
                <Label>Revenue: </Label>
                {convertToDollarFormat(movieDetailData.revenue)}
              </ModalInformation>
            )}

            {!!movieDetailData.runtime && (
              <ModalInformation>
                <Label>Runtime: </Label> {movieDetailData.runtime + " minutes"}
              </ModalInformation>
            )}

            {!!movieDetailData.vote_average && (
              <ModalInformation>
                <Label>Rating: </Label>
                {formatRating(movieDetailData.vote_average)}
              </ModalInformation>
            )}

            {!!movieDetailData.homepage && (
              <ModalInformation>
                <Label>Homepage: </Label>
                <a href={movieDetailData.homepage}>
                  {movieDetailData.homepage}
                </a>
              </ModalInformation>
            )}
          </>
        )}
      </Modal>
    </AnimatePresence>
  );
}

export default MovieDetailModal;
