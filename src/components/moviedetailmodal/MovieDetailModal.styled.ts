import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 16;
`;
export const Modal = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  padding-bottom: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  z-index: 20;
`;

export const ModalCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 300px;
  position: relative;
`;

export const ModalTitle = styled.h3`
  padding: 15px;
  font-size: 28px;
  position: absolute;
  bottom: 0px;
  color: white;
`;

export const ModalInformation = styled.p`
  padding: 5px 20px 0px 20px;
  word-wrap: break-word;
`;

export const ModalOverView = styled.p`
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const CloseButton = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 25px;
`;
