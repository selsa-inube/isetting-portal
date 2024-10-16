import { inube } from "@inube/design-system";
import { basic } from "@design/tokens";
import styled from "styled-components";

interface IStyledMenuProps {
  theme?: typeof inube;
}

const StyledMenu = styled.div`
  position: absolute;
  right: ${basic.spacing.s0};
  top: ${basic.spacing.s20};
`;

const StyledMenuContainer = styled.div`
  position: absolute;
  right: 0;
  width: fit-content;
  max-width: 200px;
  min-width: 160px;
  box-shadow:
    ${basic.spacing.s0} 1px ${basic.spacing.s2}
      ${({ theme }: IStyledMenuProps) =>
        theme?.color?.stroke?.light?.disabled ||
        inube.color.stroke.light.disabled},
    ${basic.spacing.s0} ${basic.spacing.s2} ${basic.spacing.s6}
      ${basic.spacing.s2}
      ${({ theme }: IStyledMenuProps) =>
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular};
  background-color: ${({ theme }: IStyledMenuProps) =>
    theme?.color?.stroke?.light?.clear || inube.color.stroke.light.clear};
  border-radius: ${basic.spacing.s4};
  background-color: #fff;
  padding: ${basic.spacing.s4} ${basic.spacing.s2};
`;

export { StyledMenu, StyledMenuContainer };
