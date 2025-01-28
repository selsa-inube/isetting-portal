import { MdOutlineArrowBack } from "react-icons/md";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { basic } from "@design/tokens";
import { Accordion } from "@design/data/acordion";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import { IRequestSteps } from "@design/feedback/requestProcess/types";
import { AddDestinationStepsConfig } from "@config/positions/assisted";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { VerificationBoxes } from "./verificationBoxes";
import { IFormAddPosition } from "./types";

interface IVerificationForm {
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  updatedData: IFormAddPosition;
  handleStepChange: (stepId: number) => void;
  onFinishForm?: () => void;
  onPreviousStep?: () => void;
  onToggleModal?: () => void;
}

const VerificationForm = ({
  requestSteps,
  showRequestProcessModal,
  updatedData,
  handleStepChange,
}: IVerificationForm) => {
  const isTablet = useMediaQuery("(max-width: 1224px)");

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      {AddDestinationStepsConfig("")
        .filter((step) => step.name.toLowerCase() !== "verificación")
        .map((step) => (
          <Accordion title={step.name} key={`${step.id}-box`}>
            <Stack
              direction="column"
              width="100%"
              alignItems="flex-end"
              gap={isTablet ? basic.spacing.s150 : basic.spacing.s200}
            >
              <VerificationBoxes
                updatedData={updatedData}
                stepKey={Number(step.id)}
              />

              <Button
                iconBefore={<MdOutlineArrowBack />}
                onClick={() => handleStepChange(step.number)}
                appearance={ComponentAppearance.DARK}
                variant="none"
              >
                Regresar a este paso
              </Button>
            </Stack>
          </Accordion>
        ))}

      {showRequestProcessModal && (
        <RequestProcessModal
          title="Procesando solicitud"
          description="Hemos recibido tu solicitud y se encuentra en proceso.Por favor, espera mientras la gestionamos."
          portalId="portal"
          requestSteps={requestSteps}
        />
      )}
    </Stack>
  );
};

export { VerificationForm };
