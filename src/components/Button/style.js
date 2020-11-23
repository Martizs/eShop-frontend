import styled from "styled-components";

export const ButtonCont = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 5px 0;
  border: 2px solid;
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;
