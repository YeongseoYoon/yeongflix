import { createContext } from "react";
import { useState, useContext } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

interface IThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeContext => useContext(ThemeContext);
