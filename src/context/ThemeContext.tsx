import { createContext } from "react";
import { useState, useContext } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { THEME_MODE } from "../constants/constant";

interface IThemeContext {
  theme: THEME_MODE;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "LIGHT",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<THEME_MODE>("LIGHT");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
  };

  const themeObject = theme === "LIGHT" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeContext => useContext(ThemeContext);
