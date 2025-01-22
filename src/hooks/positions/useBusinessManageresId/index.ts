import { useState, useEffect } from "react";
import { businessUnitsPortalStaffId } from "@services/staffPortal/getBusinessManagersId";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

const UseBusinessManagersId = (portalPublicCode: string) => {
  const [businessManagersData, SetbusinessManagersData] = useState<
    IBusinessUnitsPortalStaffId[]
  >([]);
  const [HasError, SetHasError] = useState(false);

  useEffect(() => {
    const FetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        SetHasError(true);
        return;
      }
      try {
        const NewData = await businessUnitsPortalStaffId(portalPublicCode);
        SetbusinessManagersData(NewData);
      } catch (Error) {
        console.info(Error);
        SetHasError(true);
      }
    };

    FetchBusinessManagers();
  }, [portalPublicCode]);

  return { businessManagersData, HasError };
};

export { UseBusinessManagersId };
