import { PriceText } from "components/OrderPage/style";
import styled from "styled-components";
import { ColTitle, TableImg } from "../ProdTable/style";

export const MobProdCont = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.colors.highlightCol};
`;

export const MobItemCont = styled.div`
  padding: 20px 2%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondBackgrCol};
`;

export const MobTabRow = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.highlightCol};
  padding: 10px 0;
  &:last-child {
    border-bottom: 0;
  }
  @media (max-width: 370px) {
    width: 100%;
  }
`;

export const MobTabBut = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 370px) {
    width: 100%;
  }
`;

export const MobColTitle = styled(ColTitle)`
  margin: auto 0;
  padding-right: 5px;
`;

export const MobPriceText = styled(PriceText)``;

export const MobTableImg = styled(TableImg)`
  width: 50%;
`;
