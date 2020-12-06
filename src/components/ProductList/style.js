import styled from "styled-components";
import { ArrowBackIos } from "@material-ui/icons";

export const ProdListCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const GridContainer = styled.div``;

export const GridRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CatDDCont = styled.div`
  width: 90%;
  margin: 0 auto;
  z-index: 10;
  padding-bottom: 20px;
`;

export const GridItem = styled.div`
  margin: 0 5px 20px 5px;
  width: 32%;
  @media (max-width: 600px) {
    width: 45%;
  }
`;

export const InnerCont = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ innerCont }) => (innerCont ? "60%" : "100%")};
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const BackPagArrow = styled(ArrowBackIos)`
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;

export const ForwPagArrow = styled(BackPagArrow)`
  transform: rotate(180deg);
`;
