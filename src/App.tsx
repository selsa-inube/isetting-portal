import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useEffect } from "react";

import { AppPage } from "@components/layout/AppPage";

import { useAuth0 } from "@auth0/auth0-react";
import { initializeDataDB } from "@mocks/utils/inicializeDataDB";
import { environment } from "@config/environment";
import { PrivilegesRoutes } from "@routes/privileges";
import { RulesRoutes } from "@routes/rules";

import { GlobalStyles } from "./styles/global";
import { ErrorPage } from "./components/layout/ErrorPage";
import "systemjs";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: environment.REDIRECT_URI } });
  return <AppPage />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppPage />}>
        <Route path="/" element={<PrivilegesRoutes />} />
        <Route path="privileges/*" element={<PrivilegesRoutes />} />
        <Route path="rules/*" element={<RulesRoutes />} />
        <Route
          path="credicar/*"
          element={<div id="microfrontend-root" style={{ padding: "16px", background: "red" }} />}
        />
      </Route>
      <Route path="logout" element={<LogOut />} />
      <Route path="/*" errorElement={<ErrorPage />} />
    </>
  )
);

function App() {
  useEffect(() => {
    initializeDataDB();
    const microfrontendRoot = document.getElementById("microfrontend-root");

    if (microfrontendRoot) {
      console.log('loadMicrofrontend: ', microfrontendRoot);
      const loadMicrofrontend = () => {
        if (window.location.pathname.startsWith("/credicar")) {
          try {
            const url =
              process.env.NODE_ENV === "development"
                ? "http://localhost:3001/src/main.tsx"
                : "http://localhost:3001/microfrontend.js";

            System.import(url)
              .then((module) => {
                module.mount({
                  domElement: microfrontendRoot,
                });
              })
              .catch((error) => console.error("Failed to load credicar:", error));
          } catch (error) {
            console.error("SystemJS is not defined or failed to import the module:", error);
          }
        }
      };

      loadMicrofrontend();
      window.addEventListener("popstate", loadMicrofrontend);
      return () => {
        window.removeEventListener("popstate", loadMicrofrontend);
      };
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export { App };
