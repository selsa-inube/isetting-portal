import { IRoleForStaff } from "@ptypes/rolesForStaff";

const mapRolesStaffApiToEntity = (rolesData: IRoleForStaff): IRoleForStaff => {
  const rolesMapped: IRoleForStaff = {
    roleId: String(rolesData.roleId),
    abbreviatedName: String(rolesData.abbreviatedName),
    isActive: false,
    application: Object(rolesData.application),
  };
  return rolesMapped;
};

const mapRolesStaffApiToEntities = (
  roles: IRoleForStaff[]
): IRoleForStaff[] => {
  return roles.map(mapRolesStaffApiToEntity);
};

export { mapRolesStaffApiToEntity, mapRolesStaffApiToEntities };
