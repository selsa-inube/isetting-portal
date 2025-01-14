import React from "react";
import { FormikProps } from "formik";

import { IAssignmentFormEntry } from "../../types/forms.types";

const titleButtonTextAssited = {
  before: "Atrás",
  after: "Siguiente",
  finish: "Enviar",
};

interface IOptionInitialiceEntryApp {
  id: string;
  value: string;
  isActive: boolean;
  rolesStaff?: string;
  applicationStaff?: string;
}
interface IPosition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  public_code: string;
  abbreviated_name: string;
  n_roles?: string[];
}
interface IStep {
  id: number;
  label: string;
  description: string;
}

interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
  rolesStaff?: string;
  applicationStaff?: string;
}
interface IGeneralInformationEntry {
  namePosition: string;
  descriptionPosition: string;
}

interface IOptionRolesInitialiceEntry {
  id?: string;
  value?: string;
  isActive?: boolean;
  roleId?: string;
  abbreviatedName?: string;
}
interface DataToAssignmentFormEntryProps {
  dataOptions: Record<string, unknown>[];
  idLabel: string;
  valueLabel: string;
  isActiveLabel: string;
}

function dataToAssignmentFormEntry(props: DataToAssignmentFormEntryProps) {
  const { dataOptions, idLabel, valueLabel, isActiveLabel } = props;
  return dataOptions.map((dataOption) => ({
    value: String(dataOption[valueLabel]),
    isActive: Boolean(dataOption[isActiveLabel] === "Y"),
    id: String(dataOption[idLabel]),
  }));
}

interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  rolesStaff: { isValid: boolean; values: IOptionInitialiceEntry[] };
  applicationStaff: { isValid: boolean; values: IOptionInitialiceEntryApp[] };
}

interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}

type IHandleUpdateDataSwitchstep =
  | IGeneralInformationEntry
  | IAssignmentFormEntry[];

export { titleButtonTextAssited, dataToAssignmentFormEntry };

export type {
  IHandleUpdateDataSwitchstep,
  IFormAddPosition,
  IFormAddPositionRef,
  IOptionInitialiceEntry,
  IOptionInitialiceEntryApp,
  IPosition,
  IStep,
  IOptionRolesInitialiceEntry,
  DataToAssignmentFormEntryProps,
  IGeneralInformationEntry,
};
