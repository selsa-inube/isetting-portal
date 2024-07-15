import { INav } from "@components/layout/AppPage/types";
import { MdOutlineStart } from "react-icons/md";

const nav: INav = {
  title: "MENU",
  sections: {
    administrate: {
      name: "",
      links: {
        startProcess: {
          id: "privileges",
          label: "Privilegios",
          icon: <MdOutlineStart />,
          path: "/",
        },
      },
    },
  },
};

export { nav };
