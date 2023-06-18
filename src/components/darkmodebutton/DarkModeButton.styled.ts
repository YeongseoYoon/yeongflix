import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonWrapper = styled.div`
  z-index: 200;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  background-color: aliceblue;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
`;
