import { MdModeEdit } from "react-icons/md";
import { Icon } from "@inubekit/icon";
import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
import { DetailsModal } from "@pages/positions/tabs/positionsTabs/forms/detailsModal";
import { IAction, IActions } from "@pages/positions/tabs/positionsTabs/types";
import { Delete } from "@pages/positions/tabs/positionsTabs/forms/delete";

const titlesOptions = [
  {
    id: "missionName",
    titleName: "Cargos",
    action: false,
    priority: 1,
  },
];

const positionsBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1010px)", totalColumns: 1 },
  { breakpoint: "(max-width: 848px)", totalColumns: 2 },
  { breakpoint: "(max-width: 430px)", totalColumns: 1 },
];

const labelsOptions = [
  {
    id: "publicCode",
    labelName: "Código",
    type: "text",
  },
  {
    id: "abbreviatedName",
    labelName: "Descripción Funcional",
    type: "text",
  },
  {
    id: "missionId",
    labelName: "Roles",
    type: "table",
  },
];
const actionsConfig = (setEntryDeleted: (value: string | number) => void) => {
  const actions: IAction[] = [
    {
      id: "details",
      actionName: "Detalle",
      content: (data: IActions) => (
        <DetailsModal
          data={data as unknown as IPosition}
          labelsOptions={labelsOptions}
        />
      ),
    },
    {
      id: "edit",
      actionName: "Editar",
      content: () => (
        <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
      ),
    },
    {
      id: "delete",
      actionName: "Eliminar",
      content: (entry: IActions) => (
        <Delete data={entry} setEntryDeleted={setEntryDeleted} />
      ),
    },
  ];
  return actions;
};

export {
  actionsConfig,
  labelsOptions,
  titlesOptions,
  positionsBreakPointsConfig,
};
