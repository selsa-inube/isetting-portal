import { Link } from "react-router-dom";
import styled from "styled-components";
import { inube } from "@inube/design-system";
import { basic } from "@design/tokens";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  display: inline-block;
  padding: ${basic.spacing.s6} ${basic.spacing.s12};
  border: none;
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.clear || inube.color.stroke.light.clear};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  }
`;

export { StyledLink };
