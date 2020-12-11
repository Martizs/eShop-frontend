import styled from "styled-components";
import { Link } from "react-router-dom";
/* icons */
import { Menu } from "@material-ui/icons";
/* styles */
import { HeadFootCont } from "styles/HeadFootCont";

export const ActionHeadCont = styled(HeadFootCont)`
  display: flex;
`;

export const MenuBut = styled(Menu)`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.highlightCol};
  }
`;

export const ActHeadLog = styled(Link)`
  margin: 0 auto;

  @media (max-width: 300px) {
    margin: auto;
  }
`;
