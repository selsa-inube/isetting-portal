import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { getBusinessUnitsPortalStaff } from "../getBusinessUnitsPortalStaff";

const ValidateBusinessUnities = async (
  publicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff[]> => {
  const newData = await getBusinessUnitsPortalStaff(publicCode, userAccount);

  return newData;
};

export { ValidateBusinessUnities };
