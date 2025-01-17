import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { PrivilegesRoutes } from "@routes/privileges";
import { RulesRoutes } from "@routes/rules";
import { ErrorPage } from "@design/layout/ErrorPage";
import { CorePageStructure } from "@design/layout/corePageStructure";
import { Landing } from "@pages/login/landing";
import { LogOut } from "@pages/login/logOut";
import { UnitNavigationHandler } from "@routes/unitNavigationHandler";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="selectBusinessUnit/*" element={<UnitNavigationHandler />} />
      <Route path="/" element={<Landing />} errorElement={<ErrorPage />} />
      <Route path="/" element={<CorePageStructure />}>
        <Route path="privileges/*" element={<PrivilegesRoutes />} />
        <Route path="rules/*" element={<RulesRoutes />} />
      </Route>
      <Route path="logout" element={<LogOut />} />
    </>
  )
);

export { router };
