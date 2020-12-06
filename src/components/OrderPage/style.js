import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartContWrapper = styled.div`
  padding: 0 15%;
  @media (max-width: 1190px) {
    padding: 0 2%;
  }
`;

export const PriceText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  white-space: nowrap;
  color: ${({ theme, red }) =>
    red ? theme.colors.secondBackgrCol : theme.colors.textColor};
  vertical-align: middle;

  @media (max-width: 880px) {
    font-size: ${({ theme }) => theme.mdFontSizes.title};
  }
  @media (max-width: 680px) {
    font-size: ${({ theme }) => theme.smFontSizes.title};
  }
`;

export const CartBut = styled.div`
  width: 240px;
  margin: 40px auto 0 auto;
`;

export const LoadCont = styled.div`
  display: flex;
`;

export const EmptyCartTxt = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 0 auto;
`;
