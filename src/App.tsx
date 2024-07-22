import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
import { GlobalStyles } from "./styles/global";
import { PrivilegesRoutes } from "./routes/privileges/privileges";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppPage />}/>
      <Route path="privileges/*" element={<PrivilegesRoutes />} />
      <Route path="/*" errorElement={<ErrorPage />} />
    </>
  )
);

function App() {
  return (
    <><GlobalStyles />
      <RouterProvider router={router} /></>
  );
}

export default App;
