import { IEntry } from "@design/templates/AssignmentForm/types";
import { IOptionInitialiceEntryApp } from "@pages/positions/outlets/addPosition/types";
import { IAssignmentFormEntry, IMessageState } from "@ptypes/positions/forms";

interface IInitializerFormUI {
  dataOptionsForms: IAssignmentFormEntry[];
  dataOptionsValueSelect: IOptionInitialiceEntryApp[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeInitializerForm: (
    dataOptionsForms: IAssignmentFormEntry[]
  ) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IEntry[] | undefined>>;
  readOnly?: boolean;
  setChangedData?: (changeData: IAssignmentFormEntry[]) => void;
  changeData?: IAssignmentFormEntry[];
}

interface IIUseInitializerForm {
  dataOptionsForms: IAssignmentFormEntry[];
  setSelectedToggle: React.Dispatch<React.SetStateAction<IEntry[] | undefined>>;
  id?: string;
  keyData?: string;
  nameDB?: string;
  property?: string;
  propertyData?: string;
  readOnly?: boolean;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  dataOptionsValueSelect: IOptionInitialiceEntryApp[];
}

export type { IInitializerFormUI, IIUseInitializerForm };
