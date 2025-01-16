import { Route, Routes } from "react-router-dom";
import { RulesOptions } from "@pages/rules/outlets/options";
import { Rules } from "@pages/rules";
import { ErrorPage } from "@design/layout/ErrorPage";

const RulesRoutes = () => {
  return (
    <Routes>
      <Route path="/rules" element={<Rules />} />
      <Route path="/" element={<RulesOptions />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export { RulesRoutes };
