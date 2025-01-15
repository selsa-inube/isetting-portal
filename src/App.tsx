import { RouterProvider } from "react-router-dom";
import { AppContextProvider } from "@context/AppContext";
import { useAppLogic } from "@hooks/useAppLogic/useAppInitializationLogic";
import { ErrorPage } from "@components/layout/ErrorPage";
import { router } from "@routes/app";
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
