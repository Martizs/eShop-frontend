import styled from "styled-components";

export const ProdListCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 30px 0;
`;

export const TitleContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 10px;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const GridContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const GridRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const GridItem = styled.div`
  margin: 20px 5px;
  width: 32%;
`;
