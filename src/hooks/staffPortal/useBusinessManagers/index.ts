import { useState, useEffect } from "react";

import {
  IBusinessManagers,
  IStaffPortalByBusinessManager,
} from "@ptypes/staffPortal.types";
import { getBusinessManagers } from "@services/staffPortal/getBusinessManager";

const UseBusinessManagers = (
  portalPublicCode: IStaffPortalByBusinessManager
) => {
  const [businessManagersData, setBusinessManagersData] =
    useState<IBusinessManagers>({} as IBusinessManagers);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchBusinessManagers = async () => {
      if (!portalPublicCode) {
        setHasError(true);
        return;
      }
      try {
        const newData = await getBusinessManagers(
          portalPublicCode.businessManagerId
        );
        setBusinessManagersData(newData);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchBusinessManagers();
  }, [portalPublicCode]);

  return { businessManagersData, hasError };
};

export { UseBusinessManagers };
