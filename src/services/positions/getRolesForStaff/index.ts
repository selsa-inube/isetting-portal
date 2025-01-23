import { getRolesForStaff } from "@api/isaasQuery";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { mapRolesStaffApiToEntities } from "./mappers";

const getRolesStaff = async (): Promise<IRoleForStaff[]> => {
  const data: IRoleForStaff[] = await getRolesForStaff();
  return mapRolesStaffApiToEntities(data);
};

export { getRolesStaff };
