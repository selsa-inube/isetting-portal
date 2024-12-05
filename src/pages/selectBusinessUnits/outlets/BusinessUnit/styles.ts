import { basic } from "@design/tokens";
import styled from "styled-components";

interface StyledBusinessUnitsListProps {
  $scroll?: boolean;
}

const StyledBusinessUnits = styled.div`
  & form {
    & > div {
      margin: ${basic.spacing.s500} auto ${basic.spacing.s0};
      width: 500px;
      @media screen and (max-width: 532px) {
        width: auto;
      }
    }
  }

  & button {
    margin-top: ${basic.spacing.s300};
  }
`;

const StyledBusinessUnitsList = styled.div<StyledBusinessUnitsListProps>`
  & > div {
    list-style: none;
    max-height: 330px;
    width: 500px;
    overflow-y: auto;

    @media screen and (max-height: 1000px) {
      min-height: 200px;
    }

    @media screen and (max-width: 532px) {
      width: 250px;
    }
  }
`;

const StyledNoResults = styled.div`
  margin: ${basic.spacing.s200} ${basic.spacing.s0};
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
