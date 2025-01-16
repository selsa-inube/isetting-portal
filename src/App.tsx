import { RouterProvider } from "react-router-dom";

import { useAppLogic } from "@hooks/useAppDataHandler.ts";
import { ErrorPage } from "@design/layout/ErrorPage";
import { AppContextProvider } from "@context/authAndDataProvider";
import { router } from "@routes/navigationSetup";
import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";

const App = () => {
  const { isLoading, hasError, isAuthenticated } = useAppLogic();

  if (isLoading) {
    return null;
  }

  if (hasError && !isAuthenticated) {
    return <ErrorPage />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProviderWrapper>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </ThemeProviderWrapper>
    </>
  );
};

export { App };
