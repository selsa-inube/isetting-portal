import { IBusinessUnitsPortalStaff } from "./types";

const mapBusinessManagerPortalStaffApiToEntity = (
  businessManagerPortalStaffApiToEntity: IBusinessUnitsPortalStaff
): IBusinessUnitsPortalStaff => {
  const business: IBusinessUnitsPortalStaff = {
    businessUnitPublicCode: String(
      businessManagerPortalStaffApiToEntity.businessUnitPublicCode
    ),
    abbreviatedName: String(
      businessManagerPortalStaffApiToEntity.abbreviatedName
    ),
    descriptionUse: String(
      businessManagerPortalStaffApiToEntity.descriptionUse
    ),
    urlLogo: String(businessManagerPortalStaffApiToEntity.urlLogo),
    firstMonthOfFiscalYear: String(
      businessManagerPortalStaffApiToEntity.firstMonthOfFiscalYear
    ),
    languageId: String(businessManagerPortalStaffApiToEntity.languageId),
  };
  return business;
};

export { mapBusinessManagerPortalStaffApiToEntity };
