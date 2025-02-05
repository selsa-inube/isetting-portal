import { MdCancel, MdCheckCircle } from "react-icons/md";
import { Icon, IIconAppearance } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { UseCountVerifiedRequests } from "@hooks/design/useRequestProcess/useCountVerifiedRequests";
import { UseVerifiedErrorRequest } from "@hooks/design/useRequestProcess/useVerifiedErrorRequest";
import { StyledBar, StyledContainerBar } from "./styles";
import { IRequestSteps } from "./types";

interface IRequestProcess {
  appearance: IIconAppearance;
  requestSteps: IRequestSteps[];
  isMobile: boolean;
  sizeIcon?: string;
}

const RequestProcess = (props: IRequestProcess) => {
  const { appearance, sizeIcon = "32px", requestSteps, isMobile } = props;
  return (
    <Stack direction="column" gap={basic.spacing.s100} width="100%">
      <Stack
        justifyContent={requestSteps.length === 1 ? "center" : "space-between"}
        padding={`${basic.spacing.s0} ${basic.spacing.s100}`}
      >
        {requestSteps &&
          requestSteps.length > 0 &&
          requestSteps.map((item, index) =>
            item.status === "error" ? (
              <Icon
                key={index}
                icon={<MdCancel />}
                size={sizeIcon}
                appearance={ComponentAppearance.DANGER}
              />
            ) : (
              <Icon
                key={index}
                icon={<MdCheckCircle />}
                size={sizeIcon}
                appearance={
                  item.status === "pending"
                    ? ComponentAppearance.GRAY
                    : appearance
                }
              />
            )
          )}
      </Stack>

      <Stack
        padding={`${basic.spacing.s0} ${basic.spacing.s300}`}
        justifyContent="center"
      >
        {requestSteps && requestSteps.length > 1 && (
          <StyledContainerBar>
            <StyledBar
              $progress={UseCountVerifiedRequests(requestSteps)}
              $statusError={UseVerifiedErrorRequest(requestSteps)}
            />
          </StyledContainerBar>
        )}
      </Stack>
      <Stack
        justifyContent={requestSteps.length === 1 ? "center" : "space-between"}
      >
        {requestSteps &&
          requestSteps.length > 0 &&
          requestSteps.map((item, index) => (
            <Stack key={index} width="58px">
              <Text
                type="label"
                textAlign="center"
                size={isMobile ? "medium" : "large"}
                weight="bold"
                appearance={
                  item.status === "completed"
                    ? ComponentAppearance.DARK
                    : ComponentAppearance.GRAY
                }
              >
                {item.name}
              </Text>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export { RequestProcess };
export type { IRequestProcess };
