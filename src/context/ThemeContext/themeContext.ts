import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

type ThemeName = keyof typeof tokensWithReference;

interface ThemeContextType {
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
}

const ThemeContext = createContext<ThemeContextType>({
  themeName: "sistemasenlinea",
  setThemeName: () => {},
});

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, useTheme };
export type { ThemeName, ThemeContextType };
