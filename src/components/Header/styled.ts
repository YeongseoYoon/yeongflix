import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 10px 60px;
  color: white;
  background-color: ${({ theme }) => theme.background};
  z-index: 12;
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled(motion.h2)`
  margin-right: 50px;
  font-size: 40px;
  font-family: "Darumadrop One", cursive;
  color: ${({ theme }) => theme.text};
`;
export const Search = styled.form`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchButton = styled.button`
  color: gray;
  background: none;
  border: none;
  height: 25px;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;
export const Item = styled.li`
  margin-right: 20px;
  transition: color 0.1s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;

export const Input = styled.input`
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  z-index: -1;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;