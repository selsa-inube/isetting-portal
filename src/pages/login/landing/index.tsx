import { useContext } from "react";

import { Home } from "@pages/home";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { AuthAndData } from "@context/authAndDataProvider";

const Landing = () => {
  const { businessUnitSigla } = useContext(AuthAndData);
  return businessUnitSigla.length === 0 ? <SelectBusinessUnits /> : <Home />;
};

export { Landing };
