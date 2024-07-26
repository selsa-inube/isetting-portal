import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import { GlobalStyles } from "./styles/global";
import { PrivilegesRoutes } from "./routes/privileges";
import { ThemeProvider } from "styled-components";
import { theme } from "@src/config/theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppPage />}/>
      <Route index element={<Navigate to="/privileges" replace />} />
      <Route path="privileges/*" element={<PrivilegesRoutes />} />
      <Route path="/*" errorElement={<ErrorPage />} />
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
