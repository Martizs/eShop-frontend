import styled from "styled-components";

export const AdInpWraper = styled.div`
  padding: 10px 0;
`;

export const CatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: auto 0;
`;

export const CatContainer = styled(AdInpWraper)`
  display: flex;
`;

export const CatDDCont = styled.div`
  width: 60%;
  margin: auto;
  padding-left: 10px;
`;
