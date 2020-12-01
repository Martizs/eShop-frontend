import styled from "styled-components";

export const NotFoundCont = styled.div`
  margin: auto;
`;

export const NotFoundTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 5.6rem;
  text-align: center;
`;

export const NotFoundSubTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.title};
  text-align: center;
`;
