import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 70px;
  margin: 80px 20px 10px 20px;
`;

export const Box = styled(motion.div)<{ bgPhoto: string }>`
  cursor: pointer;
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  height: 400px;
  font-size: 66px;
  position: relative;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Title = styled.h4`
  text-align: center;
  font-size: 18px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
`;

export const boxVariants = {
  hover: {
    y: -80,
    zIndex: 100,
    transition: {
      delay: 0.4,
      duration: 0.5,
      stiffness: 100,
      type: "spring",
    },
  },
};
