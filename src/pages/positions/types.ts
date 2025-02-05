import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { ActionRenderer } from "@design/table/actionRenderer";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

interface IActions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IActions) => React.ReactNode;
}

interface IPositions {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IBusinessUnitsPortalStaffId[];
  loading: boolean;
  smallScreen: boolean;
  label: (typeof PrivilegeOptionsConfig)[number] | undefined;
  ShowAction: ReturnType<typeof ActionRenderer>["ShowAction"];
  ShowActionTitle: ReturnType<typeof ActionRenderer>["ShowActionTitle"];
  filteredData: IBusinessUnitsPortalStaffId[];
  handleStartPage: () => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleEndPage: () => void;
  firstEntryInPage: number;
  lastEntryInPage: number;
  paginatedData: IBusinessUnitsPortalStaffId[];
}

export type { IActions, IAction, IPositions };
