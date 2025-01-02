import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "@context/AppContext";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { useMediaQuery } from "@inubekit/hooks";
import { ICardData } from "@pages/home/types";

const useHomeLogic = (data?: ICardData[]) => {
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
    appData,
    data,
    collapse,
    setCollapse,
    selectedClient,
    setSelectedClient,
    collapseMenuRef,
    businessUnitChangeRef,
    isTablet,
    username,
    handleLogoClick,
    businessUnitsToTheStaff,
  };
};

export { useHomeLogic };
