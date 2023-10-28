import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useThemeContext } from "@/context";

import { ButtonWrapper, ButtonIcon } from "./Button.styled";

function DarkModeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ButtonWrapper onClick={toggleTheme}>
      <ButtonIcon icon={theme === "DARK" ? faSun : faMoon} />
    </ButtonWrapper>
  );
}

export default DarkModeButton;
