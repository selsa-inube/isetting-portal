import {
  MdOutlineStart,
  MdVpnKey,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";

import { INav } from "@pages/home/types";
const appsConfig = [
  {
    id: 1,
    label: "Cargos",
    description: "Gestionar los Cargos y sus privilegios",
    icon: <MdVpnKey />,
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/positions",
        label: "Cargos",
        id: "/positions",
        isActive: true,
      },
    ],
    url: "/positions",
  },
];

const nav: INav = {
  items: {
    title: "MENU",
    sections: {
      administrate: {
        name: "",
        links: {
          positions: {
            id: "positions",
            label: "Cargos",
            icon: <MdOutlineStart />,
            path: "/positions",
          },
          rules: {
            id: "rules",
            label: "Reglas",
            icon: <MdOutlineSettings />,
            path: "/rules",
          },
        },
      },
    },
  },
  breakpoint: "848px",
};

const userMenu = [
  {
    id: "section",
    title: "",
    links: [
      {
        id: "logout",
        title: "Cerrar sesión",
        path: "/logout",
        iconBefore: <MdLogout />,
      },
    ],
    divider: true,
  },
];

const logoutConfig = {
  logoutPath: "/logout",
  logoutTitle: "Cerrar sesión",
};

export { appsConfig, nav, logoutConfig, userMenu };
