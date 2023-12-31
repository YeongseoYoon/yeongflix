import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { IMovieDetail } from "@/types";
import { convertToDollarFormat, formatRating, makeImagePath } from "@/utils";

import {
  Overlay,
  Modal,
  ModalCover,
  ModalInformation,
  ModalTitle,
  CloseButton,
  ModalOverView,
  Label,
} from "./styled";

interface IMovieDetailModalProp {
  data: IMovieDetail;
  handleModalClose: React.MouseEventHandler<HTMLDivElement | SVGSVGElement>;
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
        onClick={handleModalClose}
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
              <CloseButton icon={faCircleXmark} onClick={handleModalClose} />
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
