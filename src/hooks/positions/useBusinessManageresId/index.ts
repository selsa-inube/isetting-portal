import { useState, useEffect } from "react";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { getBusinessManagersId } from "@services/staffPortal/getBusinessManagersId";

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
        const NewData = await getBusinessManagersId(portalPublicCode);
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
