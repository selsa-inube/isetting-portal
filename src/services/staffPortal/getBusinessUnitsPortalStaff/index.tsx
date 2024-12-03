import { getBusinessUnitsPortalStaff } from "src/api/isaasQuery";
import { IBusinessUnitsPortalStaff } from "./types";
import { mapBusinessManagerPortalStaffApiToEntity } from "./mappers";

const businessUnitsPortalStaff = async (
  publicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff> => {
  const data: IBusinessUnitsPortalStaff = await getBusinessUnitsPortalStaff(
    publicCode,
    userAccount
  );
  return mapBusinessManagerPortalStaffApiToEntity(data);
};

export { businessUnitsPortalStaff };
