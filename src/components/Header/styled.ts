import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)<{ isMenuOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  color: white;
  background-color: ${({ theme }) => theme.background};
  z-index: 12;
  @media (max-width: 768px) {
    padding: ${(props) => (props.isMenuOpen ? "10px 0px" : "")};
    margin: ${(props) => (props.isMenuOpen ? "40px 0px" : "")};
  }
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px;
`;
export const Logo = styled(motion.h2)`
  margin-right: 50px;
  margin-left: 20px;
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

export const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin: 0px 10px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    z-index: 1200;
  }
`;
export const Items = styled.ul<{ isMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    position: absolute;
    top: 0px;
    left: 0px;
    flex-direction: column;
    display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    color: ${(props) => (props.isMenuOpen ? "black" : "white")};
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    gap: 20px;
    z-index: 1000;
  }
`;
export const Item = styled.li`
  transition: color 0.1s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
  @media (max-width: 768px) {
    margin: 10px 0px;
    padding: 5px 0px;
    width: 100%;
    text-align: center;
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
