import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { IBusinessUnit } from "@pages/selectBusinessUnits/outlets/BusinessUnit/types";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { BusinessUnits } from "@pages/selectBusinessUnits/outlets/BusinessUnit";
import { ErrorPage } from "@design/layout/ErrorPage";
import { ErrorNotBusinessUnit } from "@pages/errors/errorNotBusinessUnit";
import { AuthAndData } from "@context/authAndDataProvider";
import { CheckingCredentials } from "@pages/login/checkingCredentials";
import { Loading } from "@pages/login/loading";

interface IBusinessUnits {
  businessUnits: IBusinessUnit[];
}

const SelectBusinessUnitsRoutes = () => {
  const { businessUnitsToTheStaff } = useContext(AuthAndData);
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
        <Route path="loading-app" element={<Loading />} />
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
