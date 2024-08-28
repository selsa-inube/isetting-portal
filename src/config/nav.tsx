import { INav } from "@components/layout/AppPage/types";
import { MdOutlineStart, MdVpnKey, MdOutlineSettings } from "react-icons/md";


const appsConfig = [
  {
    id: 1,
    label: "Privilegios",
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
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: true,
      },
    ],
    url: "/privileges",
  },  
];


const nav: INav = {
  title: "MENU",
  sections: {
    administrate: {
      name: "",
      links: {
        privileges: {
          id: "privileges",
          label: "Privilegios",
          icon: <MdOutlineStart />,
          path: "/privileges/options",
        },
        rules:{
          id: "rules",
          label: "Reglas",
          icon: <MdOutlineSettings />,
          path: "/rules/options",
        },
      },
    },
  },
};

const logoutConfig = {
  logoutPath: "/logout",
  logoutTitle: "Cerrar sesión",
};

export { appsConfig, nav, logoutConfig};
