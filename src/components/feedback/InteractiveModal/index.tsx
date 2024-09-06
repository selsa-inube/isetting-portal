import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";

import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Text } from "@inubekit/text";
import { Textfield } from "@inubekit/textfield";
import { Table, Thead, Tr, Td, Th, Tbody } from "@inubekit/table";
import { Blanket } from "@inubekit/blanket";
import { useMediaQuery } from "@inubekit/hooks";
import { Icon } from "@inubekit/icon";

import { SubjectSearchCard } from "@components/cards/SubjectSearchCard";
import { basic } from "@design/tokens";
import { isMobile580 } from "@config/environment";
import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

import { StyledModal, StyledDivider } from "./styles";

import { InteractiveModalProps } from "./types";

const InteractiveModal = ({
  actions = [],
  actionsTitle,
  closeModal,
  divider,
  infoData,
  idLabel = "userID",
  labels = [],
  nameLabel = "username",
  infoTitle,
  portalId,
  searchData,
  selectedItem,
  title,
  type = "fields",
}: InteractiveModalProps) => {
  const smallScreen = useMediaQuery(isMobile580);
  const hasLabels = labels.length > 0;
  const hasActions = actions.length > 0;
  const node = document.getElementById(portalId);

  const renderCard = (data: { [key: string]: string }) => {
    if (data[idLabel] !== selectedItem) return null;

    return (
      <SubjectSearchCard
        subjectSearchData={{
          id: data[idLabel],
          name: data[nameLabel],
        }}
        closeIcon
      />
    );
  };

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }
  console.log(infoData);
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
                spacing="narrow"
                size="24px"
                cursorHover
                onClick={closeModal}
              />
            </Stack>
            {<StyledDivider $smallScreen={smallScreen} />}
            {infoTitle && (
              <Text type="body" size="medium" appearance="gray">
                {infoTitle}
              </Text>
            )}
            {searchData && Object.values(searchData).map(renderCard)}
            {divider && <StyledDivider $smallScreen={smallScreen} />}
          </Stack>

          {hasLabels
            ? labels.map((field) => {
                const fieldValue = infoData[field.id as keyof IPosition];
                if (Array.isArray(fieldValue) && field.type === "table") {
                  return (
                    <Table tableLayout="auto">
                      <Thead>
                        <Tr>
                          <Th align="left">{field.labelName}</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {fieldValue.map((row, rowIndex) => (
                          <Tr key={`${rowIndex}`}>
                            <Td align="left">{row}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  );
                } else {
                  return (
                    fieldValue && (
                      <Textfield
                        key={field.id}
                        label={field.labelName}
                        name={field.id}
                        id={field.id}
                        placeholder={field.labelName}
                        value={fieldValue}
                        fullwidth={true}
                        type="text"
                        size="compact"
                      />
                    )
                  );
                }
              })
            : Object.keys(infoData).map((index) => (
                <Textfield
                  key={index}
                  label={index}
                  name={index}
                  id={index}
                  placeholder={index}
                  value={infoData[index]}
                  fullwidth={true}
                  type="text"
                  size="compact"
                />
              ))}
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
          <Stack justifyContent="right">
            <Button onClick={closeModal}>Cerrar</Button>
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { InteractiveModal };
