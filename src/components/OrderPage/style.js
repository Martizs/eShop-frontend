import styled from "styled-components";
import { MainTitleText } from "styles/MainTitleText";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartContWrapper = styled.div`
  padding: 0 15%;
`;

export const PriceText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  white-space: nowrap;
  color: ${({ theme, red }) =>
    red ? theme.colors.secondBackgrCol : theme.colors.textColor};
`;

export const PersInfoTitle = styled(MainTitleText)`
  padding-top: 70px;
`;

export const CartBut = styled.div`
  width: 240px;
  margin: 0 auto;
`;

export const EmptyCartTxt = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 0 auto;
`;

export const SendOptAdmTxt = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SendOptAdmExtra = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SendOptAdmCont = styled.div``;
