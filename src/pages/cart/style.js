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
`;

export const PersInfoTitle = styled(MainTitleText)`
  padding-top: 70px;
`;

export const CartBut = styled.div`
  width: 240px;
  margin: 0 auto;
`;
