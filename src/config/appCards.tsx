import { MdCreditCard, MdOutlinePayments } from "react-icons/md";
import { ICardData } from "@pages/home/types";

const appCards: ICardData[] = [
  {
    id: "privileges",
    label: "Privilegios",
    description: "Privilegios.",
    icon: <MdOutlinePayments />,
    url: "/privileges",
  },
  {
    id: "rules",
    label: "Reglas",
    description: "Reglas.",
    icon: <MdCreditCard />,
    url: "/rules",
  },
];

export { appCards };
