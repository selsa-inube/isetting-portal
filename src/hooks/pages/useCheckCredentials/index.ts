import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { AuthAndData } from "@context/authAndDataProvider";

const UseCheckCredentials = (businessUnits: IBusinessUnitsPortalStaff[]) => {
  const navigate = useNavigate();
  const { appData, setBusinessUnitSigla } = useContext(AuthAndData);

  const selectedBusinessUnit = useCallback(() => {
    const selected = businessUnits[0];
    setBusinessUnitSigla(JSON.stringify(selected));
    navigate("/selectBusinessUnit/loading-app");
  }, [businessUnits, navigate, setBusinessUnitSigla]);

  const checkCredentials = useCallback(() => {
    try {
      if (!appData) {
        return navigate("/selectBusinessUnit/error/not-available");
      }

      if (!businessUnits || businessUnits.length === 0) {
        return navigate("/selectBusinessUnit/error/not-related-businessUnits");
      }

      if (businessUnits.length === 1) {
        selectedBusinessUnit();
      } else {
        navigate(`/selectBusinessUnit/businessUnits`);
      }
    } catch (error) {
      console.info(error);
      navigate("/selectBusinessUnit/error/not-available");
    }
  }, [appData, businessUnits, selectedBusinessUnit, navigate]);

  useEffect(() => {
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return checkCredentials;
};

export { UseCheckCredentials };
