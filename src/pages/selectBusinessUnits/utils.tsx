import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { businessUnitsPortalStaff } from "src/services/staffPortal/getBusinessUnitsPortalStaff";

const validateBusinessUnities = async (
  publicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff[]> => {
  const newData = await businessUnitsPortalStaff(publicCode, userAccount);

  return newData;
};

export { validateBusinessUnities };
