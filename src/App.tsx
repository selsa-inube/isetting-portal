import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import { GlobalStyles } from "./styles/global";
import { PrivilegesRoutes } from "./routes/privileges";
import { ThemeProvider } from "styled-components";
import { theme } from "@config/theme";
import { useAuth0 } from "@auth0/auth0-react";

import { environment } from "./config/environment";
import { RulesRoutes } from "./routes/rules";

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
      </Route>
      <Route path="logout" element={<LogOut />} />
      <Route errorElement={<ErrorPage />} />
    </>
  )
);

function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={theme}> 
      <RouterProvider router={router} /> 
    </ThemeProvider>
    </>
  );
}

export default App;