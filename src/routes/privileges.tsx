import { Route, Routes } from "react-router-dom";

import { PrivilegesOptions } from "@src/pages/privileges/outlets/options";
import { ErrorPage } from "@components/layout/ErrorPage";

function PrivilegesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivilegesOptions />} >
        <Route path="options" element={<PrivilegesOptions />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    
  );
}

export { PrivilegesRoutes };
