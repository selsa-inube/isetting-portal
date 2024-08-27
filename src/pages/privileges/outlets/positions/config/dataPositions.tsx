import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

import { Icon } from "@inubekit/icon";

import { DetailsModal } from "../components/DetailsModal";
import { IPosition } from "../add-position/types";

export const titlesOptions = [
  {
    id: "public_code",
    titleName: "Code",
    priority: 0,
  },
  {
    id: "abbreviated_name",
    titleName: "Nombre",
    priority: 1,
  },
];

export const PositionsBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 2 },
  { breakpoint: "(max-width: 1010px)", totalColumns: 1 },
  { breakpoint: "(max-width: 848px)", totalColumns: 2 },
  { breakpoint: "(max-width: 430px)", totalColumns: 1 },
];

export const actionsConfigPosition = (
  linixPosition: IPosition[]
) => {
  const dataDetailsPosition = (public_code: string) => {
    const data = [
      linixPosition.find((position) => position.public_code === public_code)!,
    ].map((positionSelected) => ({
      Código: positionSelected?.public_code,
      Nombre: positionSelected?.abbreviated_name,
    }));

    return [...data].shift();
  };

  const selectedData = (public_code: string) =>
    linixPosition.find((position) => position.public_code === public_code);

  const actionsConfig = [
    {
      id: "Details",
      actionName: "Detalles",
      content: ({ public_code }: { public_code: string }) => (
        <DetailsModal data={dataDetailsPosition(public_code)} />
      ),
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: ({ public_code }: { public_code: string }) => (
        <Link to={`edit/${public_code}`} onClick={() => selectedData(public_code)}>
          <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
        </Link>
      ),
      type: "primary",
    },
  ];

  return actionsConfig;
};
