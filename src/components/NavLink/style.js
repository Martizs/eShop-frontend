import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLinkCont = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${({ theme }) => theme.colors.textColor};
  text-decoration: none;
  white-space: nowrap;
  margin: auto 0;
  padding: 0 1%;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;
