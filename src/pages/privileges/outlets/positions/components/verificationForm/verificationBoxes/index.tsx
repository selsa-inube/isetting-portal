import { useMediaQuery } from "@inubekit/hooks";

import { renderPersonalInfoVerification } from "./utils";
import { IFormAddPosition } from "../types";

interface IVerificationBoxes {
  updatedData: IFormAddPosition;
  stepKey: number;
}

function VerificationBoxes(props: IVerificationBoxes) {
  const { updatedData, stepKey } = props;

  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <>
      {stepKey === 1 &&
        renderPersonalInfoVerification(
          updatedData.generalInformation.values,
          isMobile
        )}
    </>
  );
}

export { VerificationBoxes };
