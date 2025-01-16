import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { DetailsModal } from "../components/DetailsModal";
import { IPosition } from "../add-position/types";
import { IActions, IAction } from "../types";

const titlesOptions = [
  {
    id: "abbreviatedName",
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

const actions: IAction[] = [
  {
    id: "details",
    actionName: "Detalle",
    content: (data: IActions) => (
      <DetailsModal data={data as IPosition} labelsOptions={labelsOptions} />
    ),
  },
  {
    id: "edit",
    actionName: "Editar",
    content: () => <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />,
  },
  {
    id: "delete",
    actionName: "Eliminar",
    content: () => (
      <Icon icon={<MdOutlineDelete />} size="16px" appearance="dark" />
    ),
  },
];

export { actions, labelsOptions, titlesOptions, positionsBreakPointsConfig };
