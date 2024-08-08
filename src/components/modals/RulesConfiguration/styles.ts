import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContainer = styled.div`
  position: relative; 
`;

const StyledModal = styled.div`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};

  width: 450px;
  min-height: auto;
  height: auto;
  border-radius: 8px;

  & > div {
    padding: 24px;
  }
`;

export { StyledContainer, StyledModal };
