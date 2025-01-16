import { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { Home } from "@pages/home";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";

const FirstPage = () => {
  const { businessUnitSigla } = useContext(AppContext);
  return businessUnitSigla.length === 0 ? <SelectBusinessUnits /> : <Home />;
};

export { FirstPage };
