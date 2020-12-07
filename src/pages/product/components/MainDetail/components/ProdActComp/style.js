import styled from "styled-components";

export const DiscWrapper = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.secondBackgrCol};
`;

export const ProdPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.highlightCol};
  margin: 40px 0;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const ProdDisc = styled.div`
  margin-left: 10px;
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.secondBackgrCol};
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const PriceCont = styled.div`
  margin: 40px 0;
  display: flex;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const ProdTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const ProdDesc = styled.div`
  font-size: ${(props) => props.theme.fontSizes.subTitle};
  white-space: pre-wrap;
  padding-bottom: 30px;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const ActContainer = styled.div`
  display: flex;
  margin-top: auto;
`;

export const DDWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtContainer = styled.div`
  width: 80%;
  margin-left: auto;
`;

export const CounterWrap = styled.div`
  margin-top: auto;
`;
