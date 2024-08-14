import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";
import { StyledModal } from "./styles";
import { basic } from "@design/tokens";
import { isMobile580 } from "@src/config/environment";

interface DecisionModalProps {
  title: string;
  description: string;
  actionText: string;
  loading?: boolean;
  closeModal: () => void;
  handleClick: () => void;
  appearance?: string;
}

function DecisionModal(props: DecisionModalProps) {
  const {
    title,
    description,
    actionText,
    loading = true,
    closeModal,
    handleClick,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

  const smallScreen = useMediaQuery(isMobile580);

  const handleIsLoading = () => {
    setIsLoading(loading);
  };

  const handleConfirmationClick = () => {
    handleIsLoading();

    setTimeout(
      () => {
        closeModal();
        handleClick();
      },
      !loading ? 0 : 1000
    );
  };

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={smallScreen}>
        <Stack
          direction="column"
          gap={smallScreen ? `{${basic.spacing.s24}}` : `{${basic.spacing.s16}}`}
          padding={smallScreen ? `{${basic.spacing.s24}}` : `{${basic.spacing.s32}}`}
        >
          <Stack alignItems="center" justifyContent="space-between">
            <Text type="title" size={smallScreen ? "small" : "large"}>
              {title}
            </Text>
            <Icon
              icon={<MdClear />}
              appearance="dark"
              size="24px"
              onClick={closeModal}
            />
          </Stack>
          <Text appearance="gray" size={smallScreen ? "medium" : undefined}>
            {description}
          </Text>
          <Stack justifyContent="flex-end" gap={basic.spacing.s8}>
            <Button
              appearance="gray"
              onClick={closeModal}
              spacing={smallScreen ? "compact" : undefined}
            >
              Cancel
            </Button>
            <Button
              loading={isLoading}
              onClick={handleConfirmationClick}
              spacing={smallScreen ? "compact" : undefined}
            >
              {actionText}
            </Button>
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>,
    document.getElementById("decision")!
  );
}

export { DecisionModal };
export type { DecisionModalProps };
