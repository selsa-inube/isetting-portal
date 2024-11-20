import { createContext } from "react";
import { IAppContext } from "../AppContext/types";

export const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  handleClientChange: () => {},
});
