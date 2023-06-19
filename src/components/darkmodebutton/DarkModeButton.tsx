import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useThemeContext } from "../../context/ThemeContext";

import { ButtonWrapper, ButtonIcon } from "./DarkModeButton.styled";
function DarkModeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ButtonWrapper onClick={toggleTheme}>
      <ButtonIcon icon={theme === "DARK" ? faSun : faMoon} />
    </ButtonWrapper>
  );
}

export default DarkModeButton;
