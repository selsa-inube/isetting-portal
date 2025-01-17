import { UseSelectBusinessUnits } from "@hooks/useSelectBusinessUnits";
import { SelectBusinessUnitsUI } from "./interface";

const SelectBusinessUnits = () => {
  UseSelectBusinessUnits();

  return <SelectBusinessUnitsUI />;
};

export { SelectBusinessUnits };
