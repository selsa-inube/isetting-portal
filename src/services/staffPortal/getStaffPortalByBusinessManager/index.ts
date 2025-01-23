import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { getStaffPortalByBusinessManager } from "@api/getStaffPortalByBusinessManager";
import { mapStaffPortalByBusinessManagerApiToEntities } from "./mappers";

const staffPortalByBusinessManager = async (
  portalCode: string
): Promise<IStaffPortalByBusinessManager[]> => {
  const data: IStaffPortalByBusinessManager[] =
    await getStaffPortalByBusinessManager(portalCode);

  return mapStaffPortalByBusinessManagerApiToEntities(data);
};

export { staffPortalByBusinessManager };
