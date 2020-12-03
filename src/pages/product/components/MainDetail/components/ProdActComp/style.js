import styled from "styled-components";

export const DiscWrapper = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.secondBackgrCol};
`;

export const ProdPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.highlightCol};
  margin: 40px 0;
`;

export const ProdDisc = styled.div`
  margin-left: 10px;
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.secondBackgrCol};
`;

export const PriceCont = styled.div`
  margin: 40px 0;
  display: flex;
`;

export const ProdTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const ProdDesc = styled.div`
  font-size: ${(props) => props.theme.fontSizes.subTitle};
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
