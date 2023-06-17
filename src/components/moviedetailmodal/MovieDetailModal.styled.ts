import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
export const Modal = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;

export const ModalCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 300px;
`;

export const ModalTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 15px;
  font-size: 28px;
  position: relative;
  top: -80px;
`;

export const ModalOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.lighter};
`;

export const CloseButton = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 25px;
`;
