import {
  faMoon as darkModeIcon,
  faSun as lightModeIcon,
} from "@fortawesome/free-solid-svg-icons";

import { useThemeContext } from "@/context";

import { ButtonWrapper, ButtonIcon } from "./Button.styled";

function DarkModeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ButtonWrapper onClick={toggleTheme}>
      <ButtonIcon icon={theme === "DARK" ? lightModeIcon : darkModeIcon} />
    </ButtonWrapper>
  );
}

export default DarkModeButton;
