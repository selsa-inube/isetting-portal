import { createContext } from "react";

import { IAuthDataContainer } from "./types";
import { useValidatingLoginInformation } from "@hooks/context/useValidatingLoginInformation";

const AuthAndData = createContext<IAuthDataContainer>({} as IAuthDataContainer);

interface IAuthAndDataProvider {
  children: React.ReactNode;
}

const AuthAndDataProvider = ({ children }: IAuthAndDataProvider) => {
  const AuthDataContainer = useValidatingLoginInformation();

  return (
    <AuthAndData.Provider value={AuthDataContainer}>
      {children}
    </AuthAndData.Provider>
  );
};

export { AuthAndData, AuthAndDataProvider };
export type { IAuthAndDataProvider };
