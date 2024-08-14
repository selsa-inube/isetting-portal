import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import {
  Stack,
  Text,
  Blanket,
  useMediaQuery,
  Icon,
} from "@inube/design-system";
import { StyledModal, StyledDivider } from "./styles";
import { InteractiveModalProps } from "./types";
import { SubjectSearchCard } from "@components/cards/SubjectSearchCard";
import { basic } from "@design/tokens";
import { isMobile580 } from "@src/config/environment";

const InteractiveModal = ({
  actions = [],
  actionsTitle,
  closeModal,
  divider,
  infoData,
  idLabel = "userID",
  infoTitle,
  portalId,
  searchData,
  selectedItem,
  title,
  type = "fields",
}: InteractiveModalProps) => {
  const smallScreen = useMediaQuery(isMobile580);
  const hasActions = actions.length > 0;
  const node = document.getElementById(portalId);


  const renderCard = (data: { [key: string]: string }) => {
    if (data[idLabel] !== selectedItem) return null;

    return (
      <SubjectSearchCard
        key={data[idLabel]}
      />
    );
  };

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={smallScreen} type={type}>
        <Stack direction="column" gap={basic.spacing.s24}>
          <Stack direction="column" gap={basic.spacing.s20}>
            <Stack alignItems="center" justifyContent="space-between">
              <Text type="headline" size="small" appearance="dark">
                {title}
              </Text>
              <Icon
                appearance={"dark"}
                icon={<MdClear />}
                spacing="wide"
                size="24px"
                cursorHover
                onClick={closeModal}
              />
            </Stack>
            {infoTitle && (
              <Text type="body" size="medium" appearance="gray">
                {infoTitle}
              </Text>
            )}
            {
              searchData &&
              Object.values(searchData).map(renderCard)}
            {divider && <StyledDivider $smallScreen={smallScreen} />}
          </Stack>
          {hasActions && (
            <Stack direction="column" gap={basic.spacing.s16}>
              <Text type="title" size="medium" appearance="dark">
                {actionsTitle}
              </Text>
              {actions.map((action) => (
                <Stack key={action.id} gap={basic.spacing.s10}>
                  {typeof action.content === "function"
                    ? action.content(infoData)
                    : action.content}
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { InteractiveModal };
