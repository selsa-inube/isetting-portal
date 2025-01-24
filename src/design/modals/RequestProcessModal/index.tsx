import { createPortal } from "react-dom";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";

import { RequestProcess } from "@design/feedback/RequestProcess";
import { IRequestSteps } from "@design/feedback/RequestProcess/types";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledModal } from "./styles";
import { basic } from "@design/tokens";

interface IRequestProcessModal {
  title: string;
  description: string;
  portalId: string;
  requestSteps: IRequestSteps[];
}

function RequestProcessModal(props: IRequestProcessModal) {
  const { title, description, portalId, requestSteps } = props;

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
}

export { RequestProcessModal };
export type { IRequestProcessModal };
