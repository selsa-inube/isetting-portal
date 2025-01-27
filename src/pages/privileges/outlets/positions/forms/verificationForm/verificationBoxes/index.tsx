import { useMediaQuery } from "@inubekit/hooks";
import { IFormAddPosition } from "../types";
import { renderPersonalInfoVerification } from "./utils";

interface IVerificationBoxes {
  updatedData: IFormAddPosition;
  stepKey: number;
}

const VerificationBoxes = ({ updatedData, stepKey }: IVerificationBoxes) => {
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
};

export { VerificationBoxes };
