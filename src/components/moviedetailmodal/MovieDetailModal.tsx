import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { IMovieDetail } from "../../types/types";
import makeImagePath from "../../utils/makeImagePath";
import formatRating from "../../utils/formatRating";
import convertToDollarFormat from "../../utils/convertToDollarFormat";

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

interface IMovieDetailModalProp {
  data: IMovieDetail;
  handleModalClose: React.Dispatch<React.SetStateAction<boolean>>;
  scrollY: number;
  pathname: string;
}

function MovieDetailModal({
  data,
  handleModalClose,
  scrollY,
  pathname,
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
        onClick={() => handleModalClose((prev) => !prev)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <Modal
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, zIndex: 12 }}
        initial={{ opacity: 0 }}
        layoutId={`${String(data.id)}-${pathname}`}
        key={data.id}
        style={{ top: scrollY + 100 }}
      >
        {data && (
          <>
            <ModalCover
              style={{
                backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                  data.backdrop_path,
                  "w500"
                )})`,
              }}
            >
              <CloseButton
                icon={faCircleXmark}
                onClick={() => handleModalClose((prev) => !prev)}
              />
              <ModalTitle>{data.title}</ModalTitle>
            </ModalCover>

            {!!data.overview && (
              <ModalOverView>{data?.overview} </ModalOverView>
            )}

            {!!data.budget && (
              <ModalInformation>
                <Label>💸Budget: </Label>
                {convertToDollarFormat(data.budget)}
              </ModalInformation>
            )}

            {!!data.revenue && (
              <ModalInformation>
                <Label>🍿Revenue: </Label>
                {convertToDollarFormat(data.revenue)}
              </ModalInformation>
            )}

            {!!data.runtime && (
              <ModalInformation>
                <Label>🕛Runtime: </Label> {data.runtime + " minutes"}
              </ModalInformation>
            )}

            {!!data.vote_average && (
              <ModalInformation>
                <Label>⭐Rating: </Label>
                {formatRating(data.vote_average)}
              </ModalInformation>
            )}

            {!!data.homepage && (
              <ModalInformation>
                <Label>🏠Homepage: </Label>
                <a href={data.homepage}>{data.homepage}</a>
              </ModalInformation>
            )}
          </>
        )}
      </Modal>
    </AnimatePresence>
  );
}

export default MovieDetailModal;
