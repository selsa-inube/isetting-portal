import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";
//import AppContextProvider, { AppContext } from "@context/AppContext";
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
    //<AppContextProvider>// si lo dejo no me muestra la opción de cargos
      <><GlobalStyles />
      <RouterProvider router={router} /></>
    //</AppContextProvider>
  );
}

export default App;
