import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { RulesOptions } from "@src/pages/rules/outlets/options";
import { Rules } from "@src/pages/rules";

function RulesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rules />} />
      <Route path="/options" element={<RulesOptions />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { RulesRoutes };
