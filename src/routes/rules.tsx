import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { RulesOptions } from "@pages/rules/outlets/options";
import { Positions } from "@src/pages/rules/outlets/positions";
import { AddPosition } from "@src/pages/rules/outlets/positions/add-position";

function RulesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RulesOptions />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="positions/add-position" element={<AddPosition />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { RulesRoutes };
