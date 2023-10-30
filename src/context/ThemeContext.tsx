import { ReactNode, createContext } from "react";
import { useState, useContext } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import { THEMES, THEME_MODE } from "@/constants";
import { lightTheme, darkTheme } from "@/styles/theme";
interface IThemeContext {
  theme: THEME_MODE;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: THEMES.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<THEME_MODE>(THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  };

  const themeObject = theme === THEMES.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeContext => useContext(ThemeContext);
