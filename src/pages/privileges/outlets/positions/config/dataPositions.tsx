import {  MdModeEdit, MdDelete, MdLaunch } from "react-icons/md";

export const titlesOptions = [
  {
    id: "abbreviated_name",
    titleName: "Cargos",
    action: false,
    priority: 1,
  },
  {
    id: "details",
    titleName: "Detalle",
    action: true,
    priority: 2,
  },
  {
    id: "edit",
    titleName: "Editar",
    action: true,
    priority: 3,
  },
  {
    id: "delete",
    titleName: "Eliminar",
    action: true,
    priority: 4,
  },
];

export const PositionsBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1010px)", totalColumns: 1 },
  { breakpoint: "(max-width: 848px)", totalColumns: 2 },
  { breakpoint: "(max-width: 430px)", totalColumns: 1 },
];

const actionIcons: { [key: string]: JSX.Element | null } = {
  details: <MdLaunch />,
  edit: <MdModeEdit />,
  delete: <MdDelete />,
};

export const renderActionIcon = (actionType: string) => actionIcons[actionType] || null;