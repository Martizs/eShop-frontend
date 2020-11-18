import styled from "styled-components";

export const NavLinkCont = styled.div`
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fonts.bold};
  white-space: nowrap;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;
