import { RouterProvider } from "react-router-dom";

import { ErrorPage } from "@design/layout/ErrorPage";
import { AuthAndDataProvider } from "@context/authAndDataProvider";
import { mainNavigationConfig } from "@routes/mainNavigationConfig";
import { useDataHandler } from "@hooks/useDataHandler";
import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";

const App = () => {
  const { isLoading, hasError, isAuthenticated } = useDataHandler();

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
          <RouterProvider router={mainNavigationConfig} />
        </AuthAndDataProvider>
      </ThemeProviderWrapper>
    </>
  );
};

export { App };
