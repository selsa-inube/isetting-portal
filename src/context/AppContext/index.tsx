import { createContext } from "react";
import { IAppContext } from "@context/AppContext/types";

const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  handleClientChange: () => {},
});

export { AppContext };