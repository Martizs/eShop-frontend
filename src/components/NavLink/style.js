import styled from "styled-components";

export const NavLinkCont = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  white-space: nowrap;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;
