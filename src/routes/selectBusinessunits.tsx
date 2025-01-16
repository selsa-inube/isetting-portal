import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ErrorPage } from "@components/layout/ErrorPage";
import { AppContext } from "@context/AppContext";
import { IBusinessUnit } from "@pages/selectBusinessUnits/outlets/BusinessUnit/types";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { BusinessUnits } from "@pages/selectBusinessUnits/outlets/BusinessUnit";
import { ErrorNotBusinessUnit } from "@pages/selectBusinessUnits/errors/ErrorNotBusinessUnit";
import { CheckingCredentials } from "@pages/login/CheckingCredentials";
import { LoadingApp } from "@pages/login/loading";

interface IBusinessUnits {
  businessUnits: IBusinessUnit[];
}

const SelectBusinessUnitsRoutes = () => {
  const { businessUnitsToTheStaff } = useContext(AppContext);
  const businessUnits = businessUnitsToTheStaff;

  return (
    <Routes>
      <Route path="/" element={<SelectBusinessUnits />}>
        <Route
          path="/checking-credentials"
          element={<CheckingCredentials businessUnits={businessUnits} />}
        />
        <Route
          path="/businessUnits"
          element={<BusinessUnits businessUnits={businessUnits} />}
        />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route path="error/not-available" element={<ErrorPage />} />
      <Route
        path="error/not-related-businessUnits"
        element={<ErrorNotBusinessUnit />}
      />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export { SelectBusinessUnitsRoutes };

export type { IBusinessUnits };
