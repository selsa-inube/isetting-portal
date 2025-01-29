interface IGeneralInformationEntry {
  namePosition: string;
  descriptionPosition: string;
}

interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
  rolesStaff?: string;
  applicationStaff?: string;
}

interface IOptionInitialiceEntryApp {
  id: string;
  value: string;
  isActive: boolean;
  rolesStaff?: string;
  applicationStaff?: string;
}
interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  rolesStaff: { isValid: boolean; values: IOptionInitialiceEntry[] };
  applicationStaff?: { isValid: boolean; values: IOptionInitialiceEntryApp[] };
}

export type { IFormAddPosition };
