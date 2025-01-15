import React from "react";
import { FormikProps } from "formik";

import { IAssignmentFormEntry } from "../../types/forms.types";
import { IGeneralInformationEntry } from "../components/GeneralInformationForm/types";

const titleButtonTextAssited = {
  before: "Atrás",
  after: "Siguiente",
  finish: "Enviar",
};

interface IOptionInitialiceEntryApp {
  k_uso: string;
  n_uso: string;
}

interface IBusinessManagerStaffMissionByRole {
  missionId: string;
  roleId: string;
}
interface IPosition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  publicCode: string;
  abbreviatedName: string;
  businessManagerStaffMissionByRole?: IBusinessManagerStaffMissionByRole[];
}

interface IDeleteForMessage {
  id: string;
  successfulDiscard: boolean;
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
}

interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
}

interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}

type IHandleUpdateDataSwitchstep =
  | IGeneralInformationEntry
  | IAssignmentFormEntry[];

export { titleButtonTextAssited };

export type {
  IHandleUpdateDataSwitchstep,
  IFormAddPosition,
  IFormAddPositionRef,
  IOptionInitialiceEntry,
  IOptionInitialiceEntryApp,
  IPosition,
  IStep,
  IDeleteForMessage,
};
