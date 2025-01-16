import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { PrivilegesRoutes } from "@routes/privileges";
import { RulesRoutes } from "@routes/rules";
import { SelectBusinessUnitsRoutes } from "@routes/selectBusinessunits";
import { ErrorPage } from "@design/layout/ErrorPage";

import { AppPage } from "@design/layout/corePageStructure";
import { FirstPage } from "@pages/login/landing";
import { LogOut } from "@pages/login/logOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="selectBusinessUnit/*"
        element={<SelectBusinessUnitsRoutes />}
      />
      <Route path="/" element={<FirstPage />} errorElement={<ErrorPage />} />
      <Route path="/" element={<AppPage />}>
        <Route path="privileges/*" element={<PrivilegesRoutes />} />
        <Route path="rules/*" element={<RulesRoutes />} />
      </Route>
      <Route path="logout" element={<LogOut />} />
    </>
  )
);

export { router };
