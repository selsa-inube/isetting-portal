import { createContext } from "react";
import { IAppContext } from "./types";

export const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  handleClientChange: () => {},
});
