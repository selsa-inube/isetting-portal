import { useState } from "react";
import { MdClear } from "react-icons/md";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { useMediaQuery } from "@inubekit/hooks";
import { Icon } from "@inubekit/icon";
import { Grid } from "@inubekit/grid";
import { isMobile970 } from "@src/config/environment";

import { StyledSubjectSearchCard, StyledSubjectSearchCardText } from "./styles";

function SubjectSearchCard() {
  const [isActive, setIsActive] = useState(false);
  const smallScreen = useMediaQuery(isMobile970);

  const handleToggleModal = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <StyledSubjectSearchCard $smallScreen={smallScreen} $isActive={isActive}>
        <Grid templateColumns="1fr auto">
          <StyledSubjectSearchCardText onClick={handleToggleModal}>
            <Stack direction="column">
              <Text type="label" size="medium" textAlign="start">
                
              </Text>
              <Text size="medium" textAlign="start">
                
              </Text>
            </Stack>
          </StyledSubjectSearchCardText>
          {(
            <Stack justifyContent="end" padding="8px 16px 0px 0px">
              <Icon
                icon={<MdClear />}
                appearance="dark"
                size="16px"
              />
            </Stack>
          )}
        </Grid>
      </StyledSubjectSearchCard>
    </>
  );
}

export { SubjectSearchCard };
