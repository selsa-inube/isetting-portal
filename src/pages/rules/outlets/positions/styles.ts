import styled from "styled-components";

 const StyledContainer = styled.div`
  position: relative;
`;

 const StyledButtonWrapper = styled.div`
  & > a > button > div {
    gap: 8px;
  }
`;

 const StyledViewContainer = styled.div`
 & > div {
   padding: 12px;
 }
`;

const StyledCardContainer = styled.div`
  & > div {
    height: 364px;
    width: 332px;
  }
`;

export {StyledCardContainer, StyledContainer, StyledButtonWrapper, StyledViewContainer};