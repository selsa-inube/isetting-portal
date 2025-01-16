import React, { createContext } from "react";
import { useAppContextLogic } from "@hooks/useAppLogic/useAppContextLogic";
import { IAppContext } from "./types";

const AppContext = createContext<IAppContext>({} as IAppContext);

interface IAppProvider {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: IAppProvider) => {
  const appContext = useAppContextLogic();

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
export type { IAppProvider };
