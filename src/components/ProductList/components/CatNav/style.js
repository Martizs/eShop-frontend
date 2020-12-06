import styled from "styled-components";

export const CatNavCont = styled.div`
  display: flex;
  padding-bottom: 60px;
`;

export const CatBut = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 0 1%;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.highlightCol};
  }
  @media (max-width: 650px) {
    font-size: ${(props) => props.theme.fontSizes.subTitle};
  }
`;

export const Divider = styled.div`
  margin: ${({ margin }) => margin || "auto 0"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "4px"};
  background-color: ${({ theme }) => theme.colors.highlightCol};
`;
