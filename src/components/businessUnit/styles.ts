import styled from "styled-components";
import { basic } from "@design/tokens";

interface StyledBusinessUnitsListProps {
  $scroll?: boolean;
  $smallScreen: boolean;
}

const StyledBusinessUnits = styled.div<StyledBusinessUnitsListProps>`
  & form {
    & > div {
      margin: auto;
      width: ${({ $smallScreen }) => ($smallScreen ? "500px" : "auto")};
    }
  }

  & button {
    margin-top: 24px;
  }
`;

const StyledBusinessUnitsList = styled.div<StyledBusinessUnitsListProps>`
  & > div {
    list-style: none;
    min-height: ${({ $smallScreen }) => ($smallScreen ? "300px" : "200px")};
    min-height: 300px;
    max-height: 430px;
    width: inherit;
    overflow-y: ${({ $scroll }) => ($scroll ? "scroll" : "visible")};
  }
`;

const StyledNoResults = styled.div`
  margin: ${basic.spacing.s12} ${basic.spacing.s0};
`;

const StyledBusinessUnitsItem = styled.li`
  width: 100%;
`;

export {
  StyledBusinessUnits,
  StyledBusinessUnitsList,
  StyledNoResults,
  StyledBusinessUnitsItem,
};
