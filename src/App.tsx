import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";

import { GlobalStyles } from "./styles/global";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />} />
      <Route path="/*" element={<AppPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
