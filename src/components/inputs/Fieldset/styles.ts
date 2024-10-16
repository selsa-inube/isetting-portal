import { inube } from "@inube/design-system";
import { basic } from "@design/tokens";

import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border-style: solid;
  border-color: ${inube.color.stroke.divider.regular};
  padding: ${basic.spacing.s14} ${basic.spacing.s24} ${basic.spacing.s24}
    ${basic.spacing.s24};
`;

export { StyledFieldset };
