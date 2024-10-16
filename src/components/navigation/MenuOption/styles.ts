import { inube } from "@inube/design-system";
import { basic } from "@design/tokens";
import styled from "styled-components";

const StyledOption = styled.button`
  color: ${({ theme }) =>
    theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  padding: ${({ theme }) =>
    `${theme?.spacing?.s075} ${theme?.spacing?.s150}` ||
    `${basic.spacing.s6} ${basic.spacing.s12}`};
  border: none;
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.clear || inube.color.stroke.light.clear};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
  }
`;

export { StyledOption };
