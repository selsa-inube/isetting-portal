import { MdCheck } from "react-icons/md";
import { Stack } from "@inubekit/stack";
import { Icon } from "@inubekit/icon";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { basic } from "@design/tokens";
import { ComponentAppearance } from "@ptypes/aparences.types";
import {
  StyledContainer,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledHr,
  StyledContainerOption,
} from "./styles";

interface IBusinessUnitChange {
  businessUnits: IBusinessUnitsPortalStaff[];
  selectedClient: string;
  onLogoClick: (businessUnit: IBusinessUnitsPortalStaff) => void;
}

const BusinessUnitChange = (props: IBusinessUnitChange) => {
  const { businessUnits, selectedClient, onLogoClick } = props;

  return (
    <StyledContainer>
      <Stack width="200px">
        <StyledUl>
          {businessUnits.map((businessUnit, index) => (
            <StyledContainerOption
              key={businessUnit.publicCode}
              onClick={() => onLogoClick(businessUnit)}
            >
              <StyledLi>
                <StyledImg
                  src={businessUnit.urlLogo}
                  alt={businessUnit.abbreviatedName}
                />
                {selectedClient === businessUnit.abbreviatedName && (
                  <Stack
                    margin={`${basic.spacing.s0} ${basic.spacing.s150} ${basic.spacing.s0}`}
                  >
                    <Icon
                      icon={<MdCheck />}
                      appearance={ComponentAppearance.PRIMARY}
                      size="24px"
                      cursorHover
                    />
                  </Stack>
                )}
              </StyledLi>
              {index !== businessUnits.length - 1 && <StyledHr />}
            </StyledContainerOption>
          ))}
        </StyledUl>
      </Stack>
    </StyledContainer>
  );
};

export { BusinessUnitChange };
