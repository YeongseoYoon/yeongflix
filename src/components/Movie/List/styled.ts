import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0px auto;
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 100px 20px 10px 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardImg = styled.img`
  border-radius: 12px;
  max-width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

export const Title = styled(motion.h3)`
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const containerVariants = {
  hidden: { opacity: 1, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const cardVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
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

export const ObserverContent = styled.div`
  width: 1px;
  height: 1px;
`;
