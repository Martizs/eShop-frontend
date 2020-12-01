import styled from "styled-components";

export const UserInfAdmTxt = styled.div`
  width: 40%;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const UserInfAdmLabel = styled.span`
  color: ${({ theme }) => theme.colors.secondBackgrCol};
`;
