import { RouterProvider } from "react-router-dom";

import { ErrorPage } from "@design/layout/ErrorPage";
import { AuthAndDataProvider } from "@context/authAndDataProvider";
import { router } from "@routes/mainNavigationConfig";
import { UsePortalManager } from "@hooks/staffPortal/usePortalManage";
import { GlobalStyles } from "./styles/global";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { FlagProvider } from "@inubekit/flag";

const App = () => {
  const { isLoading, hasError, isAuthenticated } = UsePortalManager();

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
        <FlagProvider>
          <AuthAndDataProvider>
            <RouterProvider router={router} />
          </AuthAndDataProvider>
        </FlagProvider>
      </ThemeProviderWrapper>
    </>
  );
};

export { App };
