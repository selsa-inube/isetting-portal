import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { getRolesForStaff } from "@api/getRolesForStaff";
import { mapRolesStaffApiToEntities } from "./mappers";

const getRolesStaff = async (): Promise<IRoleForStaff[]> => {
  const data: IRoleForStaff[] = await getRolesForStaff();
  return mapRolesStaffApiToEntities(data);
};

export { getRolesStaff };
