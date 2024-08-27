import { Route, Routes } from "react-router-dom";
import { PositionsProvider } from "@context/positionsContext";

import { Privileges } from "@pages/privileges";
import { PrivilegesOptions } from "@pages/privileges/outlets/options";
import { Positions } from "@pages/privileges/outlets/positions";
import { ErrorPage } from "@components/layout/ErrorPage";

function PrivilegesRoutes() {
  return (
    <PositionsProvider>
      <Routes>
        <Route path="/" element={<Privileges />}>
          <Route path="options" element={<PrivilegesOptions />} />
          <Route path="positions" element={<Positions />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </PositionsProvider>
    
  );
}

export { PrivilegesRoutes };
