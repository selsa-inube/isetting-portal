import { useContext } from "react";

import { Home } from "@pages/home";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { AppContext } from "@context/authAndDataProvider";

const FirstPage = () => {
  const { businessUnitSigla } = useContext(AppContext);
  return businessUnitSigla.length === 0 ? <SelectBusinessUnits /> : <Home />;
};

export { FirstPage };
