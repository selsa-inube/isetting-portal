import { UseSelectBusinessUnits } from "@hooks/useSelectBusinessUnits";
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
