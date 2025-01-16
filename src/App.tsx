import { RouterProvider } from "react-router-dom";

import { useAppDataHandler } from "@hooks/useAppDataHandler.ts";
import { ErrorPage } from "@design/layout/ErrorPage";
import { AuthAndDataProvider } from "@context/authAndDataProvider";
import { router } from "@routes/navigationSetup";
import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";

const App = () => {
  const { isLoading, hasError, isAuthenticated } = useAppDataHandler();

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
        <AuthAndDataProvider>
          <RouterProvider router={router} />
        </AuthAndDataProvider>
      </ThemeProviderWrapper>
    </>
  );
};

export { App };
