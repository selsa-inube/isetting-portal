import { UseSelectBusinessUnits } from "@hooks/selectBusinessUnits/useSelectBusinessUnits";
import { SelectBusinessUnitsUI } from "./interface";

const SelectBusinessUnits = () => {
  const { screenTablet, imageWidth, appData } = UseSelectBusinessUnits();

  return (
    <SelectBusinessUnitsUI
      screenTablet={screenTablet}
      imageWidth={imageWidth}
      appData={appData}
    />
  );
};

export { SelectBusinessUnits };
