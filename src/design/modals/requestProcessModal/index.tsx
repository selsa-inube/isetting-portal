import { createPortal } from "react-dom";

import { RequestStatus } from "@design/feedback/requestStatus";

import { IRequestSteps } from "@design/feedback/requestProcess/types";
import { basic } from "@design/tokens";
import { Spinner } from "@inubekit/spinner";
import { Stack } from "@inubekit/stack";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Blanket } from "@inubekit/blanket";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import { ISpinnerAppearance } from "@inubekit/spinner";
import { RequestProcess } from "@design/feedback/requestProcess";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { statusFlowAutomatic } from "@config/status/statusFlowAutomatic";
import { StyledModal } from "./styles";
interface IRequestProcessModal {
  descriptionRequestProcess: {
    title: string;
    description: string;
  };
  portalId: string;
  loading: boolean;
  requestProcessSteps: IRequestSteps[];
  descriptionRequestStatus: (
    requestNumber: string,
    responsible: string
  ) => { actionText: string; description: string; title: string };
  onCloseRequestStatus: () => void;
  saveData?: ISaveDataResponse;
  appearance?: ISpinnerAppearance;
}

const RequestProcessModal = (props: IRequestProcessModal) => {
  const {
    descriptionRequestProcess,
    portalId,
    requestProcessSteps,
    loading,
    appearance = "primary",
    saveData,
    descriptionRequestStatus,
    onCloseRequestStatus,
  } = props;

  const isMobile = useMediaQuery("(max-width: 768px)");

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s300}>
          {loading ? (
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              alignContent="center"
              gap={basic.spacing.s300}
            >
              <Spinner
                size="large"
                appearance={appearance}
                transparent={false}
              />
              <Text type="body" size="medium" weight="bold" appearance="dark">
                Espere un momento por favor
              </Text>
            </Stack>
          ) : (
            saveData &&
            saveData.requestStatus !== "" &&
            (statusFlowAutomatic.includes(saveData.requestStatus) ? (
              <RequestProcess
                title={descriptionRequestProcess.title}
                description={descriptionRequestProcess.description}
                appearance={ComponentAppearance.SUCCESS}
                requestSteps={requestProcessSteps}
                isMobile={isMobile}
                sizeIcon={isMobile ? "20px " : "32px"}
              />
            ) : (
              <RequestStatus
                title={
                  descriptionRequestStatus(
                    saveData.requestNumber,
                    saveData.settingRequestId
                  ).title
                }
                description={
                  descriptionRequestStatus(
                    saveData.requestNumber,
                    saveData.settingRequestId
                  ).description
                }
                onClick={onCloseRequestStatus}
                onCloseModal={onCloseRequestStatus}
                isLoading={false}
                actionText={
                  descriptionRequestStatus(
                    saveData.requestNumber,
                    saveData.settingRequestId
                  ).actionText
                }
                appearance={ComponentAppearance.PRIMARY}
              />
            ))
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { RequestProcessModal };
export type { IRequestProcessModal };
