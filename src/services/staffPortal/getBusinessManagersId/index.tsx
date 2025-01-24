import { getBusinessManagersId } from "@api/iportalStaff/getBusinessManagersId";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { mapBusinessUnitsPortalStaffToEntities } from "./mappers";

const businessUnitsPortalStaffId = async (
  businessManagerId: string
): Promise<IBusinessUnitsPortalStaffId[]> => {
  const data: IBusinessUnitsPortalStaffId[] =
    await getBusinessManagersId(businessManagerId);
  return Array.isArray(data) ? mapBusinessUnitsPortalStaffToEntities(data) : [];
};

export { businessUnitsPortalStaffId };
