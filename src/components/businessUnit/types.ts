interface IBusinessUnitstate {
  ref: (EventTarget & HTMLInputElement) | null;
  value: boolean;
}

interface IBusinessUnitsPortalStaff {
  businessUnitPublicCode: string;
  abbreviatedName: string;
  descriptionUse: string;
  urlLogo: string;
  firstMonthOfFiscalYear?: string;
  languageId?: string;
}

export type { IBusinessUnitstate, IBusinessUnitsPortalStaff };
