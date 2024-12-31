import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@inubekit/hooks";
import { AppContext } from "@context/AppContext";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";

const useHomeLogic = () => {
  const { appData, businessUnitsToTheStaff, setBusinessUnitSigla } =
    useContext(AppContext);

  const [collapse, setCollapse] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery("(max-width: 944px)");
  const username = appData.user.userName.split(" ")[0];

  useEffect(() => {
    if (appData.businessUnit.publicCode) {
      setSelectedClient(appData.businessUnit.abbreviatedName);
    }
  }, [appData]);

  const handleLogoClick = (businessUnit: IBusinessUnitsPortalStaff) => {
    const selectJSON = JSON.stringify(businessUnit);
    setBusinessUnitSigla(selectJSON);
    setSelectedClient(businessUnit.abbreviatedName);
    setCollapse(false);
  };

  return {
    collapse,
    setCollapse,
    selectedClient,
    collapseMenuRef,
    businessUnitChangeRef,
    isTablet,
    username,
    businessUnitsToTheStaff,
    appData,
    handleLogoClick,
  };
};

export { useHomeLogic };
