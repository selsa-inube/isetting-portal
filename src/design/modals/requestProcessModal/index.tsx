import { createPortal } from "react-dom";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";
import { basic } from "@design/tokens";
import { IRequestSteps } from "@design/feedback/requestProcess/types";
import { RequestProcess } from "@design/feedback/requestProcess";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { UseRequestProcessModal } from "@hooks/design/useRequestProcessModal";
import { StyledModal } from "./styles";

interface IRequestProcessModal {
  title: string;
  description: string;
  portalId: string;
  requestSteps: IRequestSteps[];
}

const RequestProcessModal = ({
  title,
  description,
  portalId,
  requestSteps,
}: IRequestProcessModal) => {
  const { isMobile, node } = UseRequestProcessModal(portalId);

  if (!node) return null;

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap={basic.spacing.s300}>
          <Text type="title" size="medium" weight="bold">
            {title}
          </Text>
        </Stack>
        <Stack
          gap={basic.spacing.s100}
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding={
            isMobile
              ? `${basic.spacing.s100}`
              : `${basic.spacing.s0} ${basic.spacing.s150} ${basic.spacing.s450} ${basic.spacing.s450}`
          }
        >
          <Text size={isMobile ? "medium" : "large"}>{description}</Text>
        </Stack>

        <Stack
          padding={
            isMobile
              ? `${basic.spacing.s100} ${basic.spacing.s100}`
              : `${basic.spacing.s0} ${basic.spacing.s450}`
          }
        >
          <RequestProcess
            appearance={ComponentAppearance.SUCCESS}
            requestSteps={requestSteps}
            isMobile={isMobile}
            sizeIcon={isMobile ? "20px " : "32px"}
          />
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { RequestProcessModal };
export type { IRequestProcessModal };
