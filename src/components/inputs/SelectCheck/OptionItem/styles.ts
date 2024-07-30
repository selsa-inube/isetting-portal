import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledOptionItemChecked = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  cursor: pointer;
  min-height: 40px;
  border-left-style: solid;
  border-left-width: 2px;
  border-left-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.regular || inube.palette.neutral.N10};
  padding-top: ${({ theme }) => theme?.spacing?.s050 || '4px'};
  padding-right: ${({ theme }) => theme?.spacing?.s200 || '16px'};
  padding-bottom: ${({ theme }) => theme?.spacing?.s050 || '4px'};
  padding-left: ${({ theme }) => theme?.spacing?.s150 || '12px'};

  p {
    color: ${({ theme }) =>
      theme?.color?.text?.dark?.regular || inube.palette.neutral.N900};
  }

  &:hover {
    border-left-color: ${({ theme }) =>
      theme?.color?.stroke?.primary?.regular ||
      inube.palette.blue.B400};

    background-color: ${({ theme }) =>
      theme?.color?.surface?.gray?.hover || inube.palette.neutral.N20};

    p {
      color: ${({ theme }) =>
        theme?.color?.text?.primary?.regular ||
        inube.palette.blue.B400};
    }
  }
`;
