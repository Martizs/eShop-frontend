import styled from "styled-components";

export const ButtonCont = styled.div`
  font-size: ${(props) => props.fontSize || props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 5px 0;
  border: 2px solid;
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }

  @media (max-width: 1310px) {
    font-size: ${(props) =>
      props.fontSize ? "0.85rem" : props.theme.fontSizes.title};
  }
`;
